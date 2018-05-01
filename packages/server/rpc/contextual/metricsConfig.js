const facebookConfig = {
  posts_count: {
    label: 'Posts',
    key: 'posts_count',
  },

  page_engagements: {
    label: 'Engagements',
    key: 'page_engagements',
  },

  post_impressions: {
    label: 'Post Impressions',
    key: 'post_impressions',
  },

  post_reach: {
    label: 'Post Reach',
    key: 'post_reach',
  },

  post_clicks: {
    label: 'Post Clicks',
    key: 'post_clicks',
  },

  reactions: {
    label: 'Reactions',
    key: 'reactions',
  },

  shares: {
    label: 'Shares',
    key: 'shares',
  },

  comments: {
    label: 'Comments',
    key: 'comments',
  },

  followers: {
    label: 'Total Fans',
    key: 'followers',
  },

  new_followers: {
    label: 'New Fans',
    key: 'new_followers',
  },
};

const instagramConfig = {
  posts_count: {
    label: 'Posts',
    key: 'posts_count',
  },

  impressions: {
    label: 'Impressions',
    key: 'impressions',
  },

  reach: {
    label: 'Reach',
    key: 'reach',
  },

  likes: {
    label: 'Likes',
    key: 'likes',
  },

  comments: {
    label: 'Comments',
    key: 'comments',
  },

  saved: {
    label: 'Post Saves',
    key: 'saved',
  },

  video_views: {
    label: 'Video Views',
    key: 'video_views',
  },

  followers: {
    label: 'Total Fans',
    key: 'followers',
  },

  new_followers: {
    label: 'New Fans',
    key: 'new_followers',
  },

  engagement_rate: {
    label: 'Engagement Rate',
    key: 'engagement_rate',
  },
};

module.exports = {
  facebook: {
    config: facebookConfig,
    orderedKeys: [
      'posts_count',
      'page_engagements',
      'post_impressions',
      'post_reach',
      'post_clicks',
      'reactions',
      'shares',
      'comments',
      'followers',
      'new_followers',
    ],
  },
  instagram: {
    config: instagramConfig,
    orderedKeys: [
      'posts_count',
      'impressions',
      'reach',
      'likes',
      'comments',
      'saved',
      'video_views',
      'new_followers',
      'followers',
      'engagement_rate',
    ],
  },
};
