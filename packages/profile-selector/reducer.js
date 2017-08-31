import { actionTypes as fetchActions } from '@bufferapp/async-data-fetch';

export const actionTypes = {
  SELECT_PROFILE: 'SELECT_PROFILE',
  FILTER_PROFILES: 'FILTER_PROFILE',
  TOGGLE_DROPDOWN: 'TOGGLE_DROPDOWN',
};

const initialState = {
  profiles: [],
  isDropdownOpen: false,
  profilesFilterString: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case `profiles_${fetchActions.FETCH_SUCCESS}`:
      return Object.assign({}, state, {
        profiles: action.result,
      });
    case actionTypes.FILTER_PROFILES:
      return Object.assign({}, state, {
        profilesFilterString: action.filterString,
      });
    case actionTypes.SELECT_PROFILE:
      return Object.assign({}, state, {
        profilesFilterString: '',
        isDropdownOpen: false,
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
  selectProfile(id) {
    return {
      type: actionTypes.SELECT_PROFILE,
      id,
    };
  },
  toggleDropdown() {
    return {
      type: actionTypes.TOGGLE_DROPDOWN,
    };
  },
  filterProfilesByUsername({ target }) {
    return {
      type: actionTypes.FILTER_PROFILES,
      filterString: target ? target.value.toLowerCase() : '',
    };
  },
};
