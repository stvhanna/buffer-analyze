import { actionTypes as asyncDataFetchActionTypes } from '@bufferapp/async-data-fetch';

export const actionTypes = {};

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
    default:
      return state;
  }
};

export const actions = {};
