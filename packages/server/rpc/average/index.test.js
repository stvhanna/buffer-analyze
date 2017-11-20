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
  const token = 'some token';

  it('should have the expected name', () => {
    expect(average.name)
      .toBe('average');
  });

  it('should have the expected docs', () => {
    expect(average.docs)
      .toBe('fetch analytics average for profiles and pages');
  });

  it('should request for the past week', () => {
    const end = moment().subtract(1, 'days').unix();
    const start = moment().subtract(7, 'days').unix();

    average.fn({
      startDate: start,
      endDate: end,
      profileId,
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
        },
        json: true,
      }]);
  });

  it('should request for the week before that', () => {
    const endDate = moment().subtract(1, 'days').unix();
    const startDate = moment().subtract(7, 'days').unix();

    average.fn({
      startDate,
      endDate,
      profileId,
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
        },
        json: true,
      }]);
  });

  it('it should return both total and daily averages', async() => {
    rp.mockReturnValueOnce(Promise.resolve(CURRENT_PERIOD_TOTALS_RESPONSE));
    rp.mockReturnValueOnce(Promise.resolve(PAST_PERIOD_TOTALS_RESPONSE));
    rp.mockReturnValueOnce(Promise.resolve(CURRENT_PERIOD_DAILY_RESPONSE));
    rp.mockReturnValueOnce(Promise.resolve(PAST_PERIOD_DAILY_RESPONSE));

    const data = await average.fn({ profileId }, {
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

    const data = await average.fn({ profileId }, {
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

    const data = await average.fn({ profileId }, {
      session: {
        analyze: {
          accessToken: token,
        },
      },
    });

    expect(data.totals).toEqual([
      {
        diff: 403,
        label: 'Impression average',
        value: 393677,
      },
      {
        diff: 315,
        label: 'Engagement average',
        value: 4277,
      },
      {
        diff: 355,
        label: 'Click average',
        value: 19996,
      },
    ]);
  });

  it('should return a valid response if all data is 0', async() => {
    rp.mockReturnValueOnce(Promise.resolve(EMPTY_TOTALS_RESPONSE));
    rp.mockReturnValueOnce(Promise.resolve(EMPTY_TOTALS_RESPONSE));
    rp.mockReturnValueOnce(Promise.resolve(CURRENT_PERIOD_DAILY_RESPONSE));
    rp.mockReturnValueOnce(Promise.resolve(PAST_PERIOD_DAILY_RESPONSE));

    const data = await average.fn({ profileId }, {
      session: {
        analyze: {
          accessToken: token,
        },
      },
    });

    expect(data.totals).toEqual([
      {
        diff: 0,
        label: 'Impression average',
        value: 0,
      },
      {
        diff: 0,
        label: 'Engagement average',
        value: 0,
      },
      {
        diff: 0,
        label: 'Click average',
        value: 0,
      },
    ]);
  });

  it('should return a valid response if previous data is 0', async() => {
    rp.mockReturnValueOnce(Promise.resolve(CURRENT_PERIOD_TOTALS_RESPONSE));
    rp.mockReturnValueOnce(Promise.resolve(EMPTY_TOTALS_RESPONSE));
    rp.mockReturnValueOnce(Promise.resolve(CURRENT_PERIOD_DAILY_RESPONSE));
    rp.mockReturnValueOnce(Promise.resolve(PAST_PERIOD_DAILY_RESPONSE));

    const data = await average.fn({ profileId }, {
      session: {
        analyze: {
          accessToken: token,
        },
      },
    });

    expect(data.totals).toEqual([
      {
        diff: 39367700,
        label: 'Impression average',
        value: 393677,
      },
      {
        diff: 427700,
        label: 'Engagement average',
        value: 4277,
      },
      {
        diff: 1999600,
        label: 'Click average',
        value: 19996,
      },
    ]);
  });

  it('should return the daily averages', async() => {
    rp.mockReturnValueOnce(Promise.resolve(CURRENT_PERIOD_TOTALS_RESPONSE));
    rp.mockReturnValueOnce(Promise.resolve(PAST_PERIOD_TOTALS_RESPONSE));
    rp.mockReturnValueOnce(Promise.resolve(CURRENT_PERIOD_DAILY_RESPONSE));
    rp.mockReturnValueOnce(Promise.resolve(PAST_PERIOD_DAILY_RESPONSE));

    const data = await average.fn({ profileId }, {
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
        { diff: 869, label: 'Engagement average', value: 3119 },
        { diff: 74, label: 'Impression average', value: 78966 },
        { diff: 47, label: 'Click average', value: 2656 },
      ],
    });
  });
});
