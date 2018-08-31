/* eslint-disable import/first */
jest.mock('micro-rpc-client');
jest.mock('request-promise');
import rp from 'request-promise';
import moment from 'moment';
import getAccountDetails from './';


describe('rpc/get_account_details', () => {
  const organizationId = 'org-1';
  const session = {
    analyze: {
      accessToken: 'access-token',
    },
  };

  it('should have the expected name', () => {
    expect(getAccountDetails.name)
      .toBe('get_account_details');
  });

  it('should have the expected docs', () => {
    expect(getAccountDetails.docs)
      .toBe('get details for user account');
  });

  it('should send a POST request to /retrieve-billing-data.json with the organization id and analyze as product', async () => {
    const response = {
      data: {
        subscriptions: [{
          is_trial: true,
          current_period_end: moment().add(2, 'days').unix(),
        }],
      },
    };
    rp.mockReturnValueOnce(Promise.resolve(response));

    const result = await getAccountDetails.fn({ organizationId }, { session });

    expect(result).toEqual({
      onTrial: true,
      daysRemaining: 'in 2 days',
    });
    expect(rp.mock.calls[0]).toEqual([{
      uri: `${process.env.API_ADDR}/1/billing/retrieve-billing-data.json`,
      method: 'GET',
      strictSSL: !(process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test'),
      qs: {
        access_token: session.analyze.accessToken,
        organization_id: organizationId,
        product: 'analyze',
      },
      json: true,
    }]);
  });

  it('should return "today" when the date for the end of trial has come', async () => {
    const response = {
      data: {
        subscriptions: [{
          is_trial: true,
          current_period_end: moment().add(0, 'days').unix(),
        }],
      },
    };
    rp.mockReturnValueOnce(Promise.resolve(response));

    const result = await getAccountDetails.fn({ organizationId }, { session });

    expect(result).toEqual({
      onTrial: true,
      daysRemaining: 'today',
    });
  });

  it('should return it is not a trial if there is no subscription to be found', async () => {
    const response = {
      data: {
        subscriptions: [],
      },
    };
    rp.mockReturnValueOnce(Promise.resolve(response));

    const result = await getAccountDetails.fn({ organizationId }, { session });

    expect(result).toEqual({
      onTrial: false,
      daysRemaining: -1,
    });
  });
});

