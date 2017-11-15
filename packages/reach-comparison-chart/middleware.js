import { actions } from '@bufferapp/async-data-fetch';
import { actionTypes as profileActionTypes } from '@bufferapp/multi-profile-selector';
import { actionTypes as dateActionTypes } from '@bufferapp/analyze-date-picker';

export default store => next => (action) => { // eslint-disable-line no-unused-vars
  const { dispatch, getState } = store;
  switch (action.type) {
    case profileActionTypes.COMPARE_PROFILES: {
      const selectedProfileIds = action.selectedProfiles.map(p => p.id);
      dispatch(actions.fetch({
        name: 'reach_comparison',
        args: {
          profileIds: selectedProfileIds,
          startDate: getState().date.startDate,
          endDate: getState().date.endDate,
        },
      }));
      break;
    }
    case dateActionTypes.SET_DATE_RANGE: {
      const selectedProfileIds = getState().multiProfileSelector.selectedProfiles.map(p => p.id);
      dispatch(actions.fetch({
        name: 'reach_comparison',
        args: {
          profileIds: selectedProfileIds,
          profileService: getState().profiles.selectedProfileService,
          startDate: action.startDate,
          endDate: action.endDate,
        },
      }));
      break;
    }
    default:
      break;
  }
  return next(action);
};

