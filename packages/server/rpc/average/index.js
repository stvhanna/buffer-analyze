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

function percentageDifference (value, pastValue) {
  const difference = value - pastValue;
  return Math.ceil((difference / pastValue) * 100);
}

function averageValue(value, quantity) {
  return Math.round(value / quantity);
}

const summarize = (
  metric,
  currentPeriod,
  currentPeriodPostCount,
  pastPeriod,
  pastPeriodPostCount,
) => {
  const pastValue = averageValue(pastPeriod[metric], pastPeriodPostCount);
  const value = averageValue(currentPeriod[metric], currentPeriodPostCount);
  const label = LABELS[metric];
  if (label) {
    return {
      diff: percentageDifference(value, pastValue),
      label: LABELS[metric],
      value,
    };
  }
  return null;
};

module.exports = method(
  'average',
  'fetch analytics average for profiles and pages',
  ({ profileId, startDate, endDate }, { session }) => {
    const end = moment.unix(endDate).format('MM/DD/YYYY');
    const start = moment.unix(startDate).format('MM/DD/YYYY');
    const dateRange = new DateRange(start, end);
    const previousDateRange = dateRange.getPreviousDateRange();

    const currentPeriod = requestTotals(profileId, dateRange, session.accessToken);
    const previousPeriod = requestTotals(profileId, previousDateRange, session.accessToken);

    return Promise
      .all([currentPeriod, previousPeriod])
      .then((response) => {
        const currentPeriodResult = response[0].response;
        const pastPeriodResult = response[1].response;
        const currentPeriodPostCount = currentPeriodResult.posts_count;
        const pastPeriodPostCount = pastPeriodResult.posts_count;
        const metrics = Object.keys(currentPeriodResult);
        return metrics
          .map(metric =>
            summarize(
              metric,
              currentPeriodResult,
              currentPeriodPostCount,
              pastPeriodResult,
              pastPeriodPostCount,
            ),
          )
          .filter(metric => metric !== null);
      })
      .catch(() => []);
  },
);
