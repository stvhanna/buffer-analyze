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
};
