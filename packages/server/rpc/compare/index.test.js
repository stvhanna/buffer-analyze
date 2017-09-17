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

  it('should request for the previous week', () => {
    const end = moment().subtract(1, 'days').unix();
    const start = moment().subtract(7, 'days').unix();

    compare.fn({
      startDate: start,
      endDate: end,
      profileId,
      profileService,
    }, {
      session: {
        accessToken: token,
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
        accessToken: token,
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
        accessToken: token,
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
        accessToken: token,
      },
    });

    expect(data.totals[0]).toEqual({
      diff: 0,
      label: 'Impression',
      color: '',
      value: 0,
      previous_value: 0,
      posts_count: 0,
      previous_posts_count: 0,
    });
  });

  it('should return a valid response if all data is 0', async() => {
    rp.mockReturnValueOnce(Promise.resolve(EMPTY_TOTALS_RESPONSE));
    rp.mockReturnValueOnce(Promise.resolve(EMPTY_TOTALS_RESPONSE));
    rp.mockReturnValueOnce(Promise.resolve(CURRENT_PERIOD_DAILY_RESPONSE));
    rp.mockReturnValueOnce(Promise.resolve(PAST_PERIOD_DAILY_RESPONSE));

    const data = await compare.fn({ profileId, profileService }, {
      session: {
        accessToken: token,
      },
    });

    expect(data.totals.length).toBe(9);
    expect(data.totals[0]).toEqual({
      diff: 0,
      label: 'Impression',
      color: '',
      value: 0,
      previous_value: 0,
      posts_count: 0,
      previous_posts_count: 0,
    });
  });

  it('should return a valid response if previous data is 0', async() => {
    rp.mockReturnValueOnce(Promise.resolve(CURRENT_PERIOD_TOTALS_RESPONSE));
    rp.mockReturnValueOnce(Promise.resolve(EMPTY_TOTALS_RESPONSE));
    rp.mockReturnValueOnce(Promise.resolve(CURRENT_PERIOD_DAILY_RESPONSE));
    rp.mockReturnValueOnce(Promise.resolve(PAST_PERIOD_DAILY_RESPONSE));

    const data = await compare.fn({ profileId, profileService }, {
      session: {
        accessToken: token,
      },
    });

    expect(data.totals.length).toBe(9);
    expect(data.totals[0]).toEqual({
      diff: 0,
      label: 'Impression',
      color: '',
      value: 0,
      previous_value: 0,
      posts_count: 0,
      previous_posts_count: 0,
    });
  });

  it('should return the daily compares', async() => {
    rp.mockReturnValueOnce(Promise.resolve(CURRENT_PERIOD_TOTALS_RESPONSE));
    rp.mockReturnValueOnce(Promise.resolve(PAST_PERIOD_TOTALS_RESPONSE));
    rp.mockReturnValueOnce(Promise.resolve(CURRENT_PERIOD_DAILY_RESPONSE));
    rp.mockReturnValueOnce(Promise.resolve(PAST_PERIOD_DAILY_RESPONSE));

    const data = await compare.fn({ profileId, profileService }, {
      session: {
        accessToken: token,
      },
    });

    expect(data.daily.length).toBe(7);
  });
});

