/* eslint-disable import/first */

jest.mock('micro-rpc-client');
jest.mock('request-promise');
import rp from 'request-promise';
import uploadReportLogo from './';

describe('rpc/upload_report_logo', () => {
  it('should have the expected name', () => {
    expect(uploadReportLogo.name)
      .toBe('upload_report_logo');
  });

  it('should have the expected docs', () => {
    expect(uploadReportLogo.docs)
      .toBe('upload report logo to the server');
  });

  it('should send a POST request to /upload_report_logo with the provided parameters', async () => {
    const reportId = 'report-123';
    const logoImage = 'test-image-string';
    rp.mockReturnValueOnce(Promise.resolve());

    await uploadReportLogo.fn({
      logoImage, reportId,
    });

    expect(rp.mock.calls[0]).toEqual([{
      uri: `${process.env.ANALYZE_API_ADDR}/upload_report_logo`,
      method: 'POST',
      strictSSL: !(process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test'),
      body: {
        report_id: reportId,
        file: logoImage,
      },
      json: true,
    }]);
  });
});

