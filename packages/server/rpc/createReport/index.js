const { method } = require('@bufferapp/micro-rpc');
const rp = require('request-promise');

module.exports = method(
  'create_report',
  'create a new report for Analyze',
  ({ userId, profileId, chartId, name }) =>
    rp({
      uri: `${process.env.ANALYZE_API_ADDR}/create_report`,
      method: 'POST',
      strictSSL: !(process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test'),
      body: {
        name,
        profile_id: profileId,
        chart_id: chartId,
        user_id: userId,
      },
      json: true,
    }).then(result => result)
  ,
);
