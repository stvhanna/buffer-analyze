import { actions, actionTypes } from '@bufferapp/async-data-fetch';
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

  it('should dispatch the data fetch action for fetching the profiles once app has been initialized', () => {
    const action = {
      type: `user_${actionTypes.FETCH_SUCCESS}`,
      result: {
        id: 'user_id-1234',
      },
    };
    middleware(store)(next)(action);
    expect(store.dispatch).toHaveBeenCalledWith(actions.fetch({
      name: 'profiles',
      args: {
        id: 'user_id-1234',
      },
    }));
    expect(next).toHaveBeenCalledWith(action);
  });
});
