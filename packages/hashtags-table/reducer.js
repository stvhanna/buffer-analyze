import { actionTypes as asyncDataFetchActionTypes } from '@bufferapp/async-data-fetch';
import { actionTypes as profileActionTypes } from '@bufferapp/analyze-profile-selector';

import keyWrapper from '@bufferapp/keywrapper';

export const actionTypes = keyWrapper('HASHTAGS_TABLE', {
  SORT_BY: 'SORT_BY',
});

const initialState = {
  hashtags: [],
  labels: [],
  loading: true,
  numToShow: 5,
  sortBy: 'primary_metric',
  isDescending: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case `hashtags_${asyncDataFetchActionTypes.FETCH_START}`:
      return {
        ...initialState,
        activePostsCount: parseInt(state.activePostsCount, 10),
        selectedMetric: state.selectedMetric,
        isDescending: state.isDescending,
      };
    case `hashtags_${asyncDataFetchActionTypes.FETCH_SUCCESS}`:
      return {
        ...state,
        loading: false,
        hashtags: action.result.hashtags,
        labels: action.result.labels,
      };
    case profileActionTypes.SELECT_PROFILE:
      return {
        ...initialState,
      };
    case actionTypes.SORT_BY:
      return {
        ...state,
        isDescending: action.isDescending,
        sortBy: action.sortBy,
      };
    default:
      return state;
  }
};

export const actions = {
  sortBy(metricKey, isDescending) {
    return {
      type: actionTypes.SORT_BY,
      isDescending,
      sortBy: metricKey,
    };
  },
};
