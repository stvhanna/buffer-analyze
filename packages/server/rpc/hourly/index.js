const moment = require('moment');
const { method } = require('@bufferapp/micro-rpc');
const rp = require('request-promise');

const METRICS = [{
  key: 'engagements',
  label: 'Engagements',
}, {
  key: 'impressions',
  label: 'Impressions',
}, {
  key: 'favorites',
  label: 'Likes',
}, {
  key: 'url_clicks',
  label: 'Clicks',
}, {
  key: 'retweets',
  label: 'Retweets',
}, {
  key: 'replies',
  label: 'Replies',
}];

module.exports = method(
  'hourly',
  'fetch hourly insights for profiles',
  ({ profileId, startDate, endDate }, { session }) => {
    const start = moment.unix(startDate).format('MM/DD/YYYY');
    const end = moment.unix(endDate).format('MM/DD/YYYY');
    return rp({
      uri: `${process.env.API_ADDR}/1/profiles/${profileId}/analytics/hourly_totals.json`,
      method: 'GET',
      strictSSL: !(process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test'),
      qs: {
        access_token: session.accessToken,
        start_date: start,
        end_date: end,
      },
      json: true,
    }).then(({ response }) => {
      const hours = Object.keys(response);
      const postsCount = hours.map(hour => response[hour].posts_count);
      const metrics = METRICS.map(metric => ({
        label: metric.label,
        hourlyMetrics: hours.map(hour => response[hour][metric.key]),
      }));
      return {
        postsCount,
        metrics,
      };
    });
  },
);
