import { actionTypes as asyncDataFetchActionTypes } from '@bufferapp/async-data-fetch';

export const actionTypes = {
  SELECT_OVERVIEW_GROUP: 'SELECT_OVERVIEW_GROUP',
  OPEN_DROPDOWN: 'OPEN_DROPDOWN',
  CLOSE_DROPDOWN: 'CLOSE_DROPDOWN',
};

const initialState = {
  metrics: [],
  loading: true,
  selectedGroup: '',
  isDropdownOpen: false,
};

function getGroupKeyFromLabel(label, metrics) {
  return metrics.find(group => group.label === label).key;
}

export default (state = initialState, action) => {
  switch (action.type) {
    case `demographic_${asyncDataFetchActionTypes.FETCH_START}`:
      return initialState;
    case `demographic_${asyncDataFetchActionTypes.FETCH_SUCCESS}`:
      return {
        ...state,
        loading: false,
        metrics: action.result.metrics,
        selectedGroup: action.result.selectedGroup,
      };
    case `demographic_${actionTypes.SELECT_OVERVIEW_GROUP}`:
      return Object.assign({}, state, {
        isDropdownOpen: false,
        selectedGroup: getGroupKeyFromLabel(action.label, state.metrics),
      });
    case `demographic_${actionTypes.OPEN_DROPDOWN}`:
      return Object.assign({}, state, {
        isDropdownOpen: true,
      });
    case `demographic_${actionTypes.CLOSE_DROPDOWN}`:
      return Object.assign({}, state, {
        isDropdownOpen: false,
      });
    default:
      return state;
  }
};

export const actions = {
  openDropdown() {
    return {
      type: `demographic_${actionTypes.OPEN_DROPDOWN}`,
    };
  },
  closeDropdown() {
    return {
      type: `demographic_${actionTypes.CLOSE_DROPDOWN}`,
    };
  },
  selectMetricsGroup(label) {
    return {
      type: `demographic_${actionTypes.SELECT_OVERVIEW_GROUP}`,
      label,
    };
  },
};
