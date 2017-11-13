const { method } = require('@bufferapp/micro-rpc');
const rp = require('request-promise');

module.exports = method(
  'add_chart_to_report',
  'add chart to an existing report',
  ({ reportId, profileId, chartId, state }) =>
    rp({
      uri: `${process.env.ANALYZE_API_ADDR}/add_chart_to_report`,
      method: 'POST',
      strictSSL: !(process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test'),
      body: {
        id: reportId,
        state,
        profile_id: profileId,
        chart_id: chartId,
      },
      json: true,
    }).then(result => result)
  ,
);

