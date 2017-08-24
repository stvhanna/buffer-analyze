import { actionTypes as fetchActions } from '@bufferapp/async-data-fetch';

export const actionTypes = {
  SELECT_PROFILE: 'SELECT_PROFILE',
  TOGGLE_DROPDOWN: 'TOGGLE_DROPDOWN',
};

const initialState = {
  profiles: [],
  isDropdownOpen: false,
};

function unselectAllProfiles(profiles) {
  return profiles.map((p) => { p.selected = false; return p; });
}

function profileWitdhIdExist(profiles, profileId) {
  return profiles.find(p => p.id === profileId);
}

function updateSelectedProfile(profiles, selectedProfileId) {
  if (profileWitdhIdExist(profiles, selectedProfileId)) {
    return unselectAllProfiles(profiles)
      .map((p) => {
        if (p.id === selectedProfileId) p.selected = true;
        return p;
      });
  }

  return profiles;
}

export default (state = initialState, action) => {
  switch (action.type) {
    case `profiles_${fetchActions.FETCH_SUCCESS}`:
      return Object.assign({}, state, {
        profiles: action.result,
      });
    case actionTypes.SELECT_PROFILE:
      return Object.assign({}, state, {
        profiles: updateSelectedProfile(state.profiles.slice(0), action.id),
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
};
