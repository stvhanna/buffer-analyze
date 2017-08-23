const { method } = require('@bufferapp/micro-rpc');
const rp = require('request-promise');
import moment from 'moment';

const LABELS = {
  engaged_users: "Engaged Users",
  post_impressions: "Post Impressions",
  reactions: "Reactions",
  post_reach: "Post Reach",
  page_engagements: "Page & Post Engagements",
  post_clicks: "Post Clicks",
  new_followers: "New Fans",
  posts_count: "Posts",
};

const requestTotals = (profileId, start_date, end_date, access_token) => 
  rp({
    uri: `${process.env.API_ADDR}/1/profiles/${profileId}/analytics/totals.json`,
    method: 'GET',
    strictSSL: !(process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test'),
    qs: {
      access_token,
      start_date,
      end_date
    },
    json: true,
  });

module.exports = method(
  'summary',
  'fetch analytics summary for profiles and pages',
  ({ profileId }, { session }) => {
    const start_date = moment().subtract(1, 'days').format('MM/DD/YYYY');
    const end_date = moment().subtract(7, 'days').format('MM/DD/YYYY');

    const previous_start_date = moment(start_date, 'MM/DD/YYYY').subtract(7, 'days').format('MM/DD/YYYY');
    const previous_end_date = moment(end_date, 'MM/DD/YYYY').subtract(7, 'days').format('MM/DD/YYYY');

    const currentPeriod = requestTotals(profileId, start_date, end_date, session.accessToken);
    const previousPeriod = requestTotals(profileId, previous_start_date, previous_end_date, session.accessToken);
    return Promise
      .all([currentPeriod, previousPeriod])
      .then(response => {
        const currentPeriodResult = JSON.parse(response[0]).response;
        const pastPeriodResult = JSON.parse(response[1]).response;
        const summary = [];
        for (const metric in currentPeriodResult) {
          if (metric !== 'followers') {
            const pastValue = pastPeriodResult[metric];
            summary.push({
              value: currentPeriodResult[metric],
              diff: Math.ceil((currentPeriodResult[metric] - pastValue)/pastValue * 100),
              label: LABELS[metric],
            });
          }
        }
        return summary;
      })
      .catch(e => []);
    ;
  }
);
