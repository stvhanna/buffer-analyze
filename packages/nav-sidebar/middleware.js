import { push } from 'react-router-redux';
import { actionTypes, actions as asyncDataFetchActions } from '@bufferapp/async-data-fetch';
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
  const [route, service, profileId] = path.match(/insights\/(\w+)\/(\w+)/); // eslint-disable-line no-unused-vars
  return {
    service,
    profileId,
  };
};


const getProfileRoute = (state, id) => {
  const { service } = getRouteParams(state.router.location.pathname);
  return `/insights/${service}/${id}`;
};

export default ({ dispatch, getState }) => next => (action) => {
  switch (action.type) {
    case `login_${actionTypes.FETCH_SUCCESS}`:
      dispatch(asyncDataFetchActions.fetch({
        name: 'profiles',
      }));
      break;
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
