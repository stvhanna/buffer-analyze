/* eslint-disable import/first */
import moment from 'moment';

jest.mock('micro-rpc-client');
jest.mock('../summary');
import summary from '../summary';
import getReport from './';

describe('rpc/get_report', () => {
  const token = 'some token';
  const session = {
    session: {
      accessToken: token,
    },
  };

  it('should have the expected name', () => {
    expect(getReport.name)
      .toBe('get_report');
  });

  it('should have the expected docs', () => {
    expect(getReport.docs)
      .toBe('get report details');
  });

  it('should request chart data for every chart on the argument list', async () => {
    const charts = [{
      chart_id: 'summary-table',
      profile_id: '12351wa',
    }];

    const endDate = moment().subtract(1, 'days').unix();
    const startDate = moment().subtract(7, 'days').unix();
    summary.fn = jest.fn();
    summary.fn.mockReturnValueOnce(Promise.resolve([]));

    await getReport.fn({ startDate, endDate, charts }, { session });

    expect(summary.fn.mock.calls[0])
      .toEqual([{
        profileId: '12351wa',
        startDate,
        endDate,
      }, { session }]);
  });

  it('returns chart data for each chart as a "metrics" key', async () => {
    const charts = [{
      chart_id: 'summary-table',
      profile_id: '12351wa',
    }];

    const endDate = moment().subtract(1, 'days').unix();
    const startDate = moment().subtract(7, 'days').unix();
    const metrics = [1, 2, 3, 4];
    summary.fn = jest.fn();
    summary.fn.mockReturnValueOnce(Promise.resolve(metrics));

    const report = await getReport.fn({ startDate, endDate, charts }, { session });

    expect(report[0].metrics).toEqual(metrics);
  });

  it('if chart metrics is an object with a metrics attribute, we merge the full object into the chart', async () => {
    const charts = [{
      chart_id: 'summary-table',
      profile_id: '12351wa',
    }];

    const endDate = moment().subtract(1, 'days').unix();
    const startDate = moment().subtract(7, 'days').unix();
    const metricsEmbeddedInObject = {
      metrics: [1, 2, 3, 4],
      posts: ['a post', 'another post'],
    };
    summary.fn = jest.fn();
    summary.fn.mockReturnValueOnce(Promise.resolve(metricsEmbeddedInObject));

    const report = await getReport.fn({ startDate, endDate, charts }, { session });

    expect(report[0].metrics).toEqual(metricsEmbeddedInObject.metrics);
    expect(report[0].posts).toEqual(metricsEmbeddedInObject.posts);
  });
});
