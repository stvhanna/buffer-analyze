/* eslint-disable import/first */

jest.mock('micro-rpc-client');
jest.mock('request-promise');
import rp from 'request-promise';
import moveChart from './';

describe('rpc/move_chart', () => {
  it('should have the expected name', () => {
    expect(moveChart.name)
      .toBe('move_chart');
  });

  it('should have the expected docs', () => {
    expect(moveChart.docs)
      .toBe('move chart in report');
  });

  it('should send a POST request to /move_chart with the provided parameters', async () => {
    const chartId = 'summary-table';
    const reportId = 'report-123';
    const direction = 'up';
    rp.mockReturnValueOnce(Promise.resolve());

    await moveChart.fn({ reportId, chartId, direction });

    expect(rp.mock.calls[0]).toEqual([{
      uri: `${process.env.ANALYZE_API_ADDR}/move_chart`,
      method: 'POST',
      strictSSL: !(process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test'),
      body: {
        report_id: reportId,
        chart_id: chartId,
        direction,
      },
      json: true,
    }]);
  });
});
