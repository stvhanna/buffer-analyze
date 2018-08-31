/* eslint-disable import/first */
import moment from 'moment';

jest.mock('micro-rpc-client');
jest.mock('request-promise');
import rp from 'request-promise';
import hashtags from './';
import { RESPONSE } from './mockResponses';

describe('rpc/hashtags', () => {
  const profileId = '123159ad';
  const profileService = 'facebook';
  const token = 'some token';
  const mockedRequest = {
    session: {
      analyze: {
        accessToken: token,
      },
    },
    app: {
      get() { return 'analyze-api'; },
    },
  };

  it('should have the expected name', () => {
    expect(hashtags.name)
      .toBe('hashtags');
  });

  it('should have the expected docs', () => {
    expect(hashtags.docs)
      .toBe('fetch hashtags for a given profile');
  });

  it('should request metrics to Analyze Api for Instagram', () => {
    rp.mockReturnValueOnce(Promise.resolve(RESPONSE));
    const startDate = moment().subtract(1, 'days').format('MM/DD/YYYY');
    const endDate = moment().subtract(7, 'days').format('MM/DD/YYYY');

    hashtags.fn({
      startDate,
      endDate,
      profileId,
      profileService: 'instagram',
    }, mockedRequest);

    expect(rp.mock.calls[0])
      .toEqual([{
        uri: 'analyze-api/metrics/hashtags',
        method: 'POST',
        strictSSL: false,
        qs: {
          access_token: token,
          start_date: startDate,
          end_date: endDate,
          profile_id: profileId,
        },
        json: true,
      }]);
  });

  it('should request for the past week', () => {
    rp.mockClear();
    rp.mockReturnValueOnce(Promise.resolve(RESPONSE));
    const startDate = moment().subtract(7, 'days').format('MM/DD/YYYY');
    const endDate = moment().subtract(1, 'days').format('MM/DD/YYYY');

    hashtags.fn({ profileId, profileService, startDate, endDate }, mockedRequest);

    expect(rp.mock.calls[0])
      .toEqual([{
        uri: `${process.env.API_ADDR}/1/profiles/${profileId}/analytics/hashtags.json`,
        method: 'GET',
        strictSSL: false,
        qs: {
          access_token: token,
          start_date: moment().subtract(7, 'days').format('MM/DD/YYYY'),
          end_date: moment().subtract(1, 'days').format('MM/DD/YYYY'),
          profile_id: null,
        },
        json: true,
      }]);
  });

  it('it should normalize hashtags keys', async () => {
    rp.mockClear();
    rp.mockReturnValue(Promise.resolve(RESPONSE));

    const startDate = moment().subtract(7, 'days').format('MM/DD/YYYY');
    const endDate = moment().subtract(1, 'days').format('MM/DD/YYYY');

    const response = await hashtags
      .fn({ profileId, profileService, startDate, endDate }, mockedRequest);

    expect(rp.mock.calls[0])
      .toEqual([{
        uri: `${process.env.API_ADDR}/1/profiles/${profileId}/analytics/hashtags.json`,
        method: 'GET',
        strictSSL: false,
        qs: {
          access_token: token,
          start_date: moment().subtract(7, 'days').format('MM/DD/YYYY'),
          end_date: moment().subtract(1, 'days').format('MM/DD/YYYY'),
          profile_id: null,
        },
        json: true,
      }]);

    expect(response.hashtags[0].primary_metric).toEqual(155.66666666667);
    expect(response.labels.primary_metric).toEqual('Reach');
  });
});
