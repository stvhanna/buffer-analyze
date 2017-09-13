const instagram = {};

instagram.commentsMetric = {
  label: 'Comments',
  averageLabel: 'Comments',
  lowerCaseLabel: 'comments',
  averageLowerCaseLabel: 'comments',
  key: 'comments',
  apiKey: 'comments',
  supportsPeriodTotal: true,
  color: '#EFDF00',
  value: 0,
  previousValue: 0,
  diff: 0,
  average: 0,
  previousAverage: 0,
  averageDiff: 0,
};

instagram.likesMetric = {
  label: 'Likes',
  averageLabel: 'Likes',
  lowerCaseLabel: 'likes',
  averageLowerCaseLabel: 'likes',
  key: 'likes',
  apiKey: 'likes',
  supportsPeriodTotal: true,
  color: '#FD8F90',
  value: 0,
  previousValue: 0,
  diff: 0,
  average: 0,
  previousAverage: 0,
  averageDiff: 0,
};

instagram.countMetric = {
  label: 'Posts',
  averageLabel: 'Posts',
  lowerCaseLabel: 'posts',
  averageLowerCaseLabel: 'posts',
  key: 'postsCount',
  apiKey: 'posts_count',
  supportsPeriodTotal: true,
  color: '#3A92D3',
  value: 0,
  previousValue: 0,
  diff: 0,
  average: 0,
  previousAverage: 0,
  averageDiff: 0,
};

instagram.followersMetric = {
  label: 'Total Followers',
  averageLabel: 'Total Followers',
  lowerCaseLabel: 'followers',
  averageLowerCaseLabel: 'followers',
  key: 'followers',
  apiKey: 'followers',
  supportsPeriodTotal: true,
  color: '#FDA3F3',
  value: 0,
  previousValue: 0,
  diff: 0,
  average: 0,
  previousAverage: 0,
  averageDiff: 0,
};

instagram.followsMetric = {
  label: 'Follows to',
  key: 'follows',
  apiKey: 'follows',
  supportsPeriodTotal: true,
  color: '#D7B5FD',
  value: 0,
  previousValue: 0,
  diff: 0,
  average: 0,
  previousAverage: 0,
  averageDiff: 0,
};

instagram.newFollowersMetric = {
  label: 'New Fans',
  averageLabel: 'New Fans',
  lowerCaseLabel: 'new fans',
  averageLowerCaseLabel: 'new fans',
  key: 'newFollowers',
  apiKey: 'new_followers',
  supportsPeriodTotal: true,
  color: '#D7B5FD',
  value: 0,
  previousValue: 0,
  diff: 0,
  average: 0,
  previousAverage: 0,
  averageDiff: 0,
};

instagram.defaultSortMetric = instagram.likesMetric;

instagram.topPostsEngagementMetrics = [
  instagram.likesMetric,
  instagram.commentsMetric,
];

instagram.postMetrics = [
  instagram.likesMetric,
  instagram.commentsMetric,
];

instagram.topPostsAudienceMetrics = [];


export const twitter = {};

twitter.tweetsMetric = { label: 'Tweets',
  averageLabel: 'Tweets',
  lowerCaseLabel: 'tweets',
  averageLowerCaseLabel: 'tweets',
  key: 'tweets',
  apiKey: 'posts_count',
  supportsPeriodTotal: true,
  color: '#ced7df',
  value: 0,
  previousValue: 0,
  diff: 0,
  average: 0,

  previousAverage: 0,
  averageDiff: 0,
};

twitter.retweetsMetric = {
  label: 'Retweets',
  averageLabel: 'Retweets',
  lowerCaseLabel: 'retweets',
  averageLowerCaseLabel: 'retweets',
  key: 'retweets',
  apiKey: 'retweets',
  supportsPeriodTotal: true,
  color: '#FD8F90',
  value: 0,
  previousValue: 0,
  diff: 0,
  average: 0,
  previousAverage: 0,
  averageDiff: 0,
};

twitter.clicksMetric = {
  label: 'Clicks',
  averageLabel: 'Clicks',
  lowerCaseLabel: 'clicks',
  averageLowerCaseLabel: 'clicks',
  key: 'clicks',
  apiKey: 'url_clicks',
  supportsPeriodTotal: true,
  color: '#98E8B2',
  value: 0,
  previousValue: 0,
  diff: 0,
  average: 0,
  previousAverage: 0,
  averageDiff: 0,
};

twitter.impressionsMetric = {
  label: 'Impressions',
  averageLabel: 'Impressions',
  lowerCaseLabel: 'impressions',
  averageLowerCaseLabel: 'impressions',
  key: 'impressions',
  apiKey: 'impressions',
  supportsPeriodTotal: true,
  color: '#FEC78B',
  value: 0,
  previousValue: 0,
  diff: 0,
  average: 0,
  previousAverage: 0,
  averageDiff: 0,
};

twitter.newFollowersMetric = {
  label: 'New Followers',
  averageLabel: 'New Followers',
  lowerCaseLabel: 'new followers',
  averageLowerCaseLabel: 'new followers',
  key: 'newFollowers',
  apiKey: 'new_followers',
  supportsPeriodTotal: true,
  color: '#D7B5FD',
  value: 0,
  previousValue: 0,
  diff: 0,
  average: 0,
  previousAverage: 0,
  averageDiff: 0,
};

twitter.followersMetric = {
  label: 'Total Followers',
  lowerCaseLabel: 'total followers',
  key: 'followers',
  apiKey: 'followers',
  supportsPeriodTotal: false,
  color: '#FDA3F3',
  value: 0,
  previousValue: 0,
  diff: 0,
  average: 0,
  previousAverage: 0,
  averageDiff: 0,
};

twitter.totalFollowersMetric = {
  label: 'Total Followers',
  averageLabel: 'Total Followers',
  lowerCaseLabel: 'total followers',
  averageLowerCaseLabel: 'total followers',
  key: 'followers',
  apiKey: 'followers',
  supportsPeriodTotal: false,
  color: '#FDA3F3',
  value: 0,
  previousValue: 0,
  diff: 0,
  average: 0,
  previousAverage: 0,
  averageDiff: 0,
};

twitter.likesMetric = {
  label: 'Likes',
  averageLabel: 'Likes',
  lowerCaseLabel: 'likes',
  averageLowerCaseLabel: 'likes',
  key: 'likes',
  apiKey: 'favorites',
  supportsPeriodTotal: true,
  color: '#8FC6DB',
  value: 0,
  previousValue: 0,
  diff: 0,
  average: 0,
  previousAverage: 0,
  averageDiff: 0,
};

twitter.mentionsMetric = {
  label: 'Replies',
  averageLabel: 'Replies',
  key: 'replies',
  lowerCaseLabel: 'replies',
  averageLowerCaseLabel: 'replies',
  apiKey: 'replies',
  supportsPeriodTotal: true,
  color: '#D2C3AB',
  value: 0,
  previousValue: 0,
  diff: 0,
  average: 0,
  previousAverage: 0,
  averageDiff: 0,
};

twitter.engagementsMetric = {
  label: 'Engagements',
  averageLabel: 'Engagements',
  key: 'engagements',
  lowerCaseLabel: 'engagements',
  averageLowerCaseLabel: 'engagements',
  apiKey: 'engagements',
  supportsPeriodTotal: true,
  color: '#3A92D3',
  value: 0,
  previousValue: 0,
  diff: 0,
  average: 0,
  previousAverage: 0,
  averageDiff: 0,
};

twitter.tweetsSentMetric = {
  label: 'Tweets Sent',
  averageLabel: 'Tweets Sent',
  lowerCaseLabel: 'tweets sent',
  averageLowerCaseLabel: 'tweets sent',
  key: 'tweetsSent',
  apiKey: 'posts_count',
  supportsPeriodTotal: true,
  color: '#D4F9F0',
};

twitter.defaultSortMetric = twitter.impressionsMetric;

twitter.topPostsEngagementMetrics = [
  twitter.clicksMetric,
  twitter.retweetsMetric,
  twitter.likesMetric,
];

twitter.postMetrics = [
  twitter.clicksMetric,
  twitter.retweetsMetric,
  twitter.likesMetric,
  twitter.impressionsMetric,
];

twitter.topPostsAudienceMetrics = [
  twitter.impressionsMetric,
];

// Facebook Metrics Configuration
export const facebook = {};

facebook.commentsMetric = {
  label: 'Comments',
  averageLabel: 'Comments',
  lowerCaseLabel: 'comments',
  averageLowerCaseLabel: 'comments',
  key: 'comments',
  apiKey: 'comments',
  supportsPeriodTotal: true,
  color: '#EFDF00',
  value: 0,
  previousValue: 0,
  diff: 0,
  average: 0,
  previousAverage: 0,
  averageDiff: 0,
};

facebook.pageEngagements = {
  label: 'Page & Post Engagements',
  averageLabel: 'Engagements averages',
  lowerCaseLabel: 'page & post engagements',
  averageLowerCaseLabel: 'engagements',
  key: 'page_engagements',
  apiKey: 'page_engagements',
  supportsPeriodTotal: true,
  color: '#D7B5FD',
  value: 0,
  previousValue: 0,
  diff: 0,
  average: 0,
  previousAverage: 0,
  averageDiff: 0,
};

facebook.postClicksMetric = {
  label: 'Post Clicks',
  averageLabel: 'Clicks average',
  lowerCaseLabel: 'post clicks',
  averageLowerCaseLabel: 'clicks',
  key: 'postClicks',
  apiKey: 'post_clicks',
  supportsPeriodTotal: true,
  color: '#98E8B2',
  value: 0,
  previousValue: 0,
  diff: 0,
  average: 0,
  previousAverage: 0,
  averageDiff: 0,
};

facebook.impressionsMetric = {
  label: 'Post Impressions',
  averageLabel: 'Impressions averages',
  lowerCaseLabel: 'post impressions',
  averageLowerCaseLabel: 'impressions',
  key: 'postImpressions',
  apiKey: 'post_impressions',
  supportsPeriodTotal: true,
  color: '#8AC6DE',
  value: 0,
  previousValue: 0,
  diff: 0,
  average: 0,
  previousAverage: 0,
  averageDiff: 0,
};

facebook.postReachMetric = {
  label: 'Post Reach',
  averageLabel: 'Post Reach',
  lowerCaseLabel: 'post reach',
  averageLowerCaseLabel: 'post reach',
  key: 'postReach',
  apiKey: 'post_reach',
  supportsPeriodTotal: true,
  color: '#FFC880',
  value: 0,
  previousValue: 0,
  diff: 0,
  average: 0,
  previousAverage: 0,
  averageDiff: 0,
};

facebook.reactionsMetric = {
  label: 'Reactions',
  averageLabel: 'Reactions',
  lowerCaseLabel: 'reactions',
  averageLowerCaseLabel: 'reactions',
  key: 'reactions',
  apiKey: 'reactions',
  supportsPeriodTotal: true,
  color: '#FD8F90',
  value: 0,
  previousValue: 0,
  diff: 0,
  average: 0,
  previousAverage: 0,
  averageDiff: 0,
};

facebook.sharesMetric = {
  label: 'Shares',
  averageLabel: 'Shares',
  lowerCaseLabel: 'shares',
  averageLowerCaseLabel: 'shares',
  key: 'shares',
  apiKey: 'shares',
  supportsPeriodTotal: true,
  color: '#D2C3AB',
  value: 0,
  previousValue: 0,
  diff: 0,
  average: 0,
  previousAverage: 0,
  averageDiff: 0,
};

facebook.engagedUsersMetric = {
  label: 'Engaged Users',
  averageLabel: 'Engaged Users',
  lowerCaseLabel: 'engaged users',
  averageLowerCaseLabel: 'engaged users',
  key: 'engaged_users',
  apiKey: 'engaged_users',
  supportsPeriodTotal: true,
  color: '#FEC78B',
  value: 0,
  previousValue: 0,
  diff: 0,
  average: 0,
  previousAverage: 0,
  averageDiff: 0,
};

facebook.countMetric = {
  label: 'Posts',
  averageLabel: 'Posts',
  lowerCaseLabel: 'posts',
  averageLowerCaseLabel: 'posts',
  key: 'postsCount',
  apiKey: 'posts_count',
  supportsPeriodTotal: true,
  color: '#3A92D3',
  value: 0,
  previousValue: 0,
  diff: 0,
  average: 0,
  previousAverage: 0,
  averageDiff: 0,
};

facebook.followersMetric = {
  label: 'Total Fans',
  averageLabel: 'Total Fans',
  lowerCaseLabel: 'followers',
  averageLowerCaseLabel: 'followers',
  key: 'followers',
  apiKey: 'followers',
  supportsPeriodTotal: true,
  color: '#FDA3F3',
  value: 0,
  previousValue: 0,
  diff: 0,
  average: 0,
  previousAverage: 0,
  averageDiff: 0,
};

facebook.newFollowersMetric = {
  label: 'New Fans',
  averageLabel: 'New Fans',
  lowerCaseLabel: 'new fans',
  averageLowerCaseLabel: 'new fans',
  key: 'newFollowers',
  apiKey: 'new_followers',
  supportsPeriodTotal: true,
  color: '#D7B5FD',
  value: 0,
  previousValue: 0,
  diff: 0,
  average: 0,
  previousAverage: 0,
  averageDiff: 0,
};

facebook.defaultSortMetric = facebook.impressionsMetric;

facebook.engagementMetric = {
  label: 'Engagement',
  averageLabel: 'Engagement',
  lowerCaseLabel: 'engagement',
  averageLowerCaseLabel: 'engagement',
  // TODO change this to the dedicated api endpoint
  key: 'postReach',
  apiKey: 'post_reach',
  supportsPeriodTotal: true,
  color: '#FDA3F3',
  value: 0,
  previousValue: 0,
  diff: 0,
  average: 0,
  previousAverage: 0,
  averageDiff: 0,
};

facebook.topPostsEngagementMetrics = [
  facebook.postClicksMetric,
  facebook.reactionsMetric,
  facebook.commentsMetric,
  facebook.sharesMetric,
];

facebook.postMetrics = [
  facebook.impressionsMetric,
  facebook.postReachMetric,
  facebook.postClicksMetric,
  facebook.reactionsMetric,
  facebook.commentsMetric,
  facebook.sharesMetric,
];

facebook.topPostsAudienceMetrics = [
  facebook.impressionsMetric,
  facebook.postReachMetric,
];

// Exports
export const metricsConfig = {
  twitter,
  facebook,
  instagram,
};

export default metricsConfig.twitter;
