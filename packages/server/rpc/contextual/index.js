const { method } = require('@bufferapp/micro-rpc');
const rp = require('request-promise');
const moment = require('moment');
const DateRange = require('../utils/DateRange');
const METRICS_CONFIG = require('./metricsConfig');
const PRESETS = require('./presets');

const requestContextual = (profileId, dateRange, accessToken) =>
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
    const postsCountMetric = dayData.metrics.find(m => m.key === 'posts_count');
    const metrics = dayData.metrics.map(metric => Object.assign({},
      {
        postsCount: postsCountMetric ? postsCountMetric.value : 0,
      },
      METRICS_CONFIG[profileService].config[metric.key],
      metric,
    ));
    return {
      day: dayData.category ? null : String(dayData.day),
      category: dayData.category,
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

function formatPresetYAxis(yAxis, profileService) {
  return Object.assign({},
    yAxis,
    {
      metrics: yAxis.metrics.map(metric => Object.assign({},
        METRICS_CONFIG[profileService].config[metric.key],
        metric,
      )),
    },
  );
}

function formatPresets(
  presetsResults,
  profileService,
) {
  return presetsResults
    .filter(preset => Object.keys(PRESETS[profileService]).indexOf(preset.presetKey) >= 0)
    .map(
      preset => Object.assign({},
        preset,
        PRESETS[profileService][preset.presetKey],
        {
          data: formatDaily(preset.data, profileService),
          yAxis: formatPresetYAxis(preset.yAxis, profileService),
        },
      ));
}

function formatData(
  contextualResponse,
  profileService,
) {
  const data = formatDaily(
    contextualResponse.daily,
    profileService,
  );

  const metrics = getMetrics(profileService);

  const presets = formatPresets(
    contextualResponse.presets,
    profileService,
  );

  return {
    data,
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
    return requestContextual(
      profileId,
      dateRange,
      session.analyze.accessToken,
    )
      .then(response => formatData(
        response.response,
        profileService,
      ))
      .catch(() => ({
        data: [],
        metrics: [],
        presets: [],
      }));
  },
);
