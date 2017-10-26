const { method } = require('@bufferapp/micro-rpc');
const rp = require('request-promise');
const moment = require('moment');
const DateRange = require('../utils/DateRange');
const METRICS_CONFIG = require('./metricsConfig');
const PRESETS = require('./presets');

const requestDailyTotals = (profileId, dateRange, accessToken) =>
  rp({
    uri: `${process.env.API_ADDR}/1/profiles/${profileId}/analytics/contextual.json`,
    method: 'GET',
    strictSSL: !(process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test'),
    qs: {
      access_token: accessToken,
      start_date: dateRange.start,
      end_date: dateRange.end,
    },
    json: true,
  });

function formatDaily(
  dailyTotalsResult,
  profileService,
) {
  const daily = dailyTotalsResult.map((dayData) => {
    const postsCount = dayData.metrics.find(m => m.key === 'posts_count').value;
    const metrics = dayData.metrics.map(metric => Object.assign({},
      {
        postsCount,
      },
      METRICS_CONFIG[profileService].config[metric.key],
      metric,
    ));
    return {
      day: dayData.day,
      metrics,
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
  const daily = dailyTotalsResult.map((dayData) => {
    const postsCount = dayData.metrics.find(m => m.key === 'posts_count').value;
    return {
      day: dayData.day,
    };
  });
  return { data: daily };
}

function processPreset(
  preset,
  presetResult,
) {
  let data = [];

  switch (preset.xAxis) {
    default:
      data = formatDailyDataForPresets(preset.yAxis, presetResult);
      break;
  }

  return Object.assign(
    {},
    preset,
    data,
  );
}

function formatPresets(
  presetsResults,
  profileService,
) {
  return PRESETS[profileService].map(
    preset => processPreset(preset, presetsResults),
  );
}

function formatData(
  contextualResponse,
  profileService,
) {
  const daily = formatDaily(
    contextualResponse.daily,
    profileService,
  );

  const metrics = getMetrics(profileService);

  // const presets = formatPresets(
  //   contextualResponse.presets,
  //   profileService,
  // );

  return {
    daily,
    // metrics,
    // presets,
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
        const contextualResponse = response[0].response;

        return formatData(
          contextualResponse,
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
