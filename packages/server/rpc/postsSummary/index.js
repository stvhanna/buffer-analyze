const { method } = require('@bufferapp/micro-rpc');
const rp = require('request-promise');
const moment = require('moment');
const DateRange = require('../summary/DateRange');

const LABELS = {
  // facebook
  shares: 'Shares',
  reactions: 'Reactions',
  comments: 'comments',
  post_impressions: 'Post Impressions',
  post_reach: 'Post Reach',
  // twitter
  retweets: 'Retweets',
  impressions: 'Impressions',
  favorites: 'Favorites',
  replies: 'Replies',
  url_clicks: 'Clicks',
  // common metric labels
  posts_count: 'Posts',
};

const requestPostsSummary = (profileId, dateRange, accessToken) =>
  rp({
    uri: `${process.env.API_ADDR}/1/profiles/${profileId}/analytics/postsSummary.json`,
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
  'posts_summary',
  'fetch analytics posts summary for profiles and pages',
  ({ profileId, startDate, endDate }, { session }) => {
    const end = moment.unix(endDate).format('MM/DD/YYYY');
    const start = moment.unix(startDate).format('MM/DD/YYYY');
    const dateRange = new DateRange(start, end);
    const previousDateRange = dateRange.getPreviousDateRange();

    const currentPeriod = requestPostsSummary(profileId, dateRange, session.accessToken);
    const previousPeriod = requestPostsSummary(profileId, previousDateRange, session.accessToken);

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
