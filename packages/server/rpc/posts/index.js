const { method } = require('@bufferapp/buffer-rpc');
const rp = require('request-promise');
const DateRange = require('../utils/DateRange');

const fetchTopPosts = (profileId, dateRange, sortBy, descending, limit, searchTerms, accessToken) =>
  rp({
    uri: `${process.env.API_ADDR}/1/profiles/${profileId}/analytics/all_posts.json`,
    method: 'GET',
    strictSSL: !(process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test'),
    qs: {
      access_token: accessToken,
      start_date: dateRange.start,
      end_date: dateRange.end,
      sort_by: sortBy,
      search_terms: searchTerms,
      descending,
      limit,
    },
    json: true,
  });

const parsePosts = (updates) => (
  updates.map(update => ({
    id: update._id,
    type: update.type,
    text: update.text_formatted,
    date: update.sent_at * 1000,
    serviceLink: update.service_link,
    statistics: update.stats,
    media: update.media,
  }))
);

module.exports = method(
  'posts',
  'fetch analytics posts for profiles and pages',
  async ({ profileId, startDate, endDate, sortBy, descending, limit, searchTerms },
    { session }) => {
    const dateRange = new DateRange(startDate, endDate);
    try {
      const posts = await fetchTopPosts(
        profileId,
        dateRange,
        sortBy,
        descending,
        limit,
        searchTerms,
        session.analyze.accessToken,
      );

      return parsePosts(Object.values(posts.updates_with_stats));
    } catch (e) {
      return [];
    }
  },
);
