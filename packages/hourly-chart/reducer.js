import { actionTypes as asyncDataFetchActionTypes } from '@bufferapp/async-data-fetch';

export const actionTypes = {
  HOURLY_TOGGLE_DROPDOWN: 'HOURLY_TOGGLE_DROPDOWN',
  HOURLY_TOGGLE_SECONDARY_DROPDOWN: 'HOURLY_TOGGLE_SECONDARY_DROPDOWN',
  SHOW_SECONDARY_DROPDOWN: 'SHOW_SECONDARY_DROPDOWN',
  HIDE_SECONDARY_DROPDOWN: 'HIDE_SECONDARY_DROPDOWN',
  SELECT_METRIC: 'SELECT_METRIC',
  SELECT_SECONDARY_METRIC: 'SELECT_SECONDARY_METRIC',
};

const initialState = {
  loading: true,
  postsCount: [],
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
    case actionTypes.HOURLY_TOGGLE_SECONDARY_DROPDOWN:
      return {
        ...state,
        secondaryDropdownOpen: !state.secondaryDropdownOpen,
      };
    case actionTypes.SELECT_SECONDARY_METRIC:
      return {
        ...state,
        selectedSecondaryMetric: action.metric,
      };
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
  showSecondaryDropdown: () => ({
    type: actionTypes.SHOW_SECONDARY_DROPDOWN,
  }),
  hideSecondaryDropdown: () => ({
    type: actionTypes.HIDE_SECONDARY_DROPDOWN,
  }),
  toggleDropdown: () => ({
    type: actionTypes.HOURLY_TOGGLE_DROPDOWN,
  }),
  toggleSecondaryDropdown: () => ({
    type: actionTypes.HOURLY_TOGGLE_SECONDARY_DROPDOWN,
  }),
  selectMetric: metric => ({
    type: actionTypes.SELECT_METRIC,
    metric,
  }),
  selectSecondaryMetric: metric => ({
    type: actionTypes.SELECT_SECONDARY_METRIC,
    metric,
  }),
};
