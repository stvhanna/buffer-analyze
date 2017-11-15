/* eslint-disable import/first */
import moment from 'moment';

jest.mock('micro-rpc-client');
jest.mock('request-promise');
import rp from 'request-promise';
import { response, rpcFinalResponse } from './mockResponse';
import reachComparison from './';

const DateRange = require('../utils/DateRange');

describe('rpc/reach_comparison', () => {
  const profileIds = ['profile1234'];

  it('should have the expected name', () => {
    expect(reachComparison.name)
      .toBe('reach_comparison');
  });

  it('should have the expected docs', () => {
    expect(reachComparison.docs)
      .toBe('get daily reach data for profile');
  });

  it('should send a POST request to /reach_comparison with the provided parameters', async () => {
    const startDate = moment().subtract(7, 'days');
    const endDate = moment().subtract(1, 'days');
    rp.mockReturnValueOnce(Promise.resolve(response));
    const result = await reachComparison.fn({ profileIds, startDate, endDate });

    const start = moment.unix(startDate).format('MM/DD/YYYY');
    const end = moment.unix(endDate).format('MM/DD/YYYY');
    const dateRange = new DateRange(start, end);

    expect(result).toEqual(rpcFinalResponse);

    expect(rp.mock.calls[0]).toEqual([{
      uri: `${process.env.ANALYZE_API_ADDR}/reach_comparison`,
      method: 'POST',
      strictSSL: !(process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test'),
      body: {
        profiles: profileIds,
        start_date: dateRange.start,
        end_date: dateRange.end,
      },
      json: true,
    }]);
  });
});
