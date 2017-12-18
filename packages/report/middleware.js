import { actions, actionTypes as asyncDataFetchActionTypes } from '@bufferapp/async-data-fetch';
import { actionTypes as dateActionTypes } from '@bufferapp/analyze-date-picker';
import { actionTypes as listActionTypes } from '@bufferapp/report-list';
import { actionTypes } from './reducer';

export const DIRECTION_UP = 'up';
export const DIRECTION_DOWN = 'down';

const getReportId = (pathname) => {
  const routeMatch = pathname.match(/reports\/(.+)$/);
  return routeMatch ? routeMatch[1] : null;
};
const isReportDetailRoute = pathname => getReportId(pathname) !== null;

const getReport = (reportId, reports) =>
  reports.find(report => report._id === reportId);

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
  const state = store.getState();
  switch (action.type) {
    case `get_report_${asyncDataFetchActionTypes.FETCH_SUCCESS}`:
      action = {
        ...action,
        result: addProfileInformationToCharts(action.result, state),
      };
      break;
    case dateActionTypes.SET_DATE_RANGE:
      store.dispatch(actions.fetch({
        name: 'get_report',
        args: {
          ...state.report,
          startDate: action.startDate,
          endDate: action.endDate,
        },
      }));
      break;
    case `list_reports_${asyncDataFetchActionTypes.FETCH_SUCCESS}`:
      if (isReportDetailRoute(state.router.location.pathname)) {
        store.dispatch(actions.fetch({
          name: 'get_report',
          args: {
            ...addProfileServiceToReportsCharts(
              getReport(getReportId(state.router.location.pathname), action.result),
              state,
            ),
            startDate: state.date.startDate,
            endDate: state.date.endDate,
          },
        }));
      }
      break;
    case listActionTypes.VIEW_REPORT:
      const report = getReport(action.id, state.reportList.reports);
      if (report) {
        store.dispatch(actions.fetch({
          name: 'get_report',
          args: {
            ...addProfileServiceToReportsCharts(report, state),
            startDate: state.date.startDate,
            endDate: state.date.endDate,
          },
        }));
      }
      break;
    case actionTypes.SAVE_CHANGES:
      store.dispatch(actions.fetch({
        name: 'update_report',
        args: {
          ...state.report,
          name: action.name,
        },
      }));
      break;
    case actionTypes.MOVE_CHART_UP:
      store.dispatch(actions.fetch({
        name: 'move_chart',
        args: {
          direction: DIRECTION_UP,
          chartId: action.chartId,
          reportId: state.report.id,
        },
      }));
      break;
    case actionTypes.MOVE_CHART_DOWN:
      store.dispatch(actions.fetch({
        name: 'move_chart',
        args: {
          direction: DIRECTION_DOWN,
          chartId: action.chartId,
          reportId: state.report.id,
        },
      }));
      break;
    case actionTypes.DELETE_CHART:
      store.dispatch(actions.fetch({
        name: 'delete_chart',
        args: {
          chartId: action.chartId,
          reportId: state.report.id,
        },
      }));
      break;
    default:
      break;
  }
  return next(action);
};
