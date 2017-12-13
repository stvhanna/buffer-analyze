import { actions } from '@bufferapp/async-data-fetch';
import { actionTypes as profileActionTypes } from '@bufferapp/analyze-profile-selector';
import { actionTypes as dateActionTypes } from '@bufferapp/analyze-date-picker';
import { actionTypes as exportActionTypes, actions as exportActions } from '@bufferapp/analyze-png-export';
import { actionTypes as exportCSVActionTypes, actions as exportCSVActions } from '@bufferapp/analyze-csv-export';

const formatDataForCSVExport = ({ metrics }) => {
  const data = {};
  metrics.forEach((metric) => {
    data[metric.label] = metric.value;
  });
  return data;
};

export default store => next => (action) => { // eslint-disable-line no-unused-vars
  const { dispatch, getState } = store;
  switch (action.type) {
    case exportCSVActionTypes.EXPORT_TO_CSV_START:
      dispatch(exportCSVActions.exportChart('posts-summary', formatDataForCSVExport(getState().postsSummary)));
      break;
    case exportActionTypes.EXPORT_TO_PNG_START:
      dispatch(exportActions.exportChart('js-dom-to-png-posts-summary', 'posts-summary'));
      break;
    case profileActionTypes.SELECT_PROFILE:
      dispatch(actions.fetch({
        name: 'posts_summary',
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
        name: 'posts_summary',
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
