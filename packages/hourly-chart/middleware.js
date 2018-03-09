import moment from 'moment';
import { actions } from '@bufferapp/async-data-fetch';
import { actionTypes as profileActionTypes } from '@bufferapp/analyze-profile-selector';
import { actionTypes as dateActionTypes } from '@bufferapp/analyze-date-picker';
import { actionTypes as exportCSVActionTypes, actions as exportCSVActions } from '@bufferapp/analyze-csv-export';

const EXPORT_FILENAME = 'hourly-engagements';

const formatDataForCSVExport = ({ metrics, selectedMetric }) => {
  const data = {
    hour: [],
    [selectedMetric]: [],
  };
  const { hourlyMetrics } = metrics.find(metric => metric.label === selectedMetric);
  const hour = moment().startOf('day');
  hourlyMetrics.forEach((metric) => {
    data[selectedMetric].push(metric);
    data.hour.push(hour.format('h A'));
    hour.add(1, 'hour');
  });
  return data;
};

export default store => next => (action) => { // eslint-disable-line no-unused-vars
  const { dispatch, getState } = store;
  switch (action.type) {
    case exportCSVActionTypes.EXPORT_TO_CSV_START:
      dispatch(
        exportCSVActions.exportChart(EXPORT_FILENAME, formatDataForCSVExport(getState().hourly)),
      );
      break;
    case dateActionTypes.SET_DATE_RANGE:
      if (getState().profiles.selectedProfileId) {
        dispatch(actions.fetch({
          name: 'hourly',
          args: {
            profileId: getState().profiles.selectedProfileId,
            startDate: action.startDate,
            endDate: action.endDate,
          },
        }));
      }
      break;
    case profileActionTypes.SELECT_PROFILE:
      dispatch(actions.fetch({
        name: 'hourly',
        args: {
          profileId: action.profile.id,
          startDate: getState().date.startDate,
          endDate: getState().date.endDate,
        },
      }));
      break;
    default:
      break;
  }
  return next(action);
};
