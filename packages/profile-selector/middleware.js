import { push, LOCATION_CHANGE } from 'react-router-redux';
import { actions as reportActions } from '@bufferapp/report-list';
import { actionTypes } from '@bufferapp/async-data-fetch';
import { actions as performanceActions } from '@bufferapp/performance-tracking';
import { actions as profilesActions, actionTypes as profileActionTypes } from './reducer';

const PROFILE_PAGES_PATH_REGEX = /(overview|posts|answers|audience)\/?(.*)$/;

const isInsightsRoute = route => route.match(PROFILE_PAGES_PATH_REGEX);

const getProfileIdFromRoute = (state) => {
  const currentRoute = state.router.location.pathname;
  const routeMatch = isInsightsRoute(currentRoute);
  let profileId = null;
  if (routeMatch) {
    profileId = routeMatch[2];
  }
  return profileId;
};

const getViewFromRoute = (path) => {
  const [
    route, // eslint-disable-line no-unused-vars
    view,
  ] = path.match(PROFILE_PAGES_PATH_REGEX);
  return view;
};

const getProfileRoute = (state, id) => {
  const view = getViewFromRoute(state.router.location.pathname);
  return `/${view}/${id}`;
};

export default ({ dispatch, getState }) => next => (action) => {
  const result = next(action);
  switch (action.type) {
    case `profiles_${actionTypes.FETCH_SUCCESS}`: {
      const profileId = getProfileIdFromRoute(getState());
      if (profileId) {
        const profile = action.result.find(p => p.id === profileId);
        dispatch(profilesActions.selectProfile(profile));
      } else if (isInsightsRoute(getState().router.location.pathname)) {
        dispatch(profilesActions.selectProfile(action.result[0]));
      }
      dispatch(performanceActions.measureFromNavigationStart({ name: 'firstMeaningfulPaint' }));
      break;
    }
    case profileActionTypes.SELECT_PROFILE: {
      const currentRoute = getState().router.location.pathname;
      if (isInsightsRoute(currentRoute)) {
        dispatch(push(getProfileRoute(getState(), action.profile.id)));
      }
      break;
    }
    case LOCATION_CHANGE:
      if (action.payload.pathname.match(/(overview|posts|answers|audience)\/?$/)) {
        let profile = null;
        if (getState().profiles.selectedProfile === null) {
          profile = getState().profiles.profiles[0];
          if (profile) {
            dispatch(profilesActions.selectProfile(profile));
          }
        } else {
          profile = getState().profiles.selectedProfile;
          if (profile) {
            dispatch(push(`${action.payload.pathname}/${profile.id}`));
          }
        }
      }
      if (action.payload.state && action.payload.state.profile) {
        const profile = action.payload.state.profile;
        dispatch(profilesActions.selectProfile(profile));
      }
      break;
    default:
      break;
  }
  return result;
};

