const { method } = require('@bufferapp/buffer-rpc');
const rp = require('request-promise');

module.exports = method(
  'upload_report_logo',
  'upload report logo to the server',
  ({ logoImage, reportId }) =>
    rp({
      uri: `${process.env.ANALYZE_API_ADDR}/upload_report_logo`,
      method: 'POST',
      strictSSL: !(process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test'),
      body: {
        report_id: reportId,
        file: logoImage,
      },
      json: true,
    }).then(result => result),
);
