import { actionTypes } from '@bufferapp/async-data-fetch';
import { push } from 'react-router-redux';
import { actions as profilesActions, actionTypes as profileActionTypes } from './reducer';

const INSIGHTS_PATH_REGEX = /insights\/(\w+)\/(\w+)\/(.*)$/;

const filterProfilesByService = (profiles, service) => (
  profiles.filter(p => p.service === service)
);

const getRouteParams = (path) => {
  const [
    route, // eslint-disable-line no-unused-vars
    service,
    profileId,
    pageRoute,
  ] = path.match(INSIGHTS_PATH_REGEX);
  return {
    service,
    profileId,
    pageRoute,
  };
};

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
    data = null;
  }
  return data;
};

const getProfileRoute = (state, id) => {
  const { service, pageRoute } = getRouteParams(state.router.location.pathname);
  return `/insights/${service}/${id}/${pageRoute}`;
};

export default ({ dispatch, getState }) => next => (action) => {
  switch (action.type) {
    case `profiles_${actionTypes.FETCH_SUCCESS}`:
      // insights
      if (getProfileIdAndServiceFromRoute(getState())) {
        dispatch(profilesActions.selectProfile(...getProfileIdAndServiceFromRoute(getState())));
      } else {
        // select the first profile
        const firstProfile = action.result[0];
        dispatch(profilesActions.selectProfile(firstProfile.id, firstProfile.service));
      }
      break;
    case profileActionTypes.SELECT_PROFILE_SERVICE: {
      const allProfiles = getState().profiles.profiles;
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
    case profileActionTypes.SELECT_PROFILE: {
      const currentRoute = getState().router.location.pathname;
      const routeMatch = currentRoute.match(INSIGHTS_PATH_REGEX);
      // if we are in Insights page then push a new url
      if (routeMatch) {
        dispatch(push(getProfileRoute(getState(), action.id)));
      }
      break;
    }
    default:
      break;
  }
  return next(action);
};

