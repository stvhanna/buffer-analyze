const { method } = require('@bufferapp/micro-rpc');
const moment = require('moment');
const rp = require('request-promise');

const getTrialInformation = (response) => {
  const subscription = response.data.subscriptions[0];
  if (!subscription || !subscription.is_trial) {
    return {
      onTrial: false,
      daysRemaining: -1,
    };
  }

  const today = moment();
  const endOfTrial = moment.unix(subscription.current_period_end);

  return {
    onTrial: true,
    daysRemaining: endOfTrial.diff(today, 'days'),
  };
};

module.exports = method(
  'get_account_details',
  'get details for user account',
  ({ organizationId }, { session }) =>
    rp({
      uri: `${process.env.API_ADDR}/1/billing/retrieve-billing-data.json`,
      method: 'GET',
      strictSSL: !(process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test'),
      qs: {
        access_token: session.analyze.accessToken,
        organization_id: organizationId,
        product: 'analyze',
      },
      json: true,
    }).then(getTrialInformation)
  ,
);
