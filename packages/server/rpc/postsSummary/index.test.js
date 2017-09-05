/* eslint-disable import/first */
import moment from 'moment';

jest.mock('micro-rpc-client');
jest.mock('request-promise');
import rp from 'request-promise';
import postsSummary from './';
import { CURRENT_PERIOD_RESPONSE, PAST_PERIOD_RESPONSE } from './mockResponses';

describe('rpc/posts_summary', () => {
  const profileId = '123159ad';
  const token = 'some token';

  it('should have the expected name', () => {
    expect(postsSummary.name)
      .toBe('posts_summary');
  });

  it('should have the expected docs', () => {
    expect(postsSummary.docs)
      .toBe('fetch analytics posts summary for profiles and pages');
  });

  it('should request for the past week', () => {
    const end = moment().subtract(1, 'days').unix();
    const start = moment().subtract(7, 'days').unix();

    postsSummary.fn({
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
        uri: `${process.env.API_ADDR}/1/profiles/${profileId}/analytics/posts_summary.json`,
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

    postsSummary.fn({
      startDate,
      endDate,
      profileId,
    }, {
      session: {
        accessToken: token,
      },
    });

    const end = moment().subtract(8, 'days').format('MM/DD/YYYY');
    const start = moment().subtract(14, 'days').format('MM/DD/YYYY');

    expect(rp.mock.calls[1])
      .toEqual([{
        uri: `${process.env.API_ADDR}/1/profiles/${profileId}/analytics/posts_summary.json`,
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

  it('should combine the data for the two periods and show the current period value and the % difference', async () => {
    rp.mockReturnValueOnce(Promise.resolve(CURRENT_PERIOD_RESPONSE));
    rp.mockReturnValueOnce(Promise.resolve(PAST_PERIOD_RESPONSE));

    const postsSummaryData = await postsSummary.fn({ profileId }, {
      session: {
        accessToken: token,
      },
    });

    expect(postsSummaryData).toEqual([{
      label: 'Post Impressions',
      value: 56755,
      diff: 25,
    }, {
      label: 'Post Reach',
      value: 1181030,
      diff: -0,
    }, {
      label: 'Reactions',
      value: 9391,
      diff: 0,
    }, {
      label: 'Shares',
      value: 5,
      diff: 150,
    }, {
      label: 'Posts',
      value: 3,
      diff: -40,
    }, {
      label: 'Comments',
      value: 100,
      diff: 25,
    },
    ]);
  });
});

