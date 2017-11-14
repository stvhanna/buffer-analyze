/* eslint-disable import/first */

jest.mock('micro-rpc-client');
jest.mock('request-promise');
import rp from 'request-promise';
import addToReport from './';

describe('rpc/add_chart_to_report', () => {
  it('should have the expected name', () => {
    expect(addToReport.name)
      .toBe('add_chart_to_report');
  });

  it('should have the expected docs', () => {
    expect(addToReport.docs)
      .toBe('add chart to an existing report');
  });

  it('should send a POST request to /add_chart_to_report with the provided parameters', async () => {
    const profileId = '123159ad';
    const chartId = 'summary-table';
    const reportId = 'report-123';
    const state = {
      selectedMetric: 'impressions',
    };
    rp.mockReturnValueOnce(Promise.resolve());

    await addToReport.fn({ reportId, profileId, chartId, state });

    expect(rp.mock.calls[0]).toEqual([{
      uri: `${process.env.ANALYZE_API_ADDR}/add_chart_to_report`,
      method: 'POST',
      strictSSL: !(process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test'),
      body: {
        id: reportId,
        state,
        profile_id: profileId,
        chart_id: chartId,
      },
      json: true,
    }]);
  });
});

