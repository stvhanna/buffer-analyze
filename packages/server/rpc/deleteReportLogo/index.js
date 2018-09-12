const { method } = require('@bufferapp/buffer-rpc');
const rp = require('request-promise');

module.exports = method(
  'delete_report_logo',
  'delete report logo',
  ({ reportId }) =>
    rp({
      uri: `${process.env.ANALYZE_API_ADDR}/delete_report_logo`,
      method: 'POST',
      strictSSL: !(process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test'),
      body: {
        report_id: reportId,
      },
      json: true,
    }).then(result => result),
);
