const { method } = require('@bufferapp/micro-rpc');
const rp = require('request-promise');

module.exports = method(
  'delete_chart',
  'delete chart in report',
  ({ reportId, chartId }) =>
    rp({
      uri: `${process.env.ANALYZE_API_ADDR}/delete_chart`,
      method: 'POST',
      strictSSL: !(process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test'),
      body: {
        report_id: reportId,
        chart_id: chartId,
      },
      json: true,
    }).then(result => result)
  ,
);

