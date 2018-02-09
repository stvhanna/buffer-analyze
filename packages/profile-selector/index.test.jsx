import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureMockStore from 'redux-mock-store';

import ProfileSelector, {
  reducer,
  actions,
  actionTypes,
} from './index';

configure({ adapter: new Adapter() });
describe('ProfileSelector', () => {
  let profiles = [];
  let state = {};

  beforeEach(() => {
    profiles = [
      {
        id: '1',
        avatarUrl: '',
        service: 'twitter',
        selected: false,
        username: 'fooBar',
      },
      {
        id: '2',
        avatarUrl: '',
        service: 'twitter',
        selected: false,
        username: 'bar',
      },
      {
        id: '3',
        avatarUrl: '',
        service: 'facebook',
        selected: false,
        username: 'foo',
      },
    ];
    state = {
      profiles: {
        profiles,
        isDropdownOpen: false,
        selectedProfile: {
          id: '1',
          service: 'twitter',
        },
      },
    };
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

  it('should dispatch', () => {
    const mockStore = configureMockStore();
    const store = mockStore(state);

    const component = shallow(<ProfileSelector
      store={store}
    />);

    expect(component.props().selectProfile({
      id: 'foo',
      service: 'bar',
    })).toEqual({
      profile: {
        id: 'foo',
        service: 'bar',
      },
      type: actionTypes.SELECT_PROFILE,
    });

    expect(component.props().openDropdown({
    })).toEqual({
      type: `profiles_${actionTypes.OPEN_DROPDOWN}`,
    });

    expect(component.props().closeDropdown({
    })).toEqual({
      type: `profiles_${actionTypes.CLOSE_DROPDOWN}`,
    });

    expect(component.props().onSearchChange({
    })).toEqual({
      type: actionTypes.FILTER_PROFILES,
      filterString: '',
    });
  });
});
