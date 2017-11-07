import { actions, actionTypes as asyncDataFetchActionTypes } from '@bufferapp/async-data-fetch';
import { actionTypes as dateActionTypes } from '@bufferapp/analyze-date-picker';
import { actionTypes } from '@bufferapp/report-list';

const getReport = (reportId, state) =>
  state.reportList.reports.find(report => report._id === reportId);

const addProfileInformationToCharts = (charts, state) =>
  charts.map(chart => ({
    ...chart,
    profile: state.profiles.profiles.find(profile =>
      profile.id === chart.profile_id),
  }));

export default store => next => (action) => { // eslint-disable-line no-unused-vars
  switch (action.type) {
    case `get_report_${asyncDataFetchActionTypes.FETCH_SUCCESS}`:
      action = {
        ...action,
        result: addProfileInformationToCharts(action.result, store.getState()),
      };
      break;
    case dateActionTypes.SET_DATE_RANGE:
      store.dispatch(actions.fetch({
        name: 'get_report',
        args: {
          ...store.getState().report,
          startDate: action.startDate,
          endDate: action.endDate,
        },
      }));
      break;
    case actionTypes.VIEW_REPORT:
      store.dispatch(actions.fetch({
        name: 'get_report',
        args: {
          ...getReport(action.id, store.getState()),
          startDate: store.getState().date.startDate,
          endDate: store.getState().date.endDate,
        },
      }));
      break;
    default:
      break;
  }
  return next(action);
};
