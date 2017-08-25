import { actionTypes as fetchActions } from '@bufferapp/async-data-fetch';
import reducer, { actions, actionTypes } from './reducer';
import mockProfiles from './mocks/profiles';

describe('reducer', () => {
  const initialState = {
    profiles: [],
    isDropdownOpen: false,
  };

  it('should initialize default state', () => {
    expect(reducer(undefined, { type: 'INIT' }))
      .toEqual(initialState);
  });

  it('should update the profiles on fetch', () => {
    const action = {
      type: `profiles_${fetchActions.FETCH_SUCCESS}`,
      result: mockProfiles,
    };

    expect(reducer(initialState, action))
      .toEqual({
        profiles: mockProfiles,
        isDropdownOpen: false,
      });
  });

  it('should open the dropdown', () => {
    expect(reducer({
      isDropdownOpen: false,
    }, {
      type: actionTypes.TOGGLE_DROPDOWN,
    }))
      .toEqual({ isDropdownOpen: true });
  });

  it('should close the dropdown', () => {
    expect(reducer({
      isDropdownOpen: true,
    }, {
      type: actionTypes.TOGGLE_DROPDOWN,
    }))
      .toEqual({ isDropdownOpen: false });
  });
});

describe('actions', () => {
  it('should select a profile', () => {
    expect(actions.selectProfile(42))
      .toEqual({
        type: actionTypes.SELECT_PROFILE,
        id: 42,
      });
  });

  it('should toggle the dropdown', () => {
    expect(actions.toggleDropdown())
      .toEqual({
        type: actionTypes.TOGGLE_DROPDOWN,
      });
  });
});
