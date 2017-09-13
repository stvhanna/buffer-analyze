import { actionTypes as asyncDataFetchActionTypes } from '@bufferapp/async-data-fetch';

export const actionTypes = {};

const initialState = {
  metrics: { totals: [], daily: [] },
  loading: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case `average_${asyncDataFetchActionTypes.FETCH_START}`:
      return initialState;
    case `average_${asyncDataFetchActionTypes.FETCH_SUCCESS}`:
      return {
        ...state,
        loading: false,
        metrics: action.result,
      };
    default:
      return state;
  }
};

export const actions = {};
