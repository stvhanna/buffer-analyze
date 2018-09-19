const { method } = require('@bufferapp/buffer-rpc');
const rp = require('request-promise');
const DateRange = require('../utils/DateRange');

const METRICS = {
  primary_metric: ['avg_post_reach', 'avg_reach', 'avg_impressions'],
  secondary_metric: ['avg_engagement_rate'],
};

function getLabels(profileService) {
  return {
    primary_metric: profileService === 'twitter' ? 'Impressions' : 'Reach',
    secondary_metric: 'Engagement Rate',
  };
}


function shouldUseAnalyzeApi (profileService) {
  return profileService === 'instagram';
}

const requestHashtags = (profileId, profileService, dateRange, accessToken, analyzeApiAddr) =>
  rp({
    uri: (shouldUseAnalyzeApi(profileService) ?
      `${analyzeApiAddr}/metrics/hashtags` :
      `${process.env.API_ADDR}/1/profiles/${profileId}/analytics/hashtags.json`
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

const extractMetrics = (hashtags) => {
  return hashtags.map((hashtag) => {
    const metricsKeys = Object.keys(METRICS);
    const hashtagMetricsKeys = Object.keys(hashtag);
    const metrics = {};

    hashtagMetricsKeys.forEach((hashtagMetricKey) => {
      metricsKeys.forEach((metricKey) => {
        if ((METRICS[metricKey]).indexOf(hashtagMetricKey) !== -1) {
          metrics[metricKey] = hashtag[hashtagMetricKey];
        }
      });
    });

    return Object.assign(metrics, {
      display_name: hashtag.display_name,
      posts_count: hashtag.posts_count,
    });
  });
};

module.exports = method(
  'hashtags',
  'fetch hashtags for a given profile',
  ({ profileId, profileService, startDate, endDate }, req) => {
    const dateRange = new DateRange(startDate, endDate);

    return requestHashtags(
      profileId,
      profileService,
      dateRange,
      req.session.analyze.accessToken,
      req.app.get('analyzeApiAddr'),
    )
      .then(({ response }) => {
        return {
          hashtags: extractMetrics(response.hashtags),
          labels: getLabels(profileService),
        };
      })
      .catch(() => []);
  },
);
