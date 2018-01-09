import middleware from './middleware';
import { actionTypes } from './actions';

global.open = jest.fn();
Object.defineProperty(window.location, 'origin', {
  value: 'https://analyze.buffer.com',
});
Object.defineProperty(window.location, 'pathname', {
  value: '/report/1234',
});

describe('middleware', () => {
  const next = jest.fn();
  const store = {
    dispatch: jest.fn(),
    getState: jest.fn(() => ({
      date: {
        startDate: 5678,
        endDate: 9876,
      },
      report: {
        name: 'A report',
      },
    })),
  };
  it('should exist', () => {
    expect(middleware).toBeDefined();
  });
  it('should keep propagating the action through the chain', () => {
    const action = {
      type: 'TEST',
    };
    middleware(store)(next)(action);
  });
  it('EXPORT_TO_PDF should open a new tab with the export url for that report', () => {
    const action = {
      type: actionTypes.EXPORT_TO_PDF,
    };
    const exportURL = encodeURIComponent('https://analyze.buffer.com/export/report/1234?start_date=5678&end_date=9876');
    const expectedURL = `https://analyze.buffer.com/report_to_pdf?name=A report&url=${exportURL}`;
    middleware(store)(next)(action);
    expect(global.open).toHaveBeenCalledWith(expectedURL, '_blank');
  });
});
