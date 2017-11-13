import { actions } from '@bufferapp/async-data-fetch';
import { actionTypes as profileActionTypes } from '@bufferapp/multi-profile-selector';
import { actionTypes as dateActionTypes } from '@bufferapp/analyze-date-picker';

export default store => next => (action) => { // eslint-disable-line no-unused-vars
  const { dispatch, getState } = store;
  switch (action.type) {
    case profileActionTypes.COMPARE_PROFILES: {
      console.log(action);
      const selectedProfileIds = action.selectedProfiles.map(p => p.id);
      dispatch(actions.fetch({
        name: 'audience_comparison',
        args: {
          profileId: selectedProfileIds[0],
          profileService: 'facebook',
          startDate: getState().date.startDate,
          endDate: getState().date.endDate,
        },
      }));
      break;
    }
    case dateActionTypes.SET_DATE_RANGE:
      dispatch(actions.fetch({
        name: 'audience_comparison',
        args: {
          profileId: getState().profiles.selectedProfileId,
          profileService: getState().profiles.selectedProfileService,
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

