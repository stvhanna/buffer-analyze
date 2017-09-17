import { actions } from '@bufferapp/async-data-fetch';
import { actionTypes as profileActionTypes } from '@bufferapp/analyze-profile-selector';
import { actionTypes as dateActionTypes } from '@bufferapp/analyze-date-picker';

function getProfileServiceByProfileId(state, profileId) {
  const profiles = state.profiles.profiles;
  const profile = profiles.filter(p => p.id === profileId);
  return profile[0].service;
}

function getProfileServiceBySelectedProfile(state) {
  const selectedProfileId = state.profiles.selectedProfileId;
  return getProfileServiceByProfileId(state, selectedProfileId);
}

export default store => next => (action) => { // eslint-disable-line no-unused-vars
  const { dispatch, getState } = store;
  switch (action.type) {
    case profileActionTypes.SELECT_PROFILE:
      dispatch(actions.fetch({
        name: 'compare',
        args: {
          profileId: action.id,
          profileService: getProfileServiceByProfileId(getState(), action.id),
          startDate: getState().date.startDate,
          endDate: getState().date.endDate,
        },
      }));
      break;
    case dateActionTypes.SET_DATE_RANGE:
      dispatch(actions.fetch({
        name: 'compare',
        args: {
          profileId: getState().profiles.selectedProfileId,
          profileService: getProfileServiceBySelectedProfile(getState()),
          startDate: action.startDate,
          endDate: action.endDate,
        },
      }));
      break;
    default:
      break;
  }
  return next(action);
};

