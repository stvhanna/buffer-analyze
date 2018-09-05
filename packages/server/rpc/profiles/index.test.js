/* eslint-disable import/first */

jest.mock('micro-rpc-client');
jest.mock('request-promise');
import rp from 'request-promise';
import getProfiles from './';

describe('rpc/profiles', () => {
  it('should have the expected name', () => {
    expect(getProfiles.name)
      .toBe('profiles');
  });

  it('should have the expected docs', () => {
    expect(getProfiles.docs)
      .toBe('fetch profiles');
  });

  it('should send a GET request to / get_social_accounts with the provided parameters', async () => {
    const id = 'user-123';
    rp.mockReturnValueOnce(Promise.resolve(JSON.stringify({
      profiles: [],
    })));

    await getProfiles.fn({ id }, { session: { analyze: { accessToken: 'foo' } } });

    expect(rp.mock.calls[0]).toEqual([{
      uri: `undefined/1/analyze/users/${id}/get_social_accounts.json`,
      method: 'GET',
      strictSSL: !(process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test'),
      qs: {
        access_token: 'foo',
      },
    }]);
  });

  it('should sort profilet by name', async () => {
    const id = 'user-123';
    rp.mockReturnValueOnce(Promise.resolve(JSON.stringify({
      profiles: [{ service_username: '@foo' }, { service_username: 'bar' }],
    })));

    const profiles = await getProfiles.fn({ id }, { session: { analyze: { accessToken: 'foo' } } });
    expect(profiles[0].username).toEqual('bar');
    expect(profiles[1].username).toEqual('@foo');
  });
});

