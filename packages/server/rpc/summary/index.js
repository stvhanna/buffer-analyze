const { method } = require('@bufferapp/micro-rpc');
const rp = require('request-promise');
const DateRange = require('../utils/DateRange');

// This also also used to filter down the metrics to return
const LABELS = {
  twitter: {
    posts_count: 'Posts',
    retweets: 'Retweets',
    impressions: 'Impressions',
    engagements: 'Engagements',
    replies: 'Replies',
    url_clicks: 'Clicks',
    favorites: 'Likes',
    new_followers: 'New Followers',
  },
  facebook: {
    engaged_users: 'Engaged Users',
    post_impressions: 'Post Impressions',
    reactions: 'Reactions',
    post_reach: 'Post Reach',
    page_engagements: 'Page & Post Engagements',
    post_clicks: 'Link Clicks',
    new_followers: 'New Fans',
    posts_count: 'Posts',
  },
  instagram: {
    posts_count: 'Posts',
    likes: 'Likes',
    comments: 'Comments',
    followers: 'Total Followers',
    new_followers: 'New Followers',
  },
};

function shouldUseAnalyzeApi (profileService) {
  return profileService === 'instagram';
}

const requestTotals = (profileId, profileService, dateRange, accessToken) =>
  rp({
    uri: (shouldUseAnalyzeApi(profileService) ?
      `${process.env.ANALYZE_API_ADDR}/metrics/totals` :
      `${process.env.API_ADDR}/1/profiles/${profileId}/analytics/totals.json`
    ),
    method: (shouldUseAnalyzeApi(profileService) ?
      'POST' :
      'GET'
    ),
    strictSSL: !(process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test'),
    qs: {
      access_token: accessToken,
      start_date: dateRange.start,
      end_date: dateRange.end,
      profile_id: (shouldUseAnalyzeApi(profileService) ?
        profileId :
        null
      ),
    },
    json: true,
  });

const percentageDifference = (value, pastValue) => {
  const difference = value - pastValue;
  return Math.ceil((difference / pastValue) * 100);
};

const summarize = (metric, currentPeriod, pastPeriod, profileService) => {
  const pastValue = pastPeriod[metric];
  const value = currentPeriod[metric];
  return {
    value,
    diff: percentageDifference(value, pastValue),
    label: LABELS[profileService][metric],
  };
};

module.exports = method(
  'summary',
  'fetch analytics summary for profiles and pages',
  ({ profileId, profileService, startDate, endDate }, { session }) => {
    const dateRange = new DateRange(startDate, endDate);
    const previousDateRange = dateRange.getPreviousDateRange();

    const currentPeriod = requestTotals(
      profileId,
      profileService,
      dateRange,
      session.analyze.accessToken,
    );
    const previousPeriod = requestTotals(
      profileId,
      profileService,
      previousDateRange,
      session.analyze.accessToken,
    );

    return Promise
      .all([currentPeriod, previousPeriod])
      .then((response) => {
        const currentPeriodResult = response[0].response;
        const pastPeriodResult = response[1].response;
        const metrics = Object.keys(currentPeriodResult);
        return metrics
          .map(metric =>
            summarize(metric, currentPeriodResult, pastPeriodResult, profileService),
          )
          .filter(metric =>
            metric.label !== undefined,
          );
      })
      .catch(() => []);
  },
);
