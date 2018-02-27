/* eslint-disable import/first */

jest.mock('micro-rpc-client');
jest.mock('request-promise');
import rp from 'request-promise';
import moment from 'moment';
import createReport from './';

const mockTimestamp = moment('2017-11-15').valueOf();
Date.now = () => mockTimestamp;

describe('rpc/create_report', () => {
  const userId = 'user123';
  const profileId = '123159ad';
  const chartId = 'summary-table';
  const name = 'Weekly Sync Report';

  it('should have the expected name', () => {
    expect(createReport.name)
      .toBe('create_report');
  });

  it('should have the expected docs', () => {
    expect(createReport.docs)
      .toBe('create a new report for Analyze');
  });

  it('should send a POST request to /create_report with the provided parameters', async () => {
    const report = {
      _id: '1234',
      name,
      updated_at: mockTimestamp,
      charts: [{
        profile_id: profileId,
        chart_id: chartId,
      }],
    };
    const dateRange = {
      start: 123461235,
      end: 1235132442,
      range: 30,
    };
    rp.mockReturnValueOnce(Promise.resolve({
      created: {
        _id: report._id,
      },
    }));

    const result = await createReport.fn({ profileId, chartId, name, userId, dateRange });

    expect(result).toEqual(report);
    expect(rp.mock.calls[0]).toEqual([{
      uri: `${process.env.ANALYZE_API_ADDR}/create_report`,
      method: 'POST',
      strictSSL: !(process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test'),
      body: {
        name,
        profile_id: profileId,
        chart_id: chartId,
        user_id: userId,
        start_date: dateRange.start,
        end_date: dateRange.end,
        range: dateRange.range,
      },
      json: true,
    }]);
  });
});

