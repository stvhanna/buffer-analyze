const { method } = require('@bufferapp/micro-rpc');
const rp = require('request-promise');
const moment = require('moment');
const DateRange = require('../utils/DateRange');
const METRICS_CONFIG = require('./metricsConfig');
const PRESETS = require('./presets');

const requestDailyTotals = (profileId, dateRange, accessToken) =>
  rp({
    uri: `${process.env.API_ADDR}/1/profiles/${profileId}/analytics/daily_totals.json`,
    method: 'GET',
    strictSSL: !(process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test'),
    qs: {
      access_token: accessToken,
      start_date: dateRange.start,
      end_date: dateRange.end,
    },
    json: true,
  });

const summarize = (
  metricKey,
  currentPeriod,
  currentPeriodPostCount,
  profileService,
) => {
  const value = currentPeriod[metricKey] || 0;
  const label = METRICS_CONFIG[profileService].config[metricKey].label;
  if (label) {
    return {
      key: metricKey,
      label,
      color: METRICS_CONFIG[profileService].config[metricKey].color,
      value,
      postsCount: currentPeriodPostCount,
    };
  }
  return null;
};

function formatDaily(
  dailyTotalsResult,
  profileService,
) {
  const currentPeriodDays = Object.keys(dailyTotalsResult);
  const daily = Array.from(currentPeriodDays, day => ({
    day,
    currentPeriodMetrics: dailyTotalsResult[day],
    currentPeriodPostCount: dailyTotalsResult[day].posts_count,
  })).map((data) => {
    const metricKeys = METRICS_CONFIG[profileService].orderedKeys;
    return {
      day: data.day,
      previousPeriodDay: data.previousPeriodDay,
      metrics: metricKeys.map(metricKey =>
        summarize(
          metricKey,
          data.currentPeriodMetrics,
          data.currentPeriodPostCount,
          profileService,
        ),
      ).filter(metric => metric !== null),
    };
  });
  return daily;
}

function getMetrics(profileService) {
  return METRICS_CONFIG[profileService].orderedKeys.map(
    metricKey => METRICS_CONFIG[profileService].config[metricKey],
  );
}

function processValueForPresetMetric(
  metricConfig,
  data,
) {
  let value = 0;
  switch (metricConfig.aggregationRule) {
    // if no aggregation rule is specified we are expecting just one metric Key
    default:
      value = data[metricConfig.key] || 0;
      break;
  }
  return value;
}

function formatDailyDataForPresets(
  yAxis,
  dailyTotalsResult,
) {
  const currentPeriodDays = Object.keys(dailyTotalsResult);
  const daily = Array.from(currentPeriodDays, day => ({
    day,
    dayData: dailyTotalsResult[day],
  })).map((data) => {
    const presetMetric = yAxis.metrics;
    return {
      day: data.day,
      metrics: presetMetric.map(metricConfig => Object.assign({},
        metricConfig,
        {
          value: processValueForPresetMetric(metricConfig, data.dayData),
        },
      )),
    };
  });
  return { data: daily };
}

function processPreset(
  preset,
  dailyTotalsResult,
) {
  let data = [];

  switch (preset.xAxis) {
    default:
      data = formatDailyDataForPresets(preset.yAxis, dailyTotalsResult);
      break;
  }

  return Object.assign(
    {},
    preset,
    data,
  );
}

function formatPresets(
  dailyTotalsResult,
  profileService,
) {
  return PRESETS[profileService].map(
    preset => processPreset(preset, dailyTotalsResult),
  );
}

function formatData(
  dailyTotalsResult,
  profileService,
) {
  const daily = formatDaily(
    dailyTotalsResult,
    profileService,
  );

  const metrics = getMetrics(profileService);

  const presets = formatPresets(
    dailyTotalsResult,
    profileService,
  );

  return {
    daily,
    metrics,
    presets,
  };
}

module.exports = method(
  'contextual',
  'fetch analytics contextual for profiles and pages',
  ({ profileId, profileService, startDate, endDate }, { session }) => {
    const end = moment.unix(endDate).format('MM/DD/YYYY');
    const start = moment.unix(startDate).format('MM/DD/YYYY');
    const dateRange = new DateRange(start, end);
    const dailyTotals = requestDailyTotals(profileId, dateRange, session.accessToken);

    return Promise
      .all([
        dailyTotals,
      ])
      .then((response) => {
        const dailyTotalsResult = response[0].response;

        return formatData(
          dailyTotalsResult,
          profileService,
        );
      })
      .catch(() => ({
        daily: [],
        metrics: [],
        presets: [],
      }));
  },
);
