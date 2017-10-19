const { method } = require('@bufferapp/micro-rpc');
const rp = require('request-promise');
const moment = require('moment');
const DateRange = require('../utils/DateRange');
const METRICS_CONFIG = require('./metricsConfig');


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
      label,
      color: METRICS_CONFIG[profileService].config[metricKey].color,
      value,
      postsCount: currentPeriodPostCount,
    };
  }
  return null;
};

function formatDaily(
  currentPeriodDailyTotalsResult,
  profileService,
) {
  const currentPeriodDays = Object.keys(currentPeriodDailyTotalsResult);
  const daily = Array.from(currentPeriodDays, day => ({
    day,
    currentPeriodMetrics: currentPeriodDailyTotalsResult[day],
    currentPeriodPostCount: currentPeriodDailyTotalsResult[day].posts_count,
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

function formatData(
  currentPeriodDailyTotalsResult,
  profileService,
) {
  const daily = formatDaily(
    currentPeriodDailyTotalsResult,
    profileService,
  );
  const metrics = getMetrics(profileService);

  return {
    daily,
    metrics,
  };
}

module.exports = method(
  'contextual',
  'fetch analytics contextual for profiles and pages',
  ({ profileId, profileService, startDate, endDate }, { session }) => {
    const end = moment.unix(endDate).format('MM/DD/YYYY');
    const start = moment.unix(startDate).format('MM/DD/YYYY');
    const dateRange = new DateRange(start, end);
    const currentPeriodDailyTotals = requestDailyTotals(profileId, dateRange, session.accessToken);

    return Promise
      .all([
        currentPeriodDailyTotals,
      ])
      .then((response) => {
        const currentPeriodDailyTotalsResult = response[0].response;

        return formatData(
          currentPeriodDailyTotalsResult,
          profileService,
        );
      })
      .catch(() => ({
        daily: [],
        metrics: [],
      }));
  },
);
