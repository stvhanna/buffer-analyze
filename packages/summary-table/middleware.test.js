import { actions } from '@bufferapp/async-data-fetch';
import { actionTypes } from '@bufferapp/analyze-profile-selector';
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
  });

  it('shoud dispatch a data fetch for summary once a profile has been selected', () => {
    const action = {
      type: actionTypes.SELECT_PROFILE,
      id: '1235519asd',
    };
    middleware(store)(next)(action);
    expect(store.dispatch).toHaveBeenCalledWith(actions.fetch({
      name: 'summary',
      args: {
        profileId: '1235519asd',
      },
    }));
    expect(next).toHaveBeenCalledWith(action);
  });
});
