import { actionTypes as fetchActions } from '@bufferapp/async-data-fetch';
import reducer, { actions, actionTypes } from './reducer';
import mockProfiles from './mocks/profiles';

describe('reducer', () => {
  let initialState = {};

  beforeEach(() => {
    initialState = {
      profiles: [],
      isDropdownOpen: false,
      profilesFilterString: '',
      selectedProfiles: [],
      isCompareProfileClicked: false,
    };
  });

  it('should initialize default state', () => {
    expect(reducer(undefined, { type: 'INIT' }))
      .toEqual(initialState);
  });

  it('should return the initial state on FETCH_START', () => {
    const action = {
      type: `profiles_${fetchActions.FETCH_START}`,
    };
    expect(reducer(initialState, action))
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
        isCompareProfileClicked: false,
        profilesFilterString: '',
        selectedProfiles: [],
      });
  });

  it('should update the profilesFilterString', () => {
    const state = reducer(initialState, {
      type: actionTypes.FILTER_PROFILES,
      filterString: 'foo',
    });
    expect(state.profilesFilterString)
      .toBe('foo');
  });

  it('should clear profilesFilterString on COMPARE_PROFILES', () => {
    const state = reducer(Object.assign({}, initialState, { profilesFilterString: 'foo' }), {
      type: actionTypes.COMPARE_PROFILES,
    });
    expect(state.profilesFilterString)
      .toBe('');
  });

  it('should close dropdown on COMPARE_PROFILES', () => {
    const state = reducer(Object.assign({}, initialState, { isDropdownOpen: true }), {
      type: actionTypes.COMPARE_PROFILES,
    });
    expect(state.isDropdownOpen)
      .toBeFalsy();
  });

  it('isCompareProfileClicked should be true on COMPARE_PROFILES', () => {
    const state = reducer(Object.assign({}, initialState), {
      type: actionTypes.COMPARE_PROFILES,
    });
    expect(state.isCompareProfileClicked)
      .toBeTruthy();
  });

  it('should toggle (ADD) selected profile on TOGGLE_PROFILE', () => {
    const selectedProfileId = 1234;
    // selectedProfiles is empty so the new profile should be added in there
    const state = reducer(Object.assign({}, initialState, {
      profiles: [{ id: 1234 }, { id: 5678 }],
    }), {
      type: actionTypes.TOGGLE_PROFILE,
      id: selectedProfileId,
    });
    expect(state.selectedProfiles)
      .toEqual([{ id: 1234 }]);
  });

  it('should toggle (REMOVE) selected profile on TOGGLE_PROFILE', () => {
    const selectedProfileId = 1234;
    // selectedProfiles contains the selected profile so we should
    // remove it from selectedProfiles
    const state = reducer(Object.assign({}, initialState, {
      profiles: [{ id: 1234 }, { id: 5678 }],
      selectedProfiles: [{ id: 1234 }],
    }), {
      type: actionTypes.TOGGLE_PROFILE,
      id: selectedProfileId,
    });
    expect(state.selectedProfiles)
      .toEqual([]);
  });

  it('should open the dropdown', () => {
    expect(reducer({
      isDropdownOpen: false,
    }, {
      type: `multiProfileSelector_${actionTypes.OPEN_DROPDOWN}`,
    }))
      .toEqual({ isDropdownOpen: true });
  });

  it('should close the dropdown', () => {
    expect(reducer({
      isDropdownOpen: true,
    }, {
      type: `multiProfileSelector_${actionTypes.CLOSE_DROPDOWN}`,
    }))
      .toEqual({ isDropdownOpen: false });
  });
});

describe('actions', () => {
  it('should compare profiles', () => {
    expect(actions.compareProfiles())
      .toEqual({
        type: actionTypes.COMPARE_PROFILES,
      });
  });

  it('should toggle profile', () => {
    expect(actions.toggleProfile(1234))
      .toEqual({
        type: actionTypes.TOGGLE_PROFILE,
        id: 1234,
      });
  });

  it('should open the dropdown', () => {
    expect(actions.openDropdown())
      .toEqual({
        type: `multiProfileSelector_${actionTypes.OPEN_DROPDOWN}`,
      });
  });

  it('should close the dropdown', () => {
    expect(actions.closeDropdown())
      .toEqual({
        type: `multiProfileSelector_${actionTypes.CLOSE_DROPDOWN}`,
      });
  });

  it('should filter by profile username', () => {
    expect(actions.filterProfilesByUsername({ target: { value: 'buf' } }))
      .toEqual({
        type: actionTypes.FILTER_PROFILES,
        filterString: 'buf',
      });
  });

  it('profilesFilterString should always be lowercase', () => {
    expect(actions.filterProfilesByUsername({ target: { value: 'Buf' } }))
      .toEqual({
        type: actionTypes.FILTER_PROFILES,
        filterString: 'buf',
      });
  });

  it('profilesFilterString should return empty string if target is not defined', () => {
    expect(actions.filterProfilesByUsername({ target: null }))
      .toEqual({
        type: actionTypes.FILTER_PROFILES,
        filterString: '',
      });
  });
});
