import { actions as performanceActions } from '@bufferapp/performance-tracking';
import { actionTypes } from '@bufferapp/async-data-fetch';
import { actions as reportActions } from '@bufferapp/report-list';
import { push, LOCATION_CHANGE } from 'react-router-redux';
import {
  actionTypes as profileActionTypes,
  actions as profileActions,
} from './reducer';
import middleware from './middleware';

const profileId = '120351988a';

const profiles = {
  selectedProfile: null,
  profiles: [
    {
      id: '120351988a',
      avatarUrl: 'http://pbs.twimg.com/profile_images/711360318262218752/wdl3jY5t_normal.jpg',
      service: 'twitter',
      timezone: 'America/Los_Angeles',
      username: 'buffer',
    },
    {
      id: '122222222',
      avatarUrl: 'http://pbs.twimg.com/profile_images/711360318262218752/wdl3jY5t_normal.jpg',
      service: 'facebook',
      timezone: 'America/Los_Angeles',
      username: 'buffer',
    },
  ],
};

const stateWithProfileRoute = {
  router: {
    location: {
      pathname: `/overview/${profileId}`,
    },
  },
  profiles,
};

const stateWithProfileRouteAndSearch = {
  router: {
    location: {
      pathname: `/overview/${profileId}`,
      search: '?foo=bar',
    },
  },
  profiles,
};

const stateWithInsightsRoute = {
  router: {
    location: {
      pathname: '/overview',
    },
  },
  profiles,
};

const stateWithProfileRouteAndSelectedProfile = {
  ...stateWithProfileRoute,
  profiles: {
    ...stateWithProfileRoute.profiles,
    selectedProfile: profiles.profiles[0],
  },
};

const stateWithProfileRouteAndSelectedProfileAndSearch = {
  ...stateWithProfileRouteAndSearch,
  profiles: {
    ...stateWithProfileRoute.profiles,
    selectedProfile: profiles.profiles[0],
  },
};

const stateWithoutProfileRoute = {
  router: {
    location: {
      pathname: '/',
    },
  },
  profiles,
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

  it('should select a profile after fetching all the profiles if the route is an insights route', () => {
    const { store, next, invoke } = getMiddlewareElements();
    const action = {
      type: `profiles_${actionTypes.FETCH_SUCCESS}`,
      result: profiles.profiles,
    };
    invoke(action);
    expect(store.dispatch).toHaveBeenCalledWith(profileActions.selectProfile(profiles.profiles[0]));
    expect(next).toHaveBeenCalledWith(action);
  });

  it('should select the first profile after fetching all the profiles if the route is an insights route with no id in the pathname', () => {
    const { store, next, invoke } = getMiddlewareElements(stateWithInsightsRoute);
    const action = {
      type: `profiles_${actionTypes.FETCH_SUCCESS}`,
      result: profiles.profiles,
    };
    invoke(action);
    expect(store.dispatch).toHaveBeenCalledWith(profileActions.selectProfile(profiles.profiles[0]));
    expect(next).toHaveBeenCalledWith(action);
  });

  it('should track first meaningful paint on fetch', () => {
    const { store, next, invoke } = getMiddlewareElements();
    const action = {
      type: `profiles_${actionTypes.FETCH_SUCCESS}`,
      result: profiles.profiles,
    };
    invoke(action);
    expect(store.dispatch).toHaveBeenCalledWith(performanceActions.measureFromNavigationStart({ name: 'firstMeaningfulPaint' }));
    expect(next).toHaveBeenCalledWith(action);
  });

  it('should push a new route whenever a profile has been selected', () => {
    const { store, next, invoke } = getMiddlewareElements();
    const action = {
      type: profileActionTypes.SELECT_PROFILE,
      profile: {
        id: profileId,
      },
    };
    invoke(action);
    expect(store.dispatch).toHaveBeenCalledWith(push(`/overview/${profileId}`));
    expect(next).toHaveBeenCalledWith(action);
  });

  it('should not push a new route whenever a profile has been selected if not insights', () => {
    const { store, next, invoke } = getMiddlewareElements(stateWithoutProfileRoute);
    const action = {
      type: profileActionTypes.SELECT_PROFILE,
      profile: {
        id: profileId,
      },
    };
    invoke(action);
    expect(store.dispatch).not.toHaveBeenCalledWith(push(`/overview/${profileId}`));
    expect(next).toHaveBeenCalledWith(action);
  });

  it('should persist search string whenever a profile has been selected', () => {
    const { store, next, invoke } = getMiddlewareElements(stateWithProfileRouteAndSelectedProfileAndSearch);
    const action = {
      type: profileActionTypes.SELECT_PROFILE,
      profile: {
        id: profileId,
      },
    };
    invoke(action);
    expect(store.dispatch).toHaveBeenCalledWith(push(`/overview/${profileId}/?foo=bar`));
    expect(next).toHaveBeenCalledWith(action);
  });

  describe('LOCATION_CHANGE', () => {
    it('should push a selectProfile action if there is a LOCATION_CHANGE for an overview/posts route and there is no profile selected', () => {
      const { store, next, invoke } = getMiddlewareElements();
      const action = {
        type: LOCATION_CHANGE,
        payload: {
          pathname: '/overview',
        },
      };
      invoke(action);
      expect(store.dispatch)
        .toHaveBeenCalledWith(profileActions.selectProfile(profiles.profiles[0]));
      expect(next).toHaveBeenCalledWith(action);
    });
    it('should push a new route with (overview|posts)/profileId as format when visting overview or posts with a profile selected', () => {
      const { store, next, invoke } = getMiddlewareElements(stateWithProfileRouteAndSelectedProfile);
      const action = {
        type: LOCATION_CHANGE,
        payload: {
          pathname: '/overview',
        },
      };
      invoke(action);
      expect(store.dispatch)
        .toHaveBeenCalledWith(push(`/overview/${profiles.profiles[0].id}`));
      expect(next).toHaveBeenCalledWith(action);
    });
    it('should persist existing search tring', () => {
      const { store, next, invoke } = getMiddlewareElements(stateWithProfileRouteAndSelectedProfileAndSearch);
      const action = {
        type: LOCATION_CHANGE,
        payload: {
          pathname: '/overview',
        },
      };
      invoke(action);
      expect(store.dispatch)
        .toHaveBeenCalledWith(push(`/overview/${profiles.profiles[0].id}/?foo=bar`));
      expect(next).toHaveBeenCalledWith(action);
    });
  });
});
