/* eslint-disable import/first */

jest.mock('micro-rpc-client');
jest.mock('request-promise');
import rp from 'request-promise';
import moment from 'moment';
import demographic from './';

const mockTimestamp = moment('2017-11-15').valueOf();
Date.now = () => mockTimestamp;

describe('rpc/create_report', () => {
  const profileId = '123159ad';

  it('should have the expected name', () => {
    expect(demographic.name)
      .toBe('demographic');
  });

  it('should have the expected docs', () => {
    expect(demographic.docs)
      .toBe('get demographic data for a profile');
  });

  it('should send a POST request to /create_report with the provided parameters', async () => {
    rp.mockReturnValueOnce(Promise.resolve({
      metrics: ['foo', 'bar'],
    }));

    const result = await demographic.fn({ profileId, state: {}, startDate: '09/21/2018', endDate: '09/26/2018' });

    expect(result).toEqual({ metrics: ['foo', 'bar'] });
    expect(rp.mock.calls[0]).toEqual([{
      uri: `${process.env.ANALYZE_API_ADDR}/demographic`,
      method: 'POST',
      strictSSL: !(process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test'),
      body: {
        profile_id: profileId,
        start_date: '09/21/2018',
        end_date: '09/26/2018',
        state: {},
      },
      json: true,
    }]);
  });
});

