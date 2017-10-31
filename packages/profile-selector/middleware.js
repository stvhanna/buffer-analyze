import { actionTypes } from '@bufferapp/async-data-fetch';
import { actions as profilesActions, actionTypes as profileActionTypes } from './reducer';

const INSIGHTS_PATH_REGEX = /insights\/(\w+)\/(\w+)\/(.*)$/;

const filterProfilesByService = (profiles, service) => (
  profiles.filter(p => p.service === service)
);

const getProfileIdAndServiceFromRoute = (state) => {
  const currentRoute = state.router.location.pathname;
  const routeMatch = currentRoute.match(INSIGHTS_PATH_REGEX);
  let data;
  // has to match only to service
  if (routeMatch) {
    const [
      route, // eslint-disable-line no-unused-vars
      service,
      profileId,
    ] = routeMatch;
    data = [profileId, service];
  } else {
    data = false;
  }
  return data;
};

export default ({ dispatch, getState }) => next => (action) => {
  const allProfiles = getState().profiles.profiles;
  switch (action.type) {
    case `profiles_${actionTypes.FETCH_SUCCESS}`:
      // insights
      if (getProfileIdAndServiceFromRoute(getState())) {
        dispatch(profilesActions.selectProfile(...getProfileIdAndServiceFromRoute(getState())));
      } else {
        // select the first profile
        // dispatch(profilesActions.selectProfile(allProfiles[0].id));
      }
      break;
    case profileActionTypes.SELECT_PROFILE_SERVICE: {
      // if profile service is selected. E.g. Insights page
      if (action.profileService) {
        const filteredProfiles = filterProfilesByService(
          allProfiles,
          action.profileService,
        );
        dispatch(profilesActions.selectProfile(filteredProfiles[0].id));
      } else {
        // do not filter profiles & select the first one
        dispatch(profilesActions.selectProfile(allProfiles[0].id));
      }
      break;
    }
    default:
      break;
  }
  return next(action);
};

