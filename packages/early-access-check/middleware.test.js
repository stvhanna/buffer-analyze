import { actionTypes as asyncDataFetchActions } from '@bufferapp/async-data-fetch';
import middleware from './middleware';

describe('middleware', () => {
  const next = jest.fn();
  const state = {};
  const store = {
    dispatch: jest.fn(),
    getState: jest.fn(() => state),
  };

  window.location.assign = jest.fn();

  describe('should redirect visitors if they do not have the early access feature flip enabled', () => {
    it('non-local redirect', () => {
      const action = {
        type: `user_${asyncDataFetchActions.FETCH_SUCCESS}`,
        result: {
          features: [],
        },
      };
      middleware(store)(next)(action);
      expect(window.location.assign).toHaveBeenCalledWith('https://buffer.com/analyze');
    });
    it('local redirect', () => {
      Object.defineProperty(window.location, 'hostname', {
        value: 'analyze.local.buffer.com',
      });
      const action = {
        type: `user_${asyncDataFetchActions.FETCH_SUCCESS}`,
        result: {
          features: [],
        },
      };
      middleware(store)(next)(action);
      expect(window.location.assign).toHaveBeenCalledWith('https://local.buffer.com/analyze');
    });
  });

  it('should not redirect if feature flip is present', () => {
    const action = {
      type: `user_${asyncDataFetchActions.FETCH_SUCCESS}`,
      result: {
        features: ['analyze_early_access'],
      },
    };
    middleware(store)(next)(action);
    expect(window.location.assign).not.toHaveBeenCalled();
  });

  afterEach(() => jest.resetAllMocks());
});
