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

  describe('should redirect visitors if they do not have any profiles', () => {
    it('non-local redirect', () => {
      const action = {
        type: `profiles_${asyncDataFetchActions.FETCH_SUCCESS}`,
        result: [],
      };
      middleware(store)(next)(action);
      expect(window.location.assign).toHaveBeenCalledWith('https://buffer.com/analyze');
    });
    it('local redirect', () => {
      jsdom.reconfigure({
        url: 'https://analyze.local.buffer.com',
      });
      const action = {
        type: `profiles_${asyncDataFetchActions.FETCH_SUCCESS}`,
        result: [],
      };
      middleware(store)(next)(action);
      expect(window.location.assign).toHaveBeenCalledWith('https://local.buffer.com/analyze');
    });
  });

  it('should not redirect if the profiles is not empty', () => {
    const action = {
      type: `profiles_${asyncDataFetchActions.FETCH_SUCCESS}`,
      result: [
        { id: '5939bcf94160550b007b23df' },
        { id: '5939bcf94160550b007b23ee' },
      ],
    };
    middleware(store)(next)(action);
    expect(window.location.assign).not.toHaveBeenCalled();
  });

  afterEach(() => jest.resetAllMocks());
});
