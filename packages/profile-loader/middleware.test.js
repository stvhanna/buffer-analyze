import { actions } from '@bufferapp/async-data-fetch';
import middleware from './middleware';

describe('middleware', () => {
  const next = jest.fn();
  const store = {
    dispatch: jest.fn(),
  };
  it('should exist', () => {
    expect(middleware).toBeDefined();
  });

  it('should keep propagating the action through the chain', () => {
    const action = {
      type: 'TEST',
    };
    middleware(store)(next)(action);
    expect(next).toHaveBeenCalledWith(action);
  });

  it('should dispatch the data fetch action for fetching the profiles once login has been successful', () => {
    const action = {
      type: 'APP_INIT',
    };
    middleware(store)(next)(action);
    expect(store.dispatch).toHaveBeenCalledWith(actions.fetch({
      name: 'profiles',
    }));
    expect(next).toHaveBeenCalledWith(action);
  });
});
