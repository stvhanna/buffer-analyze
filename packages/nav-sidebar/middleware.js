import { push, LOCATION_CHANGE } from 'react-router-redux';
import { actionTypes } from '@bufferapp/async-data-fetch';
import { actions as profilesActions, actionTypes as profileActionTypes } from '@bufferapp/analyze-profile-selector';
import { actions as reportActions } from '@bufferapp/report-list';

const INSIGHTS_PATH_REGEX = /insights\/(\w+)\/(\w+)\/(.*)$/;
const REPORTS_PATH_REGEX = /reports\/(.*)$/;
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
    data = false;
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
      if (getProfileIdAndServiceFromRoute(getState())) {
        dispatch(profilesActions.selectProfile(...getProfileIdAndServiceFromRoute(getState())));
      }
      break;
    case profileActionTypes.SELECT_PROFILE:
      dispatch(push(getProfileRoute(getState(), action.id)));
      break;

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
