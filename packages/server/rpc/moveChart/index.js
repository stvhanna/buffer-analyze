const { method } = require('@bufferapp/micro-rpc');
const rp = require('request-promise');

module.exports = method(
  'move_chart',
  'move chart in report',
  ({ reportId, chartId, direction }) =>
    rp({
      uri: `${process.env.ANALYZE_API_ADDR}/move_chart`,
      method: 'POST',
      strictSSL: !(process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test'),
      body: {
        report_id: reportId,
        chart_id: chartId,
        direction,
      },
      json: true,
    }).then(result => result)
  ,
);

