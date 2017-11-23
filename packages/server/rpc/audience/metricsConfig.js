const instagramConfig = {
  posts_count: {
    label: 'Posts',
    key: 'posts_count',
  },

  likes: {
    label: 'Likes',
    key: 'likes',
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
