import { actionTypes as fetchActions } from '@bufferapp/async-data-fetch';

import keyWrapper from '@bufferapp/keywrapper';

export const actionTypes = keyWrapper('PROFILE_SELECTOR', {
  SELECT_PROFILE: 'SELECT_PROFILE',
  FILTER_PROFILES: 'FILTER_PROFILES',
  OPEN_DROPDOWN: 'OPEN_DROPDOWN',
  CLOSE_DROPDOWN: 'CLOSE_DROPDOWN',
});

const initialState = {
  profiles: [],
  isDropdownOpen: false,
  profilesFilterString: '',
  selectedProfile: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case `profiles_${fetchActions.FETCH_SUCCESS}`:
      return Object.assign({}, state, {
        profiles: action.result,
        // selectedProfile: state.selectedProfile || action.result[0],
      });
    case actionTypes.FILTER_PROFILES:
      return Object.assign({}, state, {
        profilesFilterString: action.filterString,
      });
    case actionTypes.SELECT_PROFILE:
      return Object.assign({}, state, {
        profilesFilterString: '',
        isDropdownOpen: false,
        selectedProfile: action.profile,
        selectedProfileId: action.profile.id,
        selectedProfileService: action.profile.service,
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
  selectProfile(profile) {
    return {
      type: actionTypes.SELECT_PROFILE,
      profile,
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

