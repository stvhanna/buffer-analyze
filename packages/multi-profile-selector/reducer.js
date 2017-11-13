import { actionTypes as fetchActions } from '@bufferapp/async-data-fetch';

export const actionTypes = {
  TOGGLE_PROFILE: 'TOGGLE_PROFILE',
  FILTER_PROFILES: 'FILTER_PROFILES',
  OPEN_DROPDOWN: 'OPEN_DROPDOWN',
  CLOSE_DROPDOWN: 'CLOSE_DROPDOWN',
};

const initialState = {
  profiles: [],
  isDropdownOpen: false,
  profilesFilterString: '',
  selectedProfiles: [],
};

function updatedSelectedProfiles(profileId, selectedProfiles) {
  return selectedProfiles;
}

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
    case actionTypes.TOGGLE_PROFILE:
      return Object.assign({}, state, {
        profilesFilterString: '',
        selectedProfiles: updatedSelectedProfiles(action.id, state.selectedProfiles),
      });
    case actionTypes.COMPARE_PROFILES:
      return Object.assign({}, state, {
        isDropdownOpen: false,
        selectedProfiles: state.selectedProfiles,
      });
    case `profiles_${actionTypes.OPEN_DROPDOWN}`:
      return Object.assign({}, state, {
        isDropdownOpen: true,
      });
    case `profiles_${actionTypes.CLOSE_DROPDOWN}`:
      return Object.assign({}, state, {
        isDropdownOpen: false,
      });
    default:
      return state;
  }
};

export const actions = {
  toggleProfile(id, profileService = null) {
    return {
      type: actionTypes.TOGGLE_PROFILE,
      id,
      profileService,
    };
  },
  compareProfiles(selectedProfiles) {
    return {
      type: actionTypes.COMPARE_PROFILES,
      selectedProfiles,
    };
  },
  openDropdown() {
    return {
      type: `profiles_${actionTypes.OPEN_DROPDOWN}`,
    };
  },
  closeDropdown() {
    return {
      type: `profiles_${actionTypes.CLOSE_DROPDOWN}`,
    };
  },
  filterProfilesByUsername({ target }) {
    return {
      type: actionTypes.FILTER_PROFILES,
      filterString: target ? target.value.toLowerCase() : '',
    };
  },
};

