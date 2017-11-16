import { actionTypes as fetchActions } from '@bufferapp/async-data-fetch';

export const actionTypes = {
  SELECT_PROFILE: 'SELECT_PROFILE',
  SELECT_PROFILE_SERVICE: 'SELECT_PROFILE_SERVICE',
  FILTER_PROFILES: 'FILTER_PROFILES',
  OPEN_DROPDOWN: 'OPEN_DROPDOWN',
  CLOSE_DROPDOWN: 'CLOSE_DROPDOWN',
};

const initialState = {
  profiles: [],
  isDropdownOpen: false,
  profilesFilterString: '',
  selectedProfileService: '',
  selectedProfileId: '',
  loading: true,
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
        selectedProfileId: action.id,
        selectedProfileService: action.profileService || state.selectedProfileService,
      });
    case actionTypes.SELECT_PROFILE_SERVICE:
      return {
        ...state,
        selectedProfileService: action.profileService,
        selectedProfileId: state.selectedProfileId,
      };
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
  selectProfile(id, profileService = null) {
    return {
      type: actionTypes.SELECT_PROFILE,
      id,
      profileService,
    };
  },
  selectProfileService(profileService = null) {
    return {
      type: actionTypes.SELECT_PROFILE_SERVICE,
      profileService,
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

