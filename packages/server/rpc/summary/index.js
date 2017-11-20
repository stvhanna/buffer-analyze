const { method } = require('@bufferapp/micro-rpc');
const rp = require('request-promise');
const moment = require('moment');
const DateRange = require('../utils/DateRange');

const LABELS = {
  engaged_users: 'Engaged Users',
  post_impressions: 'Post Impressions',
  reactions: 'Reactions',
  post_reach: 'Post Reach',
  page_engagements: 'Page & Post Engagements',
  post_clicks: 'Post Clicks',
  new_followers: 'New Fans',
  posts_count: 'Posts',
  favorites: 'Likes',
  impressions: 'Impressions',
  replies: 'Replies',
  retweets: 'Retweets',
  url_clicks: 'Clicks',
  engagements: 'Engagements',
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

const excludeFollowerCount = metrics => metrics.filter(metric => metric !== 'followers');

const percentageDifference = (value, pastValue) => {
  const difference = value - pastValue;
  return Math.ceil((difference / pastValue) * 100);
};

const summarize = (metric, currentPeriod, pastPeriod) => {
  const pastValue = pastPeriod[metric];
  const value = currentPeriod[metric];
  return {
    value,
    diff: percentageDifference(value, pastValue),
    label: LABELS[metric],
  };
};

module.exports = method(
  'summary',
  'fetch analytics summary for profiles and pages',
  ({ profileId, startDate, endDate }, { session }) => {
    const end = moment.unix(endDate).format('MM/DD/YYYY');
    const start = moment.unix(startDate).format('MM/DD/YYYY');
    const dateRange = new DateRange(start, end);
    const previousDateRange = dateRange.getPreviousDateRange();

    const currentPeriod = requestTotals(profileId, dateRange, session.analyze.accessToken);
    const previousPeriod = requestTotals(profileId, previousDateRange, session.analyze.accessToken);

    return Promise
      .all([currentPeriod, previousPeriod])
      .then((response) => {
        const currentPeriodResult = response[0].response;
        const pastPeriodResult = response[1].response;
        const metrics = Object.keys(currentPeriodResult);
        return excludeFollowerCount(metrics).map(metric =>
          summarize(metric, currentPeriodResult, pastPeriodResult),
        );
      })
      .catch(() => []);
  },
);
