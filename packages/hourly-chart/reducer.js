import { actionTypes as asyncDataFetchActionTypes } from '@bufferapp/async-data-fetch';

export const actionTypes = {
  OPEN_DROPDOWN: 'OPEN_DROPDOWN',
  OPEN_SECONDARY_DROPDOWN: 'OPEN_SECONDARY_DROPDOWN',
  SHOW_SECONDARY_DROPDOWN: 'SHOW_SECONDARY_DROPDOWN',
  HIDE_SECONDARY_DROPDOWN: 'HIDE_SECONDARY_DROPDOWN',
  SELECT_METRIC: 'SELECT_METRIC',
  SELECT_SECONDARY_METRIC: 'SELECT_SECONDARY_METRIC',
};

const initialState = {
  loading: true,
  metrics: [],
  dropdownOpen: false,
  secondaryDropdownOpen: false,
  selectedMetric: null,
  selectedSecondaryMetric: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SHOW_SECONDARY_DROPDOWN:
      return {
        ...state,
        selectedSecondaryMetric: state.metrics.find(metric =>
          metric.label !== state.selectedMetric).label,
      };
    case actionTypes.HIDE_SECONDARY_DROPDOWN:
      return {
        ...state,
        selectedSecondaryMetric: null,
      };
    case actionTypes.OPEN_SECONDARY_DROPDOWN:
      return {
        ...state,
        secondaryDropdownOpen: true,
      };
    case actionTypes.SELECT_SECONDARY_METRIC:
      return {
        ...state,
        secondaryDropdownOpen: false,
        selectedSecondaryMetric: action.metric,
      };
    case actionTypes.OPEN_DROPDOWN:
      return {
        ...state,
        dropdownOpen: true,
      };
    case actionTypes.SELECT_METRIC:
      return {
        ...state,
        dropdownOpen: false,
        selectedMetric: action.metric,
      };
    case `hourly_${asyncDataFetchActionTypes.FETCH_SUCCESS}`:
      return {
        ...state,
        loading: false,
        metrics: action.metrics,
        selectedMetric: action.metrics[0].label,
      };
    default:
      return state;
  }
};

export const actions = {};
