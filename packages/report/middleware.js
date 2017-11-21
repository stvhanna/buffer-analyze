import { actions, actionTypes as asyncDataFetchActionTypes } from '@bufferapp/async-data-fetch';
import { actionTypes as dateActionTypes } from '@bufferapp/analyze-date-picker';
import { actionTypes as listActionTypes } from '@bufferapp/report-list';
import { actionTypes } from './reducer';

export const DIRECTION_UP = 'up';
export const DIRECTION_DOWN = 'down';

const getReport = (reportId, state) =>
  state.reportList.reports.find(report => report._id === reportId);

const addProfileInformationToCharts = (charts, state) =>
  charts.map(chart => ({
    ...chart,
    profile: state.profiles.profiles.find(profile =>
      profile.id === chart.profile_id),
  }));

const addProfileServiceToReportsCharts = (report, state) =>
  ({
    ...report,
    charts: report.charts.map(chart => ({
      ...chart,
      service: state.profiles.profiles.find(profile =>
        profile.id === chart.profile_id).service,
    })),
  });

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
    case listActionTypes.VIEW_REPORT:
      store.dispatch(actions.fetch({
        name: 'get_report',
        args: {
          ...addProfileServiceToReportsCharts(
            getReport(action.id, store.getState()),
            store.getState(),
          ),
          startDate: store.getState().date.startDate,
          endDate: store.getState().date.endDate,
        },
      }));
      break;
    case actionTypes.SAVE_CHANGES:
      store.dispatch(actions.fetch({
        name: 'update_report',
        args: {
          ...store.getState().report,
          name: action.name,
        },
      }));
      break;
    case actionTypes.MOVE_CHART_UP:
      store.dispatch(actions.fetch({
        name: 'move_chart',
        args: {
          direction: DIRECTION_UP,
          chartId: action.id,
          reportId: store.getState().report.id,
        },
      }));
      break;
    case actionTypes.MOVE_CHART_DOWN:
      store.dispatch(actions.fetch({
        name: 'move_chart',
        args: {
          direction: DIRECTION_DOWN,
          chartId: action.id,
          reportId: store.getState().report.id,
        },
      }));
      break;
    default:
      break;
  }
  return next(action);
};
