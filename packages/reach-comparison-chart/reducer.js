import { actionTypes as asyncDataFetchActionTypes } from '@bufferapp/async-data-fetch';

export const actionTypes = {};

const initialState = {
  loading: false,
  profilesMetricData: [],
  profileTotals: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case `reach_comparison_${asyncDataFetchActionTypes.FETCH_START}`:
      return {
        ...initialState,
        loading: true,
      };
    case `reach_comparison_${asyncDataFetchActionTypes.FETCH_SUCCESS}`:
      return {
        ...state,
        profilesMetricData: action.result.profilesMetricData,
        profileTotals: action.result.profileTotals,
        loading: false,
      };
    default:
      return state;
  }
};
