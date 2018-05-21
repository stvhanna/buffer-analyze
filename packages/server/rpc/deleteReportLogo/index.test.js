/* eslint-disable import/first */

jest.mock('micro-rpc-client');
jest.mock('request-promise');
import rp from 'request-promise';
import deleteReportLogo from './';

describe('rpc/delete_report_logo', () => {
  it('should have the expected name', () => {
    expect(deleteReportLogo.name)
      .toBe('delete_report_logo');
  });

  it('should have the expected docs', () => {
    expect(deleteReportLogo.docs)
      .toBe('delete report logo');
  });

  it('should send a POST request to /delete_report_logo with the provided parameters', async () => {
    const reportId = 'report-123';
    rp.mockReturnValueOnce(Promise.resolve());

    await deleteReportLogo.fn({ reportId });

    expect(rp.mock.calls[0]).toEqual([{
      uri: `${process.env.ANALYZE_API_ADDR}/delete_report_logo`,
      method: 'POST',
      strictSSL: !(process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test'),
      body: {
        report_id: reportId,
      },
      json: true,
    }]);
  });
});

