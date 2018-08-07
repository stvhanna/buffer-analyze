import { actions, actionTypes as fetchActions } from '@bufferapp/async-data-fetch';
import middleware from './middleware';

describe('middleware', () => {
  const state = {};
  const store = {
    dispatch: jest.fn(),
    getState: jest.fn(() => state),
  };
  const next = jest.fn();
  it('it should request account details on profiles_FETCH_SUCCESS', () => {
    const action = {
      type: `profiles_${fetchActions.FETCH_SUCCESS}`,
      result: [{
        organizationId: 'org-1',
      }],
    };
    middleware(store)(next)(action);
    expect(store.dispatch).toHaveBeenCalledWith(actions.fetch({
      name: 'get_account_details',
      args: {
        organizationId: 'org-1',
      },
    }));
  });
});
