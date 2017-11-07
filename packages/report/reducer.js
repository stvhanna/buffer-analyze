import { actionTypes as asyncDataFetchActionTypes } from '@bufferapp/async-data-fetch';

export const actionTypes = {};

const initialState = {
  loading: true,
  charts: [],
  name: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case `get_report_${asyncDataFetchActionTypes.FETCH_START}`:
      return {
        ...initialState,
        name: action.args.name,
      };
    case `get_report_${asyncDataFetchActionTypes.FETCH_SUCCESS}`:
      return {
        ...state,
        charts: action.result,
        loading: false,
      };
    default:
      return state;
  }
};

export const actions = {};
