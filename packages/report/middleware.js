import moment from 'moment-timezone';
import { LOCATION_CHANGE } from 'react-router-redux';
import { actions, actionTypes as asyncDataFetchActionTypes } from '@bufferapp/async-data-fetch';
import { actionTypes as dateActionTypes } from '@bufferapp/analyze-date-picker';
import { actionTypes, actions as reportActions } from './reducer';
import PDFFormatter from './PDFFormatter';

export const DIRECTION_UP = 'up';
export const DIRECTION_DOWN = 'down';

const getReportId = (pathname) => {
  const routeMatch = pathname.match(/reports\/(.+)$/);
  return routeMatch ? routeMatch[1] : null;
};
const isReportDetailRoute = pathname => getReportId(pathname) !== null;
const isRouteDifferentThanCurrentOne = (router, pathname) =>
  !router.location || router.location.pathname !== pathname;

const dateRangesDoNotMatch = (reportDate, dateRange) => (
  reportDate.startDate !== dateRange.startDate ||
  reportDate.endDate !== dateRange.endDate ||
  (dateRange.preset && reportDate.range !== dateRange.preset.range)
);

export default store => next => (action) => { // eslint-disable-line no-unused-vars
  const state = store.getState();
  let formatter;
  switch (action.type) {
    case dateActionTypes.SET_DATE_RANGE: {
      if (!state.report.loading &&
        isReportDetailRoute(state.router.location.pathname) &&
        dateRangesDoNotMatch(state.report.dateRange, action)) {
        const report = {
          ...state.report,
          dateRange: {
            range: action.preset ? action.preset.range : null,
            startDate: action.startDate,
            endDate: action.endDate,
          },
        };
        store.dispatch(reportActions.saveChanges(report));
      }
      break;
    }
    case `update_report_${asyncDataFetchActionTypes.FETCH_SUCCESS}`:
      if (!Object.is(state.report.dateRange, action.args.dateRange)) {
        store.dispatch(actions.fetch({
          name: 'get_report',
          args: {
            _id: action.result._id,
            timezone: moment.tz.guess(),
            startDate: state.date.startDate,
            endDate: state.date.endDate,
          },
        }));
      }
      break;
    case LOCATION_CHANGE:
      if (
        isReportDetailRoute(action.payload.pathname) &&
        (isRouteDifferentThanCurrentOne(state.router, action.payload.pathname))) {
        store.dispatch(actions.fetch({
          name: 'get_report',
          args: {
            _id: getReportId(action.payload.pathname),
            timezone: moment.tz.guess(),
          },
        }));
      }
      break;
    case actionTypes.SAVE_CHANGES:
      store.dispatch(actions.fetch({
        name: 'update_report',
        args: {
          id: state.report.id,
          name: action.name ? action.name : state.report.name,
          dateRange: action.dateRange ? action.dateRange : state.report.dateRange,
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
    case actionTypes.PARSE_PAGE_BREAKS:
      formatter = new PDFFormatter(document.getElementById('report-page'));
      formatter.formatPage();
      break;
    default:
      break;
  }
  return next(action);
};
