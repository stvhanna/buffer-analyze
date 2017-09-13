/* eslint-disable import/first */
import moment from 'moment';

jest.mock('micro-rpc-client');
jest.mock('request-promise');
import rp from 'request-promise';
import topPosts from './';

describe('rpc/top_posts', () => {
  const profileId = '123159ad';
  const token = 'some token';

  it('should have the expected name', () => {
    expect(topPosts.name)
      .toBe('top_posts');
  });

  it('should have the expected docs', () => {
    expect(topPosts.docs)
      .toBe('fetch analytics top posts for profiles and pages');
  });

  it('should request for the past week', () => {
    const end = moment().subtract(1, 'days').unix();
    const start = moment().subtract(7, 'days').unix();

    topPosts.fn({
      startDate: start,
      endDate: end,
      profileId,
    }, {
      session: {
        accessToken: token,
      },
    });

    expect(rp.mock.calls[0])
      .toEqual([{
        uri: `${process.env.API_ADDR}/1/profiles/${profileId}/analytics/top_posts.json`,
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
});

