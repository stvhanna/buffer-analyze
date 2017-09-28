const { rpc } = require('@bufferapp/micro-rpc');
const checkToken = require('./checkToken');
const profilesMethod = require('./profiles');
const userMethod = require('./user');
const performanceTrackingMethod = require('./performanceTracking');
const summary = require('./summary');
const postsSummary = require('./postsSummary');
const followers = require('./followers');
const analyticsStartDate = require('./analyticsStartDate');
const average = require('./average');
const topPosts = require('./topPosts');
const compare = require('./compare');

module.exports = checkToken(rpc(
  profilesMethod,
  userMethod,
  performanceTrackingMethod,
  summary,
  followers,
  analyticsStartDate,
  postsSummary,
  average,
  topPosts,
  compare,
));
