const twitterConfig = {
  posts_count: {
    label: 'Tweets',
    color: '#ced7df',
  },

  impressions: {
    label: 'Impressions',
    color: '#FEC78B',
  },

  engagements: {
    label: 'Engagements',
    color: '#3A92D3',
  },

  retweets: {
    label: 'Retweets',
    color: '#FD8F90',
  },

  favorites: {
    label: 'Likes',
    color: '#8FC6DB',
  },

  url_clicks: {
    label: 'Clicks',
    color: '#98E8B2',
  },

  replies: {
    label: 'Replies',
    color: '#D2C3AB',
  },

  followers: {
    label: 'Total Followers',
    color: '#FDA3F3',
  },
  new_followers: {
    label: 'New Followers',
    color: '#D7B5FD',
  },
};

const facebookConfig = {
  posts_count: {
    label: 'Posts',
    color: '#3A92D3',
  },

  page_engagements: {
    label: 'Engagement',
    color: '#FDA3F3',
  },

  post_impressions: {
    label: 'Post Impressions',
    color: '#8AC6DE',
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

const instagramConfig = {
  posts_count: {
    label: 'Posts',
    color: '#3A92D3',
  },

  likes: {
    label: 'Likes',
    color: '#FD8F90',
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
  twitter: {
    config: twitterConfig,
    orderedKeys: [
      'posts_count',
      'impressions',
      'engagements',
      'retweets',
      'favorites',
      'url_clicks',
      'replies',
      'new_followers',
      'followers',
    ],
  },
  facebook: {
    config: facebookConfig,
    orderedKeys: [
      'posts_count',
      'page_engagements',
      'post_impressions',
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
      'likes',
      'comments',
      'followers',
      'new_followers',
    ],
  },
};
