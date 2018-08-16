const { method } = require('@bufferapp/micro-rpc');
const rp = require('request-promise');

module.exports = method(
  'list_reports',
  'get reports list for organization',
  ({ organizationId }) =>
    rp({
      uri: `${process.env.ANALYZE_API_ADDR}/list_reports`,
      method: 'POST',
      strictSSL: !(process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test'),
      body: {
        organization_id: organizationId,
      },
      json: true,
    }).then(result => result)
  ,
);

