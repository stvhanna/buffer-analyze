
const { method } = require('@bufferapp/micro-rpc');
const rp = require('request-promise');
const moment = require('moment');
const DateRange = require('../utils/DateRange');
const METRICS_CONFIG = require('./metricsConfig');

const requestTotals = (profileId, dateRange, accessToken) =>
  rp({
    uri: `${process.env.API_ADDR}/1/profiles/${profileId}/analytics/totals.json`,
    method: 'GET',
    strictSSL: !(process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test'),
    qs: {
      access_token: accessToken,
      start_date: dateRange.start,
      end_date: dateRange.end,
    },
    json: true,
  });

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

function percentageDifference (value, previousValue) {
  if (previousValue === 0 && value === 0) return 0;
  const difference = value - previousValue;
  if (previousValue === 0) previousValue = 1; // can't divide by 0
  return Math.ceil((difference / previousValue) * 100);
}

const summarize = (
  metriKey,
  currentPeriod,
  currentPeriodPostCount,
  previousPeriod,
  previousPeriodPostCount,
  profileService,
) => {
  const previousValue = previousPeriod[metriKey];
  const value = currentPeriod[metriKey];
  const label = METRICS_CONFIG[profileService][metriKey].label;
  if (label) {
    return {
      diff: percentageDifference(value, previousValue),
      label,
      color: METRICS_CONFIG[profileService][metriKey].color,
      value,
      previous_value: previousValue,
      posts_count: currentPeriodPostCount,
      previous_posts_count: previousPeriodPostCount,
    };
  }
  return null;
};

function formatTotals(
  currentPeriodResult,
  currentPeriodPostCount,
  previousPeriodResult,
  previousPeriodPostCount,
  profileService,
) {
  return Object
    .keys(currentPeriodResult)
    .map(metriKey =>
      summarize(
        metriKey,
        currentPeriodResult,
        currentPeriodPostCount,
        previousPeriodResult,
        previousPeriodPostCount,
        profileService,
      ),
    )
    .filter(metric => metric !== null);
}

function formatDaily(
  currentPeriodDailyTotalsResult,
  previousPeriodDailyTotalsResult,
  profileService,
) {
  const currentPeriodDays = Object.keys(currentPeriodDailyTotalsResult);
  const previousPeriodDays = Object.keys(previousPeriodDailyTotalsResult);
  const daily = Array.from(currentPeriodDays, (day, index) => ({
    day,
    currentPeriodMetrics: currentPeriodDailyTotalsResult[day],
    previousPeriodMetrics: previousPeriodDailyTotalsResult[previousPeriodDays[index]],
    currentPeriodPostCount: currentPeriodDailyTotalsResult[day].posts_count,
    previousPeriodPostCount: previousPeriodDailyTotalsResult[previousPeriodDays[index]].posts_count,
  })).map((data) => {
    const dailyMetrics = Object.keys(data.currentPeriodMetrics);
    return {
      day: data.day,
      metrics: dailyMetrics.map(metriKey =>
        summarize(
          metriKey,
          data.currentPeriodMetrics,
          data.currentPeriodPostCount,
          data.previousPeriodMetrics,
          data.previousPeriodPostCount,
          profileService,
        ),
      ).filter(metric => metric !== null),
    };
  });
  return daily;
}

function formatData(
  currentPeriodResult,
  currentPeriodPostCount,
  previousPeriodResult,
  previousPeriodPostCount,
  currentPeriodDailyTotalsResult,
  previousPeriodDailyTotalsResult,
  profileService,
) {
  const totals = formatTotals(
    currentPeriodResult,
    currentPeriodPostCount,
    previousPeriodResult,
    previousPeriodPostCount,
    profileService,
  );

  const daily = formatDaily(
    currentPeriodDailyTotalsResult,
    previousPeriodDailyTotalsResult,
    profileService,
  );

  return {
    totals,
    daily,
  };
}

module.exports = method(
  'compare',
  'fetch analytics compare for profiles and pages',
  ({ profileId, profileService, startDate, endDate }, { session }) => {
    const end = moment.unix(endDate).format('MM/DD/YYYY');
    const start = moment.unix(startDate).format('MM/DD/YYYY');
    const dateRange = new DateRange(start, end);
    const previousDateRange = dateRange.getPreviousDateRange();

    const currentPeriodTotals = requestTotals(profileId, dateRange, session.accessToken);
    const previousPeriodTotals = requestTotals(profileId, previousDateRange, session.accessToken);

    const currentPeriodDailyTotals = requestDailyTotals(profileId, dateRange, session.accessToken);
    const previousPeriodDailyTotals = requestDailyTotals(
      profileId,
      previousDateRange,
      session.accessToken,
    );

    return Promise
      .all([
        currentPeriodTotals,
        previousPeriodTotals,
        currentPeriodDailyTotals,
        previousPeriodDailyTotals,
      ])
      .then((response) => {
        const currentPeriodTotalsResult = response[0].response;
        const previousPeriodTotalsResult = response[1].response;
        const currentPeriodTotalsPostCount = currentPeriodTotalsResult.posts_count;
        const previousPeriodTotalsPostCount = previousPeriodTotalsResult.posts_count;

        const currentPeriodDailyTotalsResult = response[2].response;
        const previousPeriodDailyTotalsResult = response[3].response;

        return formatData(
          currentPeriodTotalsResult,
          currentPeriodTotalsPostCount,
          previousPeriodTotalsResult,
          previousPeriodTotalsPostCount,
          currentPeriodDailyTotalsResult,
          previousPeriodDailyTotalsResult,
          profileService,
        );
      })
      .catch(() => ({
        totals: [],
        daily: [],
      }));
  },
);
