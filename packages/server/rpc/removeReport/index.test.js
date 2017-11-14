/* eslint-disable import/first */

jest.mock('micro-rpc-client');
jest.mock('request-promise');
import rp from 'request-promise';
import removeReport from './';

describe('rpc/remove_report', () => {
  it('should have the expected name', () => {
    expect(removeReport.name)
      .toBe('remove_report');
  });

  it('should have the expected docs', () => {
    expect(removeReport.docs)
      .toBe('remove a report');
  });

  it('should send a POST request to /remove_report with the provided parameters', async () => {
    const id = 'report-123';
    rp.mockReturnValueOnce(Promise.resolve({
      removed: true,
    }));

    await removeReport.fn({ id });

    expect(rp.mock.calls[0]).toEqual([{
      uri: `${process.env.ANALYZE_API_ADDR}/remove_report`,
      method: 'POST',
      strictSSL: !(process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test'),
      body: {
        id,
      },
      json: true,
    }]);
  });
});


