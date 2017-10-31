const facebookConfig = {
  posts_count: {
    label: 'Posts',
    color: '#3A92D3',
  },

  page_engagements: {
    label: 'Engagements',
    color: '#FDA3F3',
  },

  post_impressions: {
    label: 'Post Impressions',
    color: '#8AC6DE',
  },

  post_reach: {
    label: 'Post Reach',
    color: '#D7B5FD',
  },

  post_clicks: {
    label: 'Post Clicks',
    color: '#98E8B2',
  },

  reactions: {
    label: 'Reactions',
    color: '#FD8F90',
  },

  shares: {
    label: 'Shares',
    color: '#D2C3AB',
  },

  comments: {
    label: 'Comments',
    color: '#EFDF00',
  },

  followers: {
    label: 'Total Fans',
    color: '#FDA3F3',
  },

  new_followers: {
    label: 'New Fans',
    color: '#D7B5FD',
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
