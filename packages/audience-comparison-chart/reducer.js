import { actionTypes as asyncDataFetchActionTypes } from '@bufferapp/async-data-fetch';

export const actionTypes = {};

const initialState = {
  loading: true,
  profilesMetricData: [],
  profileTotals: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case `audience_comparison_${asyncDataFetchActionTypes.FETCH_START}`:
      return initialState;
    case `audience_comparison_${asyncDataFetchActionTypes.FETCH_SUCCESS}`:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
