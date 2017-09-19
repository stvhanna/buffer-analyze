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
        selectedMetricLabel: state.selectedMetricLabel !== '' ?
          state.selectedMetricLabel :
          action.result.totals[0].label,
      };
    case `compare_${actionTypes.SELECT_METRIC}`:
      return Object.assign({}, state, {
        isDropdownOpen: false,
        selectedMetricLabel: action.metricLabel,
      });
    case `compare_${actionTypes.TOGGLE_DROPDOWN}`:
      return Object.assign({}, state, {
        isDropdownOpen: !state.isDropdownOpen,
      });
    case `compare_${actionTypes.TOGGLE_PREVIOUS_PERIOD}`:
      return Object.assign({}, state, {
        visualizePreviousPeriod: !state.visualizePreviousPeriod,
      });
    default:
      return state;
  }
};

export const actions = {
  togglePreviousPeriod() {
    return {
      type: `compare_${actionTypes.TOGGLE_PREVIOUS_PERIOD}`,
    };
  },
  toggleDropdown() {
    return {
      type: `compare_${actionTypes.TOGGLE_DROPDOWN}`,
    };
  },
  selectMetric(metricLabel) {
    return {
      type: `compare_${actionTypes.SELECT_METRIC}`,
      metricLabel,
    };
  },
};
