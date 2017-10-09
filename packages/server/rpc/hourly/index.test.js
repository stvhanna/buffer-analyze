/* eslint-disable import/first */
import moment from 'moment';

jest.mock('micro-rpc-client');
jest.mock('request-promise');
import rp from 'request-promise';
import hourly from './';
import response from './mockResponse';

const shouldCallHourlyTotalsEndpointWith = (profileId, token, startDate, endDate) => {
  expect(rp.mock.calls[0])
    .toEqual([{
      uri: `${process.env.API_ADDR}/1/profiles/${profileId}/analytics/hourly_totals.json`,
      method: 'GET',
      strictSSL: false,
      qs: {
        access_token: token,
        start_date: moment.unix(startDate).format('MM/DD/YYYY'),
        end_date: moment.unix(endDate).format('MM/DD/YYYY'),
      },
      json: true,
    }]);
};

describe('rpc/hourly', () => {
  const profileId = '123159ad';
  const token = 'some token';
  const session = {
    session: {
      accessToken: token,
    },
  };

  it('should have the expected name', () => {
    expect(hourly.name)
      .toBe('hourly');
  });

  it('should have the expected docs', () => {
    expect(hourly.docs)
      .toBe('fetch hourly insights for profiles');
  });

  it('should request hourly data for current profile and date range', async () => {
    const endDate = moment().subtract(1, 'days').unix();
    const startDate = moment().subtract(7, 'days').unix();
    rp.mockReturnValueOnce(Promise.resolve(response));

    const hourlyData = await hourly.fn({ startDate, endDate, profileId }, session);

    shouldCallHourlyTotalsEndpointWith(profileId, token, startDate, endDate);
    expect(hourlyData.postsCount).toEqual(
      [1, 3, 0, 0, 0, 5, 10, 5, 0, 0, 1, 0, 4, 1, 0, 3, 1, 0, 0, 5, 0, 2, 1, 0]);
    expect(hourlyData.metrics[0]).toEqual({
      label: 'Engagements',
      hourlyMetrics: [780, 1581, 788, 832, 664, 1909, 1773, 4307, 2006, 1403, 1219, 1232, 5300, 3174, 2044, 1987, 2445, 1146, 896, 2706, 2293, 1287, 1295, 823], // eslint-disable-line max-len
    });
  });
});
