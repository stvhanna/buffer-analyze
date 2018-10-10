import keyWrapper from '@bufferapp/keywrapper';
import { actionTypes as asyncDataFetchActionTypes } from '@bufferapp/async-data-fetch';

export const actionTypes = keyWrapper('DEMOGRAPHIC_OVERVIEW', {
  SELECT_OVERVIEW_GROUP: 'SELECT_OVERVIEW_GROUP',
  OPEN_DROPDOWN: 'OPEN_DROPDOWN',
  CLOSE_DROPDOWN: 'CLOSE_DROPDOWN',
});

const initialState = {
  metrics: [],
  selectedGroup: '',
  isDropdownOpen: false,
};

function getGroupKeyFromLabel(label, metrics) {
  return metrics.find(group => group.label === label).key;
}

export default (state = initialState, action) => {
  switch (action.type) {
    case `demographic_${asyncDataFetchActionTypes.FETCH_SUCCESS}`:
      return {
        ...state,
        selectedGroup: action.result.selectedGroup,
        metrics: action.result.metrics,
      };
    case actionTypes.SELECT_OVERVIEW_GROUP:
      return Object.assign({}, state, {
        isDropdownOpen: false,
        selectedGroup: getGroupKeyFromLabel(action.label, state.metrics),
      });
    case actionTypes.OPEN_DROPDOWN:
      return Object.assign({}, state, {
        isDropdownOpen: true,
      });
    case actionTypes.CLOSE_DROPDOWN:
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
      type: actionTypes.OPEN_DROPDOWN,
    };
  },
  closeDropdown() {
    return {
      type: actionTypes.CLOSE_DROPDOWN,
    };
  },
  selectMetricsGroup(label) {
    return {
      type: actionTypes.SELECT_OVERVIEW_GROUP,
      label,
    };
  },
};
