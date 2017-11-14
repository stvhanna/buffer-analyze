/* eslint-disable import/first */

jest.mock('micro-rpc-client');
jest.mock('request-promise');
import rp from 'request-promise';
import saveReportChanges from './';

describe('rpc/update_report', () => {
  const reportId = 'report-123';

  it('should have the expected name', () => {
    expect(saveReportChanges.name)
      .toBe('update_report');
  });

  it('should have the expected docs', () => {
    expect(saveReportChanges.docs)
      .toBe('save report changes');
  });

  it('should send a POST request to /update_report with the provided parameters', async () => {
    rp.mockReturnValueOnce(Promise.resolve());

    await saveReportChanges.fn({
      id: reportId,
      name: 'A new name!',
    });

    expect(rp.mock.calls[0]).toEqual([{
      uri: `${process.env.ANALYZE_API_ADDR}/update_report`,
      method: 'POST',
      strictSSL: !(process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test'),
      body: {
        id: reportId,
        name: 'A new name!',
      },
      json: true,
    }]);
  });
});

