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
const hourly = require('./hourly');
const compare = require('./compare');
const createReport = require('./createReport');
const listReports = require('./listReports');
const getReport = require('./getReport');
const contextual = require('./contextual');
const addToReport = require('./addToReport');
const audienceComparison = require('./audienceComparison');
const removeReport = require('./removeReport');
const saveReportChanges = require('./saveReportChanges');
const reachComparison = require('./reachComparison');

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
  hourly,
  compare,
  createReport,
  listReports,
  getReport,
  contextual,
  addToReport,
  audienceComparison,
  removeReport,
  saveReportChanges,
));
