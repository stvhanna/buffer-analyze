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
    getState: jest.fn(() => {}),
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
  it('should work', () => {
    const action = {
      type: actionTypes.EXPORT_TO_PDF,
    };
    middleware(store)(next)(action);
    expect(global.open).toHaveBeenCalledWith('https://analyze.buffer.com/report_to_pdf?url=https://analyze.buffer.com/export/report/1234', '_blank');
  });
});
