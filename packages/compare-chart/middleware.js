import moment from 'moment-timezone';
import { actions } from '@bufferapp/async-data-fetch';
import { actionTypes as profileActionTypes } from '@bufferapp/analyze-profile-selector';
import { actionTypes as dateActionTypes } from '@bufferapp/analyze-date-picker';
import { actionTypes as exportActionTypes, actions as exportActions } from '@bufferapp/analyze-png-export';
import { actionTypes as exportCSVActionTypes, actions as exportCSVActions } from '@bufferapp/analyze-csv-export';

const getSelectedProfileTimezone = (profiles, selectedProfileId) => {
  const profile = profiles.find(p => p.id === selectedProfileId);
  return profile.timezone;
};

const getSelectedDailyValue = ({ metrics }, selectedMetricLabel) =>
  metrics.find(m => m.label === selectedMetricLabel).value;

const formatDataForCSVExport = (
    { selectedMetricLabel, metrics }, { profiles, selectedProfileId },
  ) => {
  const data = {
    date: [],
    [selectedMetricLabel]: [],
  };
  const timezone = getSelectedProfileTimezone(profiles, selectedProfileId);
  metrics.daily.forEach((dailyMetric) => {
    const value = getSelectedDailyValue(dailyMetric, selectedMetricLabel);
    const day = dailyMetric.day;
    data[selectedMetricLabel].push(value);
    data.date.push(moment(day, 'x').tz(timezone).format('MM/DD/YYYY'));
  });
  return data;
};

const getFilename = service =>
  (service === 'twitter' ? 'engagements-audience' : 'metrics-breakdown');

export default store => next => (action) => { // eslint-disable-line no-unused-vars
  const { dispatch, getState } = store;
  const { selectedProfileService } = getState().profiles;
  const exportFilename = getFilename(selectedProfileService);
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
    case exportCSVActionTypes.EXPORT_TO_CSV_START:
      dispatch(
        exportCSVActions.exportChart(
          exportFilename,
          formatDataForCSVExport(getState().compare, getState().profiles),
        ),
      );
      break;
    case exportActionTypes.EXPORT_TO_PNG_START:
      dispatch(exportActions.exportChart('js-dom-to-png-compare', exportFilename));
      break;
    default:
      break;
  }
  return next(action);
};

