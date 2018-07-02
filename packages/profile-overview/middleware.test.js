import { actions, actionTypes as asyncDataFetchActionTypes } from '@bufferapp/async-data-fetch';
import middleware from './middleware';

const state = {
};

describe('middleware', () => {
  const next = jest.fn();
  const store = {
    dispatch: jest.fn(),
    getState: jest.fn(() => state),
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

  it('should fetch the data once the profiles have been loaded', () => {
    const action = {
      type: `profiles_${asyncDataFetchActionTypes.FETCH_SUCCESS}`,
      result: [{ id: 'foo' }, { id: 'bar' }],
    };
    middleware(store)(next)(action);
    expect(store.dispatch).toHaveBeenCalledWith(actions.fetch({
      name: 'profiles_overview',
      args: {
        profiles: ['foo', 'bar'],
      },
    }));
    expect(next).toHaveBeenCalledWith(action);
  });

  afterEach(() => jest.clearAllMocks());
});
