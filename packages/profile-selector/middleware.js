
import { push, LOCATION_CHANGE } from 'react-router-redux';
import { actions as reportActions } from '@bufferapp/report-list';
import { actionTypes } from '@bufferapp/async-data-fetch';
import { actions as performanceActions } from '@bufferapp/performance-tracking';
import { actions as profilesActions, actionTypes as profileActionTypes } from './reducer';


const INSIGHTS_PATH_REGEX = /insights\/(\w+)\/(\w+)\/(.*)$/;
const REPORTS_PATH_REGEX = /reports\/(.*)$/;


const filterProfilesByService = (profiles, service) => (
  profiles.filter(p => p.service === service)
);

const getProfileIdAndServiceFromRoute = (state) => {
  const currentRoute = state.router.location.pathname;
  const routeMatch = currentRoute.match(INSIGHTS_PATH_REGEX);
  let data;
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
      }
      dispatch(performanceActions.measureFromNavigationStart({ name: 'firstMeaningfulPaint' }));
      break;
    case profileActionTypes.SELECT_PROFILE_SERVICE: {
      const allProfiles = getState().profiles.profiles;
      // if profile service is selected. E.g. Insights page
      if (action.profileService) {
        const filteredProfiles = filterProfilesByService(
          allProfiles,
          action.profileService,
        );
        dispatch(profilesActions.selectProfile(filteredProfiles[0].id, action.profileService));
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
    case LOCATION_CHANGE:
      if (action.payload.pathname.match(REPORTS_PATH_REGEX)) {
        dispatch(reportActions.viewReport(action.payload.pathname.match(REPORTS_PATH_REGEX)[1]));
      }
      break;
    default:
      break;
  }
  return next(action);
};

