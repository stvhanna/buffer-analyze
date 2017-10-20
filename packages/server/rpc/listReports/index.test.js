/* eslint-disable import/first */

jest.mock('micro-rpc-client');
jest.mock('request-promise');
import rp from 'request-promise';
import listReports from './';

describe('rpc/list_reports', () => {
  const userId = 'user123';

  it('should have the expected name', () => {
    expect(listReports.name)
      .toBe('list_reports');
  });

  it('should have the expected docs', () => {
    expect(listReports.docs)
      .toBe('get reports list for user');
  });

  it('should send a POST request to /list_reports with the provided parameters', async () => {
    const reports = ['a report', 'another_report'];
    rp.mockReturnValueOnce(Promise.resolve(reports));

    const result = await listReports.fn({ userId });

    expect(result).toEqual(reports);
    expect(rp.mock.calls[0]).toEqual([{
      uri: `${process.env.ANALYZE_API_ADDR}/list_reports`,
      method: 'POST',
      strictSSL: !(process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test'),
      body: {
        user_id: userId,
      },
      json: true,
    }]);
  });
});
