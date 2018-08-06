import { actionTypes as fetchActions } from '@bufferapp/async-data-fetch';
import reducer, { actions, actionTypes } from './reducer';
import mockProfiles from './mocks/profiles';

describe('reducer', () => {
  let initialState = {};
  const selectedProfileId = '1234foo';

  beforeEach(() => {
    initialState = {
      profiles: [],
      isDropdownOpen: false,
      profilesFilterString: '',
      selectedProfile: null,
      loading: true,
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

    expect(reducer(initialState, action).profiles).toEqual(mockProfiles);
  });

  it('should grab the organization id from the first profile returned', () => {
    const action = {
      type: `profiles_${fetchActions.FETCH_SUCCESS}`,
      result: mockProfiles,
    };

    expect(reducer(initialState, action).organizationId)
      .toBe('organization1234');
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
      profile: {
        id: selectedProfileId,
      },
    });
    expect(state.profilesFilterString)
      .toBe('');
  });

  it('should close dropdown on SELECT_PROFILE', () => {
    const state = reducer(Object.assign({}, initialState, { isDropdownOpen: true }), {
      type: actionTypes.SELECT_PROFILE,
      profile: {
        id: selectedProfileId,
      },
    });
    expect(state.isDropdownOpen)
      .toBeFalsy();
  });

  it('should update selected Profile info on SELECT_PROFILE', () => {
    const state = reducer(Object.assign({}, initialState), {
      type: actionTypes.SELECT_PROFILE,
      profile: {
        id: selectedProfileId,
        service: 'foo',
      },
    });
    expect(state.selectedProfileId)
      .toBe(selectedProfileId);
    expect(state.selectedProfileService)
      .toBe('foo');
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
    expect(actions.selectProfile({
      id: 42,
      service: 'foo',
    }))
      .toEqual({
        type: actionTypes.SELECT_PROFILE,
        profile: {
          id: 42,
          service: 'foo',
        },
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
