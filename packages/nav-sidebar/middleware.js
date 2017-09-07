import { push } from 'react-router-redux';
import { actionTypes } from '@bufferapp/async-data-fetch';
import { actions as profilesActions, actionTypes as profileActionTypes } from '@bufferapp/analyze-profile-selector';

const getProfileIdFromRoute = (state) => {
  const currentRoute = state.router.location.pathname;
  const routeMatch = currentRoute.match(/\/insights\/.*\/(.*)/);
  let profileId;
  if (routeMatch) {
    profileId = routeMatch[1];
  } else {
    profileId = null;
  }
  return profileId;
};

const getRouteParams = (path) => {
  const [route, service, profileId, tabId] = path.match(/insights\/(\w+)\/(\w+)\/(\w+)/); // eslint-disable-line no-unused-vars
  return {
    service,
    profileId,
    tabId,
  };
};


const getProfileRoute = (state, id) => {
  const { service, tabId } = getRouteParams(state.router.location.pathname);
  return `/insights/${service}/${id}/tab/${tabId}`;
};

export default ({ dispatch, getState }) => next => (action) => {
  switch (action.type) {
    case `profiles_${actionTypes.FETCH_SUCCESS}`:
      if (getProfileIdFromRoute(getState())) {
        dispatch(profilesActions.selectProfile(getProfileIdFromRoute(getState())));
      }
      break;
    case profileActionTypes.SELECT_PROFILE:
      dispatch(push(getProfileRoute(getState(), action.id)));
      break;
    default:
      break;
  }
  return next(action);
};
