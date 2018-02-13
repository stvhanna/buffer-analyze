import { LOCATION_CHANGE } from 'react-router-redux';
import { actions } from '@bufferapp/async-data-fetch';
import { actionTypes as dateActionTypes } from '@bufferapp/analyze-date-picker';
import { actionTypes } from './reducer';
import PDFFormatter from './PDFFormatter';

export const DIRECTION_UP = 'up';
export const DIRECTION_DOWN = 'down';

const getReportId = (pathname) => {
  const routeMatch = pathname.match(/reports\/(.+)$/);
  return routeMatch ? routeMatch[1] : null;
};
const isReportDetailRoute = pathname => getReportId(pathname) !== null;
const isExportRoute = pathname => pathname.match(/export\/reports/) !== null;

export default store => next => (action) => { // eslint-disable-line no-unused-vars
  const state = store.getState();
  let formatter;
  switch (action.type) {
    case dateActionTypes.SET_DATE_RANGE:
      if (!isExportRoute(state.router.location.pathname)) {
        store.dispatch(actions.fetch({
          name: 'get_report',
          args: {
            _id: getReportId(state.router.location.pathname),
            startDate: action.startDate,
            endDate: action.endDate,
          },
        }));
      }
      break;
    case LOCATION_CHANGE:
      if (isReportDetailRoute(action.payload.pathname)) {
        store.dispatch(actions.fetch({
          name: 'get_report',
          args: {
            _id: getReportId(action.payload.pathname),
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
    case actionTypes.PARSE_PAGE_BREAKS:
      formatter = new PDFFormatter(document.getElementById('report-page'));
      formatter.formatPage();
      break;
    default:
      break;
  }
  return next(action);
};
