import { actionTypes as asyncDataFetchActionTypes } from '@bufferapp/async-data-fetch';

export const actionTypes = {};

const initialState = {
  loading: false,
  metrics: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case `comparison_${asyncDataFetchActionTypes.FETCH_START}`:
      return {
        ...initialState,
        loading: true,
      };
    case `comparison_${asyncDataFetchActionTypes.FETCH_SUCCESS}`:
      return {
        ...state,
        metrics: action.result,
        loading: false,
      };
    default:
      return state;
  }
};
