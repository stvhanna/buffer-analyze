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
      selectedProfileId: '',
      selectedProfileService: '',
    };
  });


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
        profilesFilterString: '',
        selectedProfileId: '',
        selectedProfileService: '',
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

  it('should clear profilesFilterString on SELECT_PROFILE', () => {
    const state = reducer(Object.assign({}, initialState, { profilesFilterString: 'foo' }), {
      type: actionTypes.SELECT_PROFILE,
    });
    expect(state.profilesFilterString)
      .toBe('');
  });

  it('should close dropdown on SELECT_PROFILE', () => {
    const state = reducer(Object.assign({}, initialState, { isDropdownOpen: true }), {
      type: actionTypes.SELECT_PROFILE,
    });
    expect(state.isDropdownOpen)
      .toBeFalsy();
  });

  it('should update selected Profile info on SELECT_PROFILE', () => {
    const selectedProfileId = '1234foo';
    const state = reducer(Object.assign({}, initialState), {
      type: actionTypes.SELECT_PROFILE,
      id: selectedProfileId,
      profileService: 'foo',
    });
    expect(state.selectedProfileId)
      .toBe(selectedProfileId);
    expect(state.selectedProfileService)
      .toBe('foo');
  });

  it('should not update the profileService if not provided', () => {
    const selectedProfileId = '1234foo';
    const state = reducer(Object.assign({}, initialState, { selectedProfileService: 'bar' }), {
      type: actionTypes.SELECT_PROFILE,
      id: selectedProfileId,
    });
    expect(state.selectedProfileId)
      .toBe(selectedProfileId);
    expect(state.selectedProfileService)
      .toBe('bar');
  });

  it('should open the dropdown', () => {
    expect(reducer({
      isDropdownOpen: false,
    }, {
      type: `profiles_${actionTypes.OPEN_DROPDOWN}`,
    }))
      .toEqual({ isDropdownOpen: true });
  });

  it('should close the dropdown', () => {
    expect(reducer({
      isDropdownOpen: true,
    }, {
      type: `profiles_${actionTypes.CLOSE_DROPDOWN}`,
    }))
      .toEqual({ isDropdownOpen: false });
  });
});

describe('actions', () => {
  it('should select a profile', () => {
    expect(actions.selectProfile(42, 'foo'))
      .toEqual({
        type: actionTypes.SELECT_PROFILE,
        id: 42,
        profileService: 'foo',
      });
  });

  it('should select a profile without changing the service', () => {
    expect(actions.selectProfile(42))
      .toEqual({
        type: actionTypes.SELECT_PROFILE,
        id: 42,
        profileService: null,
      });
  });

  it('should open the dropdown', () => {
    expect(actions.openDropdown())
      .toEqual({
        type: `profiles_${actionTypes.OPEN_DROPDOWN}`,
      });
  });

  it('should close the dropdown', () => {
    expect(actions.closeDropdown())
      .toEqual({
        type: `profiles_${actionTypes.CLOSE_DROPDOWN}`,
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
});
