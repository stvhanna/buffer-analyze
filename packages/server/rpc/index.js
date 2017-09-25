const { rpc } = require('@bufferapp/micro-rpc');
const checkToken = require('./checkToken');
const loginMethod = require('./login');
const logoutMethod = require('./logout');
const profilesMethod = require('./profiles');
const userMethod = require('./user');
const performanceTrackingMethod = require('./performanceTracking');
const summary = require('./summary');
const postsSummary = require('./postsSummary');
const followers = require('./followers');
const analyticsStartDate = require('./analyticsStartDate');
const average = require('./average');
const topPosts = require('./topPosts');
const hourly = require('./hourly');

module.exports = checkToken(rpc(
  loginMethod,
  logoutMethod,
  profilesMethod,
  userMethod,
  performanceTrackingMethod,
  summary,
  followers,
  analyticsStartDate,
  postsSummary,
  average,
  topPosts,
  hourly,
));
