import { actionTypes as asyncDataFetchActionTypes } from '@bufferapp/async-data-fetch';
import keyWrapper from '@bufferapp/keywrapper';

export const actionTypes = keyWrapper('HOURLY_CHART', {
  HOURLY_TOGGLE_DROPDOWN: 'HOURLY_TOGGLE_DROPDOWN',
  SELECT_METRIC: 'SELECT_METRIC',
});

const initialState = {
  loading: true,
  postsCount: [],
  metrics: [],
  dropdownOpen: false,
  selectedMetric: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.HOURLY_TOGGLE_DROPDOWN:
      return {
        ...state,
        dropdownOpen: !state.dropdownOpen,
      };
    case actionTypes.SELECT_METRIC:
      return {
        ...state,
        selectedMetric: action.metric,
      };
    case `hourly_${asyncDataFetchActionTypes.FETCH_START}`:
      return initialState;
    case `hourly_${asyncDataFetchActionTypes.FETCH_SUCCESS}`:
      return {
        ...state,
        loading: false,
        metrics: action.result.metrics,
        selectedMetric: action.result.metrics[0].label,
        postsCount: action.result.postsCount,
      };
    default:
      return state;
  }
};

export const actions = {
  toggleDropdown: () => ({
    type: actionTypes.HOURLY_TOGGLE_DROPDOWN,
  }),
  selectMetric: metric => ({
    type: actionTypes.SELECT_METRIC,
    metric,
  }),
};
