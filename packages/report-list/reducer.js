import { actionTypes as asyncDataFetchActionTypes } from '@bufferapp/async-data-fetch';

export const actionTypes = {
  VIEW_REPORT: 'VIEW_REPORT',
  REMOVE_REPORT: 'REMOVE_REPORT',
};

const initialState = {
  reports: [],
  loading: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case `list_reports_${asyncDataFetchActionTypes.FETCH_START}`:
      return initialState;
    case `list_reports_${asyncDataFetchActionTypes.FETCH_SUCCESS}`:
      return {
        ...state,
        loading: false,
        reports: action.result,
      };
    case `remove_report_${asyncDataFetchActionTypes.FETCH_SUCCESS}`:
      return {
        ...state,
        reports: state.reports.filter(report => report._id !== action.result.id),
      };
    default:
      return state;
  }
};

export const actions = {
  viewReport: id => ({
    type: actionTypes.VIEW_REPORT,
    id,
  }),
  removeReport: id => ({
    type: actionTypes.REMOVE_REPORT,
    id,
  }),
};
