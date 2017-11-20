/* eslint-disable import/first */
jest.mock('micro-rpc-client');
jest.mock('request-promise');
import rp from 'request-promise';
import followers from './';

describe('rpc/followers', () => {
  const profileId = '123159ad';
  const accessToken = 'some token';

  it('should have the expected name', () => {
    expect(followers.name)
      .toBe('followers');
  });

  it('should have the expected docs', () => {
    expect(followers.docs)
      .toBe('fetch profile followers count');
  });

  it('should request the analytics followers count for the profile', async () => {
    rp.mockReturnValueOnce(Promise.resolve({
      response: 'current_follower_count',
    }));
    const followersCount = await followers.fn({ profileId }, {
      session: {
        analyze: {
          accessToken,
        },
      },
    });

    expect(rp.mock.calls[0])
      .toEqual([{
        uri: `${process.env.API_ADDR}/1/profiles/${profileId}/analytics/current_follower_count.json`,
        method: 'GET',
        strictSSL: false,
        qs: {
          access_token: accessToken,
        },
        json: true,
      }]);

    expect(followersCount).toBe('current_follower_count');
  });
});
