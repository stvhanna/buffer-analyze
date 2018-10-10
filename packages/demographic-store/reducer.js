import { actionTypes as asyncDataFetchActionTypes } from '@bufferapp/async-data-fetch';

const initialState = {
  metrics: [],
  loading: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case `demographic_${asyncDataFetchActionTypes.FETCH_START}`:
      return initialState;
    case `demographic_${asyncDataFetchActionTypes.FETCH_SUCCESS}`:
      return {
        ...state,
        loading: false,
        metrics: action.result.metrics,
      };
    default:
      return state;
  }
};
