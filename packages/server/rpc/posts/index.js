const { method } = require('@bufferapp/buffer-rpc');
const rp = require('request-promise');
const DateRange = require('../utils/DateRange');

const mergeStatsWithUpdates = (stats, updates) => {
  const updateList = [];
  const updateIds = Object.keys(stats);

  for (let i = 0; i < updateIds.length; i += 1) {
    const updateId = updateIds[i];
    const update = updates[updateId];
    if (update) {
      updateList.push({
        id: updateId,
        type: update.type,
        text: update.text_formatted,
        date: update.sent_at * 1000,
        serviceLink: update.service_link,
        statistics: stats[updateId],
        media: update.media,
      });
    }
  }
  return updateList;
};

const fetchTopPosts = (profileId, dateRange, sortBy, descending, limit, accessToken) =>
  rp({
    uri: `${process.env.API_ADDR}/1/profiles/${profileId}/analytics/all_posts.json`,
    method: 'GET',
    strictSSL: !(process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test'),
    qs: {
      access_token: accessToken,
      start_date: dateRange.start,
      end_date: dateRange.end,
      sort_by: sortBy,
      descending,
      limit,
    },
    json: true,
  });

module.exports = method(
  'posts',
  'fetch analytics posts for profiles and pages',
  async ({ profileId, startDate, endDate, sortBy, descending, limit, searchTerms }, { session }) => {
    const dateRange = new DateRange(startDate, endDate);
    try {
      const posts = await fetchTopPosts(
        profileId,
        dateRange,
        sortBy,
        descending,
        searchTerms ? limit : undefined,
        session.analyze.accessToken,
      );

      const { updates, stats } = posts;

      let result = mergeStatsWithUpdates(stats, updates);
      if (searchTerms) {
        result = result.filter(post => searchTerms.every(term => (new RegExp(term, 'gi')).test(post.text)));
        if (limit) {
          result = result.slice(0, limit);
        }
      }
      return result;
    } catch (e) {
      return [];
    }
  },
);
