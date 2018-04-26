/* eslint-disable import/first */
import moment from 'moment';

jest.mock('micro-rpc-client');
jest.mock('request-promise');
import rp from 'request-promise';
import average from './';
import {
  CURRENT_PERIOD_TOTALS_RESPONSE,
  PAST_PERIOD_TOTALS_RESPONSE,
  EMPTY_TOTALS_RESPONSE,
  CURRENT_PERIOD_DAILY_RESPONSE,
  PAST_PERIOD_DAILY_RESPONSE,
} from './mockResponses';

describe('rpc/average', () => {
  const profileId = '123159ad';
  const profileService = 'facebook';
  const token = 'some token';

  it('should have the expected name', () => {
    expect(average.name)
      .toBe('average');
  });

  it('should have the expected docs', () => {
    expect(average.docs)
      .toBe('fetch analytics average for profiles and pages');
  });

  it('should request metrics to Analyze Api for Instagram', () => {
    const end = moment().subtract(1, 'days').format('MM/DD/YYYY');
    const start = moment().subtract(7, 'days').format('MM/DD/YYYY');

    average.fn({
      startDate: start,
      endDate: end,
      profileId,
      profileService: 'instagram',
    }, {
      session: {
        analyze: {
          accessToken: token,
        },
      },
    });

    expect(rp.mock.calls[0])
      .toEqual([{
        uri: `${process.env.ANALYZE_API_ADDR}/metrics/totals`,
        method: 'POST',
        strictSSL: false,
        qs: {
          access_token: token,
          start_date: start,
          end_date: end,
          profile_id: profileId,
        },
        json: true,
      }]);

    expect(rp.mock.calls[2])
      .toEqual([{
        uri: `${process.env.ANALYZE_API_ADDR}/metrics/daily_totals`,
        method: 'POST',
        strictSSL: false,
        qs: {
          access_token: token,
          start_date: start,
          end_date: end,
          profile_id: profileId,
        },
        json: true,
      }]);
  });

  it('should request for the past week', () => {
    rp.mockClear();
    const end = moment().subtract(1, 'days').format('MM/DD/YYYY');
    const start = moment().subtract(7, 'days').format('MM/DD/YYYY');

    average.fn({
      startDate: start,
      endDate: end,
      profileId,
      profileService,
    }, {
      session: {
        analyze: {
          accessToken: token,
        },
      },
    });

    expect(rp.mock.calls[0])
      .toEqual([{
        uri: `${process.env.API_ADDR}/1/profiles/${profileId}/analytics/totals.json`,
        method: 'GET',
        strictSSL: false,
        qs: {
          access_token: token,
          start_date: start,
          end_date: end,
          profile_id: null,
        },
        json: true,
      }]);
  });

  it('should request for the week before that', () => {
    const end = moment().subtract(1, 'days').format('MM/DD/YYYY');
    const start = moment().subtract(7, 'days').format('MM/DD/YYYY');

    average.fn({
      start,
      end,
      profileId,
      profileService,
    }, {
      session: {
        analyze: {
          accessToken: token,
        },
      },
    });

    const expectedEnd = moment().subtract(8, 'days').format('MM/DD/YYYY');
    const expectedStart = moment().subtract(14, 'days').format('MM/DD/YYYY');

    expect(rp.mock.calls[1])
      .toEqual([{
        uri: `${process.env.API_ADDR}/1/profiles/${profileId}/analytics/totals.json`,
        method: 'GET',
        strictSSL: false,
        qs: {
          access_token: token,
          start_date: expectedStart,
          end_date: expectedEnd,
          profile_id: null,
        },
        json: true,
      }]);
  });

  it('it should return both total and daily averages', async() => {
    rp.mockReturnValueOnce(Promise.resolve(CURRENT_PERIOD_TOTALS_RESPONSE));
    rp.mockReturnValueOnce(Promise.resolve(PAST_PERIOD_TOTALS_RESPONSE));
    rp.mockReturnValueOnce(Promise.resolve(CURRENT_PERIOD_DAILY_RESPONSE));
    rp.mockReturnValueOnce(Promise.resolve(PAST_PERIOD_DAILY_RESPONSE));

    const data = await average.fn({ profileId, profileService }, {
      session: {
        analyze: {
          accessToken: token,
        },
      },
    });

    expect(data.daily).toBeDefined();
    expect(data.totals).toBeDefined();
  });

  it('should return only the average metrics', async() => {
    rp.mockReturnValueOnce(Promise.resolve(CURRENT_PERIOD_TOTALS_RESPONSE));
    rp.mockReturnValueOnce(Promise.resolve(PAST_PERIOD_TOTALS_RESPONSE));
    rp.mockReturnValueOnce(Promise.resolve(CURRENT_PERIOD_DAILY_RESPONSE));
    rp.mockReturnValueOnce(Promise.resolve(PAST_PERIOD_DAILY_RESPONSE));

    const data = await average.fn({ profileId, profileService }, {
      session: {
        analyze: {
          accessToken: token,
        },
      },
    });

    expect(data.totals.length).toEqual(3);
  });

  it('should return the metrics value and diff, averaged by total updates sent in the period', async() => {
    rp.mockReturnValueOnce(Promise.resolve(CURRENT_PERIOD_TOTALS_RESPONSE));
    rp.mockReturnValueOnce(Promise.resolve(PAST_PERIOD_TOTALS_RESPONSE));
    rp.mockReturnValueOnce(Promise.resolve(CURRENT_PERIOD_DAILY_RESPONSE));
    rp.mockReturnValueOnce(Promise.resolve(PAST_PERIOD_DAILY_RESPONSE));

    const data = await average.fn({ profileId, profileService }, {
      session: {
        analyze: {
          accessToken: token,
        },
      },
    });

    expect(data.totals).toEqual([
      {
        diff: 403,
        label: 'Average impressions per post',
        value: 393677,
      },
      {
        diff: 315,
        label: 'Average engagements per post',
        value: 4277,
      },
      {
        diff: 355,
        label: 'Average clicks per post',
        value: 19996,
      },
    ]);
  });

  it('should return a valid response if all data is 0', async() => {
    rp.mockReturnValueOnce(Promise.resolve(EMPTY_TOTALS_RESPONSE));
    rp.mockReturnValueOnce(Promise.resolve(EMPTY_TOTALS_RESPONSE));
    rp.mockReturnValueOnce(Promise.resolve(CURRENT_PERIOD_DAILY_RESPONSE));
    rp.mockReturnValueOnce(Promise.resolve(PAST_PERIOD_DAILY_RESPONSE));

    const data = await average.fn({ profileId, profileService }, {
      session: {
        analyze: {
          accessToken: token,
        },
      },
    });

    expect(data.totals).toEqual([
      {
        diff: 0,
        label: 'Average impressions per post',
        value: 0,
      },
      {
        diff: 0,
        label: 'Average engagements per post',
        value: 0,
      },
      {
        diff: 0,
        label: 'Average clicks per post',
        value: 0,
      },
    ]);
  });

  it('should return a valid response if previous data is 0', async() => {
    rp.mockReturnValueOnce(Promise.resolve(CURRENT_PERIOD_TOTALS_RESPONSE));
    rp.mockReturnValueOnce(Promise.resolve(EMPTY_TOTALS_RESPONSE));
    rp.mockReturnValueOnce(Promise.resolve(CURRENT_PERIOD_DAILY_RESPONSE));
    rp.mockReturnValueOnce(Promise.resolve(PAST_PERIOD_DAILY_RESPONSE));

    const data = await average.fn({ profileId, profileService }, {
      session: {
        analyze: {
          accessToken: token,
        },
      },
    });

    expect(data.totals).toEqual([
      {
        diff: 39367700,
        label: 'Average impressions per post',
        value: 393677,
      },
      {
        diff: 427700,
        label: 'Average engagements per post',
        value: 4277,
      },
      {
        diff: 1999600,
        label: 'Average clicks per post',
        value: 19996,
      },
    ]);
  });

  it('should return the daily averages', async() => {
    rp.mockReturnValueOnce(Promise.resolve(CURRENT_PERIOD_TOTALS_RESPONSE));
    rp.mockReturnValueOnce(Promise.resolve(PAST_PERIOD_TOTALS_RESPONSE));
    rp.mockReturnValueOnce(Promise.resolve(CURRENT_PERIOD_DAILY_RESPONSE));
    rp.mockReturnValueOnce(Promise.resolve(PAST_PERIOD_DAILY_RESPONSE));

    const data = await average.fn({ profileId, profileService }, {
      session: {
        analyze: {
          accessToken: token,
        },
      },
    });

    expect(data.daily.length).toBe(7);
    expect(data.daily[0]).toEqual({
      day: '1504051200000',
      metrics: [
        { diff: 869, label: 'Average engagements per post', value: 3119 },
        { diff: 74, label: 'Average impressions per post', value: 78966 },
        { diff: 47, label: 'Average clicks per post', value: 2656 },
      ],
    });
  });
});
