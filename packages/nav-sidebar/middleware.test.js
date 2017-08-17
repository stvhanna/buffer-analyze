import { actionTypes, actions } from '@bufferapp/async-data-fetch';
import middleware from './middleware';

const getMiddlewareElements = () => {
  const store = {
    getState: jest.fn(() => ({})),
    dispatch: jest.fn(),
  };
  const next = jest.fn();

  const invoke = action => middleware(store)(next)(action);

  return { store, next, invoke };
};

describe('middleware', () => {
  it('should exist', () => {
    expect(middleware).toBeDefined();
  });

  it('should keep propagating the action through the chain', () => {
    const { next, invoke } = getMiddlewareElements();
    const action = {
      type: 'TEST',
    };
    invoke(action);
    expect(next).toHaveBeenCalledWith(action);
  });

  it('should dispatch the data fetch action for fetching the profiles once login has been successful', () => {
    const { store, next, invoke } = getMiddlewareElements();
    const action = {
      type: `login_${actionTypes.FETCH_SUCCESS}`,
    };
    invoke(action);
    expect(store.dispatch).toHaveBeenCalledWith(actions.fetch({
      name: 'profiles',
    }));
    expect(next).toHaveBeenCalledWith(action);
  });
});
