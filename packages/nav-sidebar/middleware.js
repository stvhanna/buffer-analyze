import { actionTypes, actions as asyncDataFetchActions } from '@bufferapp/async-data-fetch';
import { actions } from './reducer';

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

export default ({ dispatch, getState }) => next => (action) => {
  switch (action.type) {
    case `login_${actionTypes.FETCH_SUCCESS}`:
      dispatch(asyncDataFetchActions.fetch({
        name: 'profiles',
      }));
      break;
    case `profiles_${actionTypes.FETCH_SUCCESS}`:
      if (getProfileIdFromRoute(getState())) {
        dispatch(actions.selectProfile(getProfileIdFromRoute(getState())));
      }
      break;
    default:
      break;
  }
  return next(action);
};
