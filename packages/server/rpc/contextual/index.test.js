/* eslint-disable import/first */
import moment from 'moment';

jest.mock('micro-rpc-client');
jest.mock('request-promise');
import rp from 'request-promise';
import contextual from './';
import CURRENT_PERIOD_DAILY_RESPONSE from './mockResponses';

rp.mockImplementation(() => new Promise(() => {}));

describe('rpc/contextual', () => {
  const profileId = '123159ad';
  const profileService = 'facebook';
  const token = 'some token';

  it('should have the expected name', () => {
    expect(contextual.name)
      .toBe('contextual');
  });

  it('should have the expected docs', () => {
    expect(contextual.docs)
      .toBe('fetch analytics contextual for profiles and pages');
  });

  it('should request contextual data for the previous week', () => {
    const end = moment().subtract(1, 'days').unix();
    const start = moment().subtract(7, 'days').unix();

    contextual.fn({
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
        uri: `${process.env.API_ADDR}/1/profiles/${profileId}/analytics/contextual.json`,
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

  it('it should return: data, metrics, and presets', async() => {
    rp.mockReturnValueOnce(Promise.resolve(CURRENT_PERIOD_DAILY_RESPONSE));

    const data = await contextual.fn({ profileId, profileService }, {
      session: {
        accessToken: token,
      },
    });

    expect(data.daily).toBeDefined();
    expect(data.metrics).toBeDefined();
    expect(data.presets).toBeDefined();
  });

  it('should return a valid response if all data is 0', async() => {
    rp.mockReturnValueOnce(Promise.resolve(CURRENT_PERIOD_DAILY_RESPONSE));

    const data = await contextual.fn({ profileId, profileService }, {
      session: {
        accessToken: token,
      },
    });

    expect(data.metrics.length).toBe(9);
    expect(data.metrics[0]).toEqual({
      label: 'Posts',
      color: '#3A92D3',
    });
  });

  it('should return the daily data', async() => {
    rp.mockReturnValueOnce(Promise.resolve(CURRENT_PERIOD_DAILY_RESPONSE));

    const data = await contextual.fn({ profileId, profileService }, {
      session: {
        accessToken: token,
      },
    });
    expect(data.daily.length).toBe(7);
    expect(data.daily[0].day).toBe('1508371200000');
    expect(data.daily[0].metrics.length).toBe(10);
    expect(data.daily[0].metrics[0]).toMatchObject({
      key: 'posts_count',
      value: 1,
      postsCount: 1,
      label: 'Posts',
    });
  });

  it('should return the presets data', async() => {
    rp.mockReturnValueOnce(Promise.resolve(CURRENT_PERIOD_DAILY_RESPONSE));

    const data = await contextual.fn({ profileId, profileService }, {
      session: {
        accessToken: token,
      },
    });
    expect(data.presets.length).toBe(2);

    expect(data.presets[0].label).toBe('How does post frequency affect my fan count?');
    expect(data.presets[0].data.length).toBe(7);
    expect(data.presets[0].data[0]).toMatchObject({
      day: '1508371200000',
    });
    expect(data.presets[0].data[0].metrics.length).toBe(2);
    expect(data.presets[0].data[0].metrics[0]).toMatchObject({
      key: 'posts_count',
      label: 'Posts',
      postsCount: 1,
      value: 1,
    });
    expect(data.presets[0].yAxis.metrics[0]).toMatchObject({
      key: 'new_followers',
      label: 'New Fans',
    });
  });
});

