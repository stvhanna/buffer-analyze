/* eslint-disable import/first */
import moment from 'moment';

jest.mock('micro-rpc-client');
jest.mock('request-promise');
import rp from 'request-promise';
import compare from './';
import {
  CURRENT_PERIOD_TOTALS_RESPONSE,
  PAST_PERIOD_TOTALS_RESPONSE,
  EMPTY_TOTALS_RESPONSE,
  CURRENT_PERIOD_DAILY_RESPONSE,
  PAST_PERIOD_DAILY_RESPONSE,
  PAST_PERIOD_DAILY_PARTIAL_RESPONSE,
} from './mockResponses';

describe('rpc/compare', () => {
  const profileId = '123159ad';
  const profileService = 'facebook';
  const token = 'some token';

  it('should have the expected name', () => {
    expect(compare.name)
      .toBe('compare');
  });

  it('should have the expected docs', () => {
    expect(compare.docs)
      .toBe('fetch analytics compare for profiles and pages');
  });

  it('should request metrics to Analyze Api for Instagram', () => {
    const end = moment().subtract(1, 'days').unix();
    const start = moment().subtract(7, 'days').unix();

    compare.fn({
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
          start_date: moment.unix(start).format('MM/DD/YYYY'),
          end_date: moment.unix(end).format('MM/DD/YYYY'),
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
          start_date: moment.unix(start).format('MM/DD/YYYY'),
          end_date: moment.unix(end).format('MM/DD/YYYY'),
          profile_id: profileId,
        },
        json: true,
      }]);
  });


  it('should request for the previous week', () => {
    rp.mockClear();
    const end = moment().subtract(1, 'days').unix();
    const start = moment().subtract(7, 'days').unix();

    compare.fn({
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
          start_date: moment.unix(start).format('MM/DD/YYYY'),
          end_date: moment.unix(end).format('MM/DD/YYYY'),
          profile_id: null,
        },
        json: true,
      }]);
  });

  it('should request for the week before that', () => {
    const endDate = moment().subtract(1, 'days').unix();
    const startDate = moment().subtract(7, 'days').unix();

    compare.fn({
      startDate,
      endDate,
      profileId,
      profileService,
    }, {
      session: {
        analyze: {
          accessToken: token,
        },
      },
    });

    const end = moment().subtract(8, 'days').format('MM/DD/YYYY');
    const start = moment().subtract(14, 'days').format('MM/DD/YYYY');

    expect(rp.mock.calls[1])
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

  it('it should return both total and daily compares', async() => {
    rp.mockReturnValueOnce(Promise.resolve(CURRENT_PERIOD_TOTALS_RESPONSE));
    rp.mockReturnValueOnce(Promise.resolve(PAST_PERIOD_TOTALS_RESPONSE));
    rp.mockReturnValueOnce(Promise.resolve(CURRENT_PERIOD_DAILY_RESPONSE));
    rp.mockReturnValueOnce(Promise.resolve(PAST_PERIOD_DAILY_RESPONSE));

    const data = await compare.fn({ profileId, profileService }, {
      session: {
        analyze: {
          accessToken: token,
        },
      },
    });

    expect(data.daily).toBeDefined();
    expect(data.totals).toBeDefined();
  });

  it('should return the metrics value and diff, compared by total updates sent in the period', async() => {
    rp.mockReturnValueOnce(Promise.resolve(CURRENT_PERIOD_TOTALS_RESPONSE));
    rp.mockReturnValueOnce(Promise.resolve(PAST_PERIOD_TOTALS_RESPONSE));
    rp.mockReturnValueOnce(Promise.resolve(CURRENT_PERIOD_DAILY_RESPONSE));
    rp.mockReturnValueOnce(Promise.resolve(PAST_PERIOD_DAILY_RESPONSE));

    const data = await compare.fn({ profileId, profileService }, {
      session: {
        analyze: {
          accessToken: token,
        },
      },
    });

    expect(data.totals[0]).toEqual({
      diff: -40,
      label: 'Posts',
      color: '#3A92D3',
      value: 3,
      previousValue: 5,
      postsCount: 3,
      previousPostsCount: 5,
    });
  });

  it('should return a valid response if all data is 0', async() => {
    rp.mockReturnValueOnce(Promise.resolve(EMPTY_TOTALS_RESPONSE));
    rp.mockReturnValueOnce(Promise.resolve(EMPTY_TOTALS_RESPONSE));
    rp.mockReturnValueOnce(Promise.resolve(CURRENT_PERIOD_DAILY_RESPONSE));
    rp.mockReturnValueOnce(Promise.resolve(PAST_PERIOD_DAILY_RESPONSE));

    const data = await compare.fn({ profileId, profileService }, {
      session: {
        analyze: {
          accessToken: token,
        },
      },
    });

    expect(data.totals.length).toBe(10);
    expect(data.totals[0]).toEqual({
      diff: 0,
      label: 'Posts',
      color: '#3A92D3',
      value: 0,
      previousValue: 0,
      postsCount: 0,
      previousPostsCount: 0,
    });
  });

  it('should return a valid response if previous data is 0', async() => {
    rp.mockReturnValueOnce(Promise.resolve(CURRENT_PERIOD_TOTALS_RESPONSE));
    rp.mockReturnValueOnce(Promise.resolve(EMPTY_TOTALS_RESPONSE));
    rp.mockReturnValueOnce(Promise.resolve(CURRENT_PERIOD_DAILY_RESPONSE));
    rp.mockReturnValueOnce(Promise.resolve(PAST_PERIOD_DAILY_RESPONSE));

    const data = await compare.fn({ profileId, profileService }, {
      session: {
        analyze: {
          accessToken: token,
        },
      },
    });

    expect(data.totals.length).toBe(10);
    expect(data.totals[0]).toEqual({
      diff: 300,
      label: 'Posts',
      color: '#3A92D3',
      value: 3,
      previousValue: 0,
      postsCount: 3,
      previousPostsCount: 0,
    });
  });

  it('should return the daily compares', async() => {
    rp.mockReturnValueOnce(Promise.resolve(CURRENT_PERIOD_TOTALS_RESPONSE));
    rp.mockReturnValueOnce(Promise.resolve(PAST_PERIOD_TOTALS_RESPONSE));
    rp.mockReturnValueOnce(Promise.resolve(CURRENT_PERIOD_DAILY_RESPONSE));
    rp.mockReturnValueOnce(Promise.resolve(PAST_PERIOD_DAILY_RESPONSE));

    const data = await compare.fn({ profileId, profileService }, {
      session: {
        analyze: {
          accessToken: token,
        },
      },
    });

    expect(data.daily.length).toBe(7);

    expect(data.totalPeriodDaily.length).toBe(0);

    expect(data.daily[0]).toMatchObject({
      day: '1504051200000',
      previousPeriodDay: '1503446400000',
    });
  });

  it('should return Period Total data for Twitter', async() => {
    rp.mockReturnValueOnce(Promise.resolve(CURRENT_PERIOD_TOTALS_RESPONSE));
    rp.mockReturnValueOnce(Promise.resolve(PAST_PERIOD_TOTALS_RESPONSE));
    rp.mockReturnValueOnce(Promise.resolve(CURRENT_PERIOD_DAILY_RESPONSE));
    rp.mockReturnValueOnce(Promise.resolve(PAST_PERIOD_DAILY_RESPONSE));

    const data = await compare.fn({ profileId, profileService: 'twitter' }, {
      session: {
        analyze: {
          accessToken: token,
        },
      },
    });

    const firstDayMetric = data.daily[0].metrics[0];
    const secondDayMetric = data.daily[1].metrics[0];
    expect(data.totalPeriodDaily.length).toBe(7);

    expect(data.totalPeriodDaily[1].metrics[0])
      .not.toMatchObject(data.daily[1].metrics[0]);

    expect(data.totalPeriodDaily[1].metrics[0]).toMatchObject({
      label: 'Tweets',
      value: firstDayMetric.value + secondDayMetric.value,
      previousValue: firstDayMetric.previousValue + secondDayMetric.previousValue,
    });
  });

  it('should return daily totals only for days that match with the previous period', async() => {
    rp.mockReturnValueOnce(Promise.resolve(CURRENT_PERIOD_TOTALS_RESPONSE));
    rp.mockReturnValueOnce(Promise.resolve(PAST_PERIOD_TOTALS_RESPONSE));
    rp.mockReturnValueOnce(Promise.resolve(CURRENT_PERIOD_DAILY_RESPONSE));
    rp.mockReturnValueOnce(Promise.resolve(PAST_PERIOD_DAILY_PARTIAL_RESPONSE));

    const data = await compare.fn({ profileId, profileService }, {
      session: {
        analyze: {
          accessToken: token,
        },
      },
    });

    expect(data.daily.length).toBe(2);

    expect(data.totalPeriodDaily.length).toBe(0);

    expect(data.daily[0]).toMatchObject({
      day: '1504051200000',
      previousPeriodDay: '1503446400000',
    });
  });
});
