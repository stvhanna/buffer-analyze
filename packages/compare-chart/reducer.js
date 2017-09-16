import { actionTypes as asyncDataFetchActionTypes } from '@bufferapp/async-data-fetch';

export const actionTypes = {
  SELECT_METRIC: 'SELECT_METRIC',
  TOGGLE_DROPDOWN: 'TOGGLE_DROPDOWN',
  TOGGLE_PREVIOUS_PERIOD: 'TOGGLE_PREVIOUS_PERIOD',
};

const initialState = {
  isDropdownOpen: false,
  loading: true,
  metrics: { totals: [], daily: [] },
  selectedMetricLabel: '',
  visualizePreviousPeriod: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case `compare_${asyncDataFetchActionTypes.FETCH_START}`:
      return initialState;
    case `compare_${asyncDataFetchActionTypes.FETCH_SUCCESS}`:
      return {
        ...state,
        loading: false,
        metrics: action.result,
      };
    case actionTypes.SELECT_METRIC:
      return Object.assign({}, state, {
        isDropdownOpen: false,
        selectedMetricLabel: action.metricLabel,
      });
    case actionTypes.TOGGLE_DROPDOWN:
      return Object.assign({}, state, {
        isDropdownOpen: !state.isDropdownOpen,
      });
    default:
      return state;
  }
};

export const actions = {
  togglePreviousPeriod() {
    return {
      type: actionTypes.TOGGLE_DROPDOWN,
    };
  },
  toggleDropdown() {
    return {
      type: actionTypes.TOGGLE_DROPDOWN,
    };
  },
  selectMetric({ metricLabel }) {
    return {
      type: actionTypes.SELECT_METRIC,
      metricLabel,
    };
  },
};
