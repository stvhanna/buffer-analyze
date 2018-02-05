import { actionTypes as asyncDataFetchActionTypes } from '@bufferapp/async-data-fetch';

export const actionTypes = {};

const initialState = {
  loading: false,
  profilesMetricData: [],
  profileTotals: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case `comparison_${asyncDataFetchActionTypes.FETCH_START}`:
      return {
        ...initialState,
        loading: true,
      };
    case `comparison_${asyncDataFetchActionTypes.FETCH_SUCCESS}`:
      if (action.args.metric === 'reach') {
        return {
          ...state,
          profilesMetricData: action.result.profilesMetricData,
          profileTotals: action.result.profileTotals,
          loading: false,
        };
      }
      return {
        ...state,
      };
    default:
      return state;
  }
};
