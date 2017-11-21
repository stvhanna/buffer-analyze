/* eslint-disable import/first */

jest.mock('micro-rpc-client');
jest.mock('request-promise');
import rp from 'request-promise';
import deleteChart from './';

describe('rpc/delete_chart', () => {
  it('should have the expected name', () => {
    expect(deleteChart.name)
      .toBe('delete_chart');
  });

  it('should have the expected docs', () => {
    expect(deleteChart.docs)
      .toBe('delete chart in report');
  });

  it('should send a POST request to /delete_chart with the provided parameters', async () => {
    const chartId = 'summary-table';
    const reportId = 'report-123';
    rp.mockReturnValueOnce(Promise.resolve());

    await deleteChart.fn({ reportId, chartId });

    expect(rp.mock.calls[0]).toEqual([{
      uri: `${process.env.ANALYZE_API_ADDR}/delete_chart`,
      method: 'POST',
      strictSSL: !(process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test'),
      body: {
        report_id: reportId,
        chart_id: chartId,
      },
      json: true,
    }]);
  });
});

