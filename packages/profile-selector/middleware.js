
import { push, LOCATION_CHANGE } from 'react-router-redux';
import { actions as reportActions } from '@bufferapp/report-list';
import { actionTypes } from '@bufferapp/async-data-fetch';
import { actions as performanceActions } from '@bufferapp/performance-tracking';
import { actions as profilesActions, actionTypes as profileActionTypes } from './reducer';

const INSIGHTS_PATH_REGEX = /(overview|posts|answers)\/?(.*)\/*.*$/;

const isInsightsRoute = route => route.match(INSIGHTS_PATH_REGEX);

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
  ] = path.match(INSIGHTS_PATH_REGEX);
  return view;
};

const getSearchString = (state) => {
  const search = state.router.location.search;
  return search ?
    `/${search}` :
    '';
};

const getProfileRoute = (state, id) => {
  const view = getViewFromRoute(state.router.location.pathname);
  return `/${view}/${id}${getSearchString(state)}`;
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
      if (action.payload.pathname.match(/(overview|posts|answers)\/?$/)) {
        let profile = null;
        if (getState().profiles.selectedProfile === null) {
          profile = getState().profiles.profiles[0];
          if (profile) {
            dispatch(profilesActions.selectProfile(profile));
          }
        } else {
          profile = getState().profiles.selectedProfile;
          if (profile) {
            dispatch(push(`${action.payload.pathname}/${profile.id}${getSearchString(getState())}`));
          }
        }
      }
      break;
    default:
      break;
  }
  return result;
};

