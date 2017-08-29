import {
  reducer,
  actions,
  actionTypes,
  __filterProfilesByService,
  __filterProfilesByUsername,
  __mapStateToProps,
} from './index';

describe('ProfileSelector', () => {
  it('should export reducer', () => {
    expect(reducer)
      .toBeDefined();
  });

  it('should export actions', () => {
    expect(actions)
      .toBeDefined();
  });

  it('should export actionTypes', () => {
    expect(actionTypes)
      .toBeDefined();
  });
});

describe('ProfileSelector', () => {
  let profiles = [];

  beforeEach(() => {
    profiles = [
      {
        id: 1,
        service: 'twitter',
        selected: false,
        username: 'fooBar',
      },
      {
        id: 2,
        service: 'twitter',
        selected: false,
        username: 'bar',
      },
      {
        id: 3,
        service: 'facebook',
        selected: false,
        username: 'foo',
      },
    ];
  });

  it('should filter profiles by service', () => {
    expect(__filterProfilesByService(profiles, 'twitter'))
      .not.toContain({
        service: 'facebook',
        selected: false,
      });
  });

  it('should update the profilesFilterString', () => {
    expect(__filterProfilesByUsername(profiles, 'foo'))
      .not.toContain({
        id: 2,
        service: 'twitter',
        selected: false,
        username: 'bar',
      });
  });

  it('should use case insensitive match to filter by username');
  it('should not filter out the selectedProfile');

  it('expect mapStateToProps to filter by service and username', () => {
    const state = {
      profiles: {
        profiles,
        profilesFilterString: 'foo',
        isDropdownOpen: false,
      },
    };
    const props = __mapStateToProps(state, { profileService: 'twitter' });
    expect(props.profiles)
      .toHaveLength(1);
    expect(props.profiles[0].username)
      .toBe('fooBar');
  });
});
