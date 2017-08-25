import { actionTypes, actions as asyncDataFetchActions } from '@bufferapp/async-data-fetch';
import { actions as profilesActions } from '@bufferapp/analyze-profile-selector';

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
        // needed to avoid select profile from beeing called before we have the 
        // profiles colleaction ready in ProfileSelector
        // Probably we should move all the fetch to ProfileSelector
        setTimeout(() => {
          dispatch(profilesActions.selectProfile(getProfileIdFromRoute(getState())));
        }, 10);
      }
      break;
    default:
      break;
  }
  return next(action);
};
