import {
  reducer,
  actions,
  actionTypes,
  filterProfilesByService,
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
        service: 'twitter',
        selected: false,
        id: 1,
      },
      {
        service: 'twitter',
        selected: false,
        id: 2,
      },
      {
        service: 'facebook',
        selected: false,
        id: 3,
      },
    ];
  });

  it('should filter profiles by service', () => {
    expect(filterProfilesByService(profiles, 'twitter'))
      .not.toContain({
        service: 'facebook',
        selected: false,
      });
  });
});
