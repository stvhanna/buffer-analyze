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
      pathname: `/insights/twitter/${profileId}/overview`,
    },
  },
  profiles,
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
    };
    invoke(action);
    expect(store.dispatch).toHaveBeenCalledWith(profileActions.selectProfile(profileId, 'twitter'));
    expect(next).toHaveBeenCalledWith(action);
  });

  it('should select the first profile after fetching all the profiles if the route is not an insights route', () => {
    const { store, next, invoke } = getMiddlewareElements(stateWithoutProfileRoute);
    const action = {
      type: `profiles_${actionTypes.FETCH_SUCCESS}`,
      result: [
        {
          id: '12345',
          service: 'facebook',
          username: 'buffer',
          timezone: 'America/Los_Angeles',
        },
      ],
    };
    invoke(action);
    expect(store.dispatch).toHaveBeenCalledWith(profileActions.selectProfile('12345', 'facebook'));
    expect(next).toHaveBeenCalledWith(action);
  });

  it('should select a profile after a service is selected on side-navbar', () => {
    const { store, next, invoke } = getMiddlewareElements();
    const action = {
      type: `${profileActionTypes.SELECT_PROFILE_SERVICE}`,
      profileService: 'facebook',

    };
    invoke(action);
    expect(store.dispatch).toHaveBeenCalledWith(profileActions.selectProfile('122222222'));
    expect(next).toHaveBeenCalledWith(action);
  });

  it('should select the first profile if profileService is not specified (comparison page)', () => {
    const { store, next, invoke } = getMiddlewareElements();
    const action = {
      type: `${profileActionTypes.SELECT_PROFILE_SERVICE}`,
    };
    invoke(action);
    expect(store.dispatch).toHaveBeenCalledWith(profileActions.selectProfile('120351988a'));
    expect(next).toHaveBeenCalledWith(action);
  });

  it('should push a new route whenever a profile has been selected', () => {
    const { store, next, invoke } = getMiddlewareElements();
    const action = {
      type: profileActionTypes.SELECT_PROFILE,
      id: profileId,
    };
    invoke(action);
    expect(store.dispatch).toHaveBeenCalledWith(push(`/insights/twitter/${profileId}/overview`));
    expect(next).toHaveBeenCalledWith(action);
  });

  it('should not push a new route whenever a profile has been selected if not insights', () => {
    const { store, next, invoke } = getMiddlewareElements(stateWithoutProfileRoute);
    const action = {
      type: profileActionTypes.SELECT_PROFILE,
      id: profileId,
    };
    invoke(action);
    expect(store.dispatch).not.toHaveBeenCalledWith(push(`/insights/twitter/${profileId}/overview`));
    expect(next).toHaveBeenCalledWith(action);
  });

  it('should select a profile after a service is selected on side-navbar', () => {
    const { store, next, invoke } = getMiddlewareElements();
    const action = {
      type: `${profileActionTypes.SELECT_PROFILE_SERVICE}`,
      profileService: 'facebook',

    };
    invoke(action);
    expect(store.dispatch).toHaveBeenCalledWith(profileActions.selectProfile('122222222'));
    expect(next).toHaveBeenCalledWith(action);
  });

  it('should push a viewReport action if there is a LOCATION_CHANGE towards a report route', () => {
    const { store, next, invoke } = getMiddlewareElements();
    const action = {
      type: LOCATION_CHANGE,
      payload: {
        pathname: '/reports/report-1',
      },
    };
    invoke(action);
    expect(store.dispatch).toHaveBeenCalledWith(reportActions.viewReport('report-1'));
    expect(next).toHaveBeenCalledWith(action);
  });
});
