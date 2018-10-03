/* eslint-disable import/first */

jest.mock('micro-rpc-client');
jest.mock('request-promise');
import rp from 'request-promise';
import moment from 'moment';
import demographic from './';

const mockTimestamp = moment('2017-11-15').valueOf();
Date.now = () => mockTimestamp;

describe('rpc/create_report', () => {
  const profileId = '123159ad';

  it('should have the expected name', () => {
    expect(demographic.name)
      .toBe('demographic');
  });

  it('should have the expected docs', () => {
    expect(demographic.docs)
      .toBe('get demographic data for a profile');
  });

  it('should send a POST request to /create_report with the provided parameters', async () => {
    rp.mockReturnValueOnce(Promise.resolve({
      response: {
        metrics: [
          {
            key: 'foo_bar',
            label: 'foo bar',
            metrics: [
              {
                key: 'foo',
                values: [
                  'Bar' : 50,
                  'Foo' : 10,
                ],
              },
            ],
          },
        ],
      },
    }));

    const result = await demographic.fn({ profileId, state: {}, startDate: '09/21/2018', endDate: '09/26/2018' }, {
      app: {
        get() { return 'analyze-api'; },
      },
      session: {
        analyze: {
          accessToken: 'foo1',
        },
      },
    });

    expect(result).toEqual({
      selectedGroup: 'foo_bar',
      metrics: [
        {
          key: 'foo_bar',
          label: 'foo bar',
          metrics: [
            {
              key: 'foo',
              values: [
                'Bar' : 50,
                'Foo' : 10,
              ],
            },
          ],
        },
      ],
    });

    expect(rp.mock.calls[0]).toEqual([{
      uri: 'analyze-api/metrics/demographic',
      method: 'POST',
      strictSSL: !(process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test'),
      body: {
        profile_id: profileId,
        start_date: '09/21/2018',
        end_date: '09/26/2018',
        state: {},
        access_token: 'foo1',
      },
      json: true,
    }]);
  });
});

