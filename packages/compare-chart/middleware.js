import { actions } from '@bufferapp/async-data-fetch';
import { actionTypes as profileActionTypes } from '@bufferapp/analyze-profile-selector';
import { actionTypes as dateActionTypes } from '@bufferapp/analyze-date-picker';
import { actionTypes as exportActionTypes, actions as exportActions } from '@bufferapp/analyze-png-export';

function getPngTitle(service) {
  switch (service) {
    case 'twitter':
      return 'engagements-audience';
    default:
      return 'metrics-breakdown';
  }
}

export default store => next => (action) => { // eslint-disable-line no-unused-vars
  const { dispatch, getState } = store;
  switch (action.type) {
    case profileActionTypes.SELECT_PROFILE:
      dispatch(actions.fetch({
        name: 'compare',
        args: {
          profileId: action.id,
          profileService: action.profileService,
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
          profileService: getState().profiles.selectedProfileService,
          startDate: action.startDate,
          endDate: action.endDate,
        },
      }));
      break;
    case exportActionTypes.EXPORT_TO_PNG_START:
      dispatch(exportActions.exportChart(
        'js-dom-to-png-compare',
        getPngTitle(getState().profiles.selectedProfileService),
      ));
      break;
    default:
      break;
  }
  return next(action);
};

