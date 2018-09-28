import { actions } from '@bufferapp/async-data-fetch';
import { actionTypes as profileActionTypes } from '@bufferapp/analyze-profile-selector';
import { actionTypes as dateActionTypes } from '@bufferapp/analyze-date-picker';

export default store => next => (action) => { // eslint-disable-line no-unused-vars
  const { dispatch, getState } = store;
  switch (action.type) {
    case profileActionTypes.SELECT_PROFILE:
      dispatch(actions.fetch({
        name: 'demographic',
        args: {
          profileId: action.profile.id,
          profileService: action.profile.service,
          startDate: getState().date.startDate,
          endDate: getState().date.endDate,
        },
      }));
      break;
    case dateActionTypes.SET_DATE_RANGE:
      if (getState().profiles.selectedProfileId) {
        dispatch(actions.fetch({
          name: 'demographic',
          args: {
            profileId: getState().profiles.selectedProfileId,
            profileService: getState().profiles.selectedProfileService,
            startDate: action.startDate,
            endDate: action.endDate,
          },
        }));
      }
      break;
    default:
      break;
  }
  return next(action);
};
