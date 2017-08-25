import { actionTypes, actions } from '@bufferapp/async-data-fetch';
import { 
  actionTypes as profileActionTypes,
  actions as profileActions,
} from '@bufferapp/analyze-profile-selector';
import { push } from 'react-router-redux';
import middleware from './middleware';

const profileId = '120351988a';

const stateWithProfileRoute = {
  router: {
    location: {
      pathname: `/insights/twitter/${profileId}`,
    },
  },
};

const stateWithoutProfileRoute = {
  router: {
    location: {
      pathname: '/',
    },
  },
};

const getMiddlewareElements = (state = stateWithProfileRoute) => {
  const store = {
    getState: jest.fn(() => state),
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

  it('should select a profile after fetching all the profiles if the route is an insights route', () => {
    const { store, next, invoke } = getMiddlewareElements();
    const action = {
      type: `profiles_${actionTypes.FETCH_SUCCESS}`,
    };
    invoke(action);
    expect(store.dispatch).toHaveBeenCalledWith(profileActions.selectProfile(profileId));
    expect(next).toHaveBeenCalledWith(action);
  });

  it('should not select a profile after fetching all the profiles if the route is not an insights route', () => {
    const { store, next, invoke } = getMiddlewareElements(stateWithoutProfileRoute);
    const action = {
      type: `profiles_${actionTypes.FETCH_SUCCESS}`,
    };
    invoke(action);
    expect(store.dispatch).not.toHaveBeenCalledWith(profileActions.selectProfile(profileId));
    expect(next).toHaveBeenCalledWith(action);
  });

  it('should push a new route whenever a profile has been selected', () => {
    const { store, next, invoke } = getMiddlewareElements();
    const action = {
      type: profileActionTypes.SELECT_PROFILE,
      id: profileId,
    };
    invoke(action);
    expect(store.dispatch).toHaveBeenCalledWith(push(`/insights/twitter/${profileId}`));
    expect(next).toHaveBeenCalledWith(action);
  });
});
