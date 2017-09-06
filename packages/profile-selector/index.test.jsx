import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';

import ProfileSelector, {
  reducer,
  actions,
  actionTypes,
} from './index';

describe('ProfileSelector', () => {
  let profiles = [];

  beforeEach(() => {
    profiles = [
      {
        id: 1,
        avatarUrl: '',
        service: 'twitter',
        selected: false,
        username: 'fooBar',
      },
      {
        id: 2,
        avatarUrl: '',
        service: 'twitter',
        selected: false,
        username: 'bar',
      },
      {
        id: 3,
        avatarUrl: '',
        service: 'facebook',
        selected: false,
        username: 'foo',
      },
    ];
  });

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

  it('should filter profiles by service', () => {
    const mockStore = configureMockStore();
    const state = {
      profiles: {
        profiles,
        isDropdownOpen: false,
      },
    };
    const store = mockStore(state);

    const component = shallow(<ProfileSelector
      store={store}
      profileService={'twitter'}
    />);

    expect(component.props().profiles)
      .toHaveLength(2);
  });
});
