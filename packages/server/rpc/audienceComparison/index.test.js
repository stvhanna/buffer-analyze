/* eslint-disable import/first */
import moment from 'moment';

jest.mock('micro-rpc-client');
jest.mock('request-promise');
import rp from 'request-promise';
import { response, rpcFinalResponse } from './mockResponse';
import audienceComparison from './';

const DateRange = require('../utils/DateRange');

describe('rpc/audience_comparison', () => {
  const profileId = 'profile1234';

  it('should have the expected name', () => {
    expect(audienceComparison.name)
      .toBe('audience_comparison');
  });

  it('should have the expected docs', () => {
    expect(audienceComparison.docs)
      .toBe('get daily audience data for profile');
  });

  it('should send a POST request to /audience_comparison with the provided parameters', async () => {
    const startDate = moment().subtract(7, 'days');
    const endDate = moment().subtract(1, 'days');
    rp.mockReturnValueOnce(Promise.resolve(response));
    const profileService = 'facebook';
    const result = await audienceComparison.fn({ startDate, profileService, endDate, profileId });

    const start = moment.unix(startDate).format('MM/DD/YYYY');
    const end = moment.unix(endDate).format('MM/DD/YYYY');
    const dateRange = new DateRange(start, end);

    expect(result).toEqual(rpcFinalResponse);

    expect(rp.mock.calls[0]).toEqual([{
      uri: `${process.env.ANALYZE_API_ADDR}/audience_comparison`,
      method: 'POST',
      strictSSL: !(process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test'),
      body: {
        profiles: [profileId],
        start_date: dateRange.start,
        end_date: dateRange.end,
      },
      json: true,
    }]);
  });
});
