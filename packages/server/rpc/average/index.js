const { method } = require('@bufferapp/micro-rpc');
const rp = require('request-promise');
const moment = require('moment');
const DateRange = require('../utils/DateRange');

// We are using this to filter down the metrics we want
const LABELS = {
  // Facebook metrics
  post_impressions: 'Impression average',
  page_engagements: 'Engagement average',
  post_clicks: 'Click average',
  // Twitter metrics
  impressions: 'Impression average',
  engagements: 'Engagement Average',
  url_clicks: 'Click average',
};

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

function percentageDifference (value, pastValue) {
  if (pastValue === 0 && value === 0) return 0;
  const difference = value - pastValue;
  if (pastValue === 0) pastValue = 1; // can't divide by 0
  return Math.ceil((difference / pastValue) * 100);
}

function averageValue(value, quantity) {
  if (value === 0) return 0;
  if (quantity === 0) quantity = 1; // can't divide by 0
  return Math.round(value / quantity);
}

const summarize = (
  metriKey,
  currentPeriod,
  currentPeriodPostCount,
  pastPeriod,
  pastPeriodPostCount,
) => {
  const pastValue = averageValue(pastPeriod[metriKey], pastPeriodPostCount);
  const value = averageValue(currentPeriod[metriKey], currentPeriodPostCount);
  const label = LABELS[metriKey];
  if (label) {
    return {
      diff: percentageDifference(value, pastValue),
      label: LABELS[metriKey],
      value,
    };
  }
  return null;
};

function formatTotals(
  currentPeriodResult,
  currentPeriodPostCount,
  pastPeriodResult,
  pastPeriodPostCount,
) {
  return Object
    .keys(currentPeriodResult)
    .map(metriKey =>
      summarize(
        metriKey,
        currentPeriodResult,
        currentPeriodPostCount,
        pastPeriodResult,
        pastPeriodPostCount,
      ),
    )
    .filter(metric => metric !== null);
}

function formatDaily(
  currentPeriodDailyTotalsResult,
  pastPeriodDailyTotalsResult,
) {
  const currentPeriodDays = Object.keys(currentPeriodDailyTotalsResult);
  const pastPeriodDays = Object.keys(pastPeriodDailyTotalsResult);
  const daily = Array.from(currentPeriodDays, (day, index) => ({
    day,
    currentPeriodMetrics: currentPeriodDailyTotalsResult[day],
    pastPeriodMetrics: pastPeriodDailyTotalsResult[pastPeriodDays[index]],
    currentPeriodPostCount: currentPeriodDailyTotalsResult[day].posts_count,
    pastPeriodPostCount: pastPeriodDailyTotalsResult[pastPeriodDays[index]].posts_count,
  })).map((data) => {
    const dailyMetrics = Object.keys(data.currentPeriodMetrics);
    return {
      day: data.day,
      metrics: dailyMetrics.map(metriKey =>
        summarize(
          metriKey,
          data.currentPeriodMetrics,
          data.currentPeriodPostCount,
          data.pastPeriodMetrics,
          data.pastPeriodPostCount,
        ),
      ).filter(metric => metric !== null),
    };
  });
  return daily;
}

function formatData(
  currentPeriodResult,
  currentPeriodPostCount,
  pastPeriodResult,
  pastPeriodPostCount,
  currentPeriodDailyTotalsResult,
  pastPeriodDailyTotalsResult,
) {
  const totals = formatTotals(
    currentPeriodResult,
    currentPeriodPostCount,
    pastPeriodResult,
    pastPeriodPostCount,
  );

  const daily = formatDaily(
    currentPeriodDailyTotalsResult,
    pastPeriodDailyTotalsResult,
  );

  return {
    totals,
    daily,
  };
}

module.exports = method(
  'average',
  'fetch analytics average for profiles and pages',
  ({ profileId, startDate, endDate }, { session }) => {
    const end = moment.unix(endDate).format('MM/DD/YYYY');
    const start = moment.unix(startDate).format('MM/DD/YYYY');
    const dateRange = new DateRange(start, end);
    const pastDateRange = dateRange.getPreviousDateRange();

    const currentPeriodTotals = requestTotals(profileId, dateRange, session.analyze.accessToken);
    const pastPeriodTotals = requestTotals(profileId, pastDateRange, session.analyze.accessToken);

    const currentPeriodDailyTotals = requestDailyTotals(profileId, dateRange, session.analyze.accessToken);
    const pastPeriodDailyTotals = requestDailyTotals(profileId, pastDateRange, session.analyze.accessToken);

    return Promise
      .all([currentPeriodTotals, pastPeriodTotals, currentPeriodDailyTotals, pastPeriodDailyTotals])
      .then((response) => {
        const currentPeriodTotalsResult = response[0].response;
        const pastPeriodTotalsResult = response[1].response;
        const currentPeriodTotalsPostCount = currentPeriodTotalsResult.posts_count;
        const pastPeriodTotalsPostCount = pastPeriodTotalsResult.posts_count;

        const currentPeriodDailyTotalsResult = response[2].response;
        const pastPeriodDailyTotalsResult = response[3].response;

        return formatData(
          currentPeriodTotalsResult,
          currentPeriodTotalsPostCount,
          pastPeriodTotalsResult,
          pastPeriodTotalsPostCount,
          currentPeriodDailyTotalsResult,
          pastPeriodDailyTotalsResult,
        );
      })
      .catch(() => ({
        totals: [],
        daily: [],
      }));
  },
);
