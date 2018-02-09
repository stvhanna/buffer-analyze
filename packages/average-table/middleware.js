import { actions } from '@bufferapp/async-data-fetch';
import { actionTypes as profileActionTypes } from '@bufferapp/analyze-profile-selector';
import { actionTypes as dateActionTypes } from '@bufferapp/analyze-date-picker';
import { actionTypes as exportActionTypes, actions as exportActions } from '@bufferapp/analyze-png-export';
import { actionTypes as exportCSVActionTypes, actions as exportCSVActions } from '@bufferapp/analyze-csv-export';

const formatDataForCSVExport = ({ metrics }) => {
  const data = {};
  metrics.totals.forEach((metric) => {
    data[metric.label] = metric.value;
  });
  return data;
};

const EXPORT_FILENAME = 'average-performance-statistics';

export default store => next => (action) => { // eslint-disable-line no-unused-vars
  const { dispatch, getState } = store;
  switch (action.type) {
    case exportCSVActionTypes.EXPORT_TO_CSV_START:
      dispatch(
        exportCSVActions.exportChart(EXPORT_FILENAME, formatDataForCSVExport(getState().average)),
      );
      break;
    case exportActionTypes.EXPORT_TO_PNG_START:
      dispatch(exportActions.exportChart('js-dom-to-png-average', EXPORT_FILENAME));
      break;
    case profileActionTypes.SELECT_PROFILE:
      dispatch(actions.fetch({
        name: 'average',
        args: {
          profileId: action.profile.id,
          startDate: getState().date.startDate,
          endDate: getState().date.endDate,
        },
      }));
      break;
    case dateActionTypes.SET_DATE_RANGE:
      if (getState().profiles.selectedProfileId) {
        dispatch(actions.fetch({
          name: 'average',
          args: {
            profileId: getState().profiles.selectedProfileId,
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

