import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureMockStore from 'redux-mock-store';
import MultiProfileSelector, {
  reducer,
  actions,
  actionTypes,
} from './index';
import MultiProfileSelectorComponent from './components/MultiProfileSelector';

import mockProfiles from './mocks/profiles';

configure({ adapter: new Adapter() });
describe('MultiProfileSelector', () => {
  const mockStore = configureMockStore();
  const store = mockStore({
    profiles: {
      profiles: mockProfiles,
    },
    multiProfileSelector: {
      selectedProfiles: mockProfiles,
    },
  });
  it('should render', () => {
    const wrapper = shallow(
      <MultiProfileSelector store={store} />,
    );
    expect(wrapper.find(MultiProfileSelectorComponent).length)
      .toBe(1);
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

  describe('mapDispatchToProps', () => {
    it('toggle profile dispatches toggleProfile', () => {
      const profileSelector = shallow(
        <MultiProfileSelector store={store} />,
      );
      expect(profileSelector.props().toggleProfile({ id: 1 })).toEqual(actions.toggleProfile(1));
    });
    it('toggle openDropdown dispatches openDropdown', () => {
      const profileSelector = shallow(
        <MultiProfileSelector store={store} />,
      );
      expect(profileSelector.props().openDropdown()).toEqual(actions.openDropdown());
    });
    it('toggle closeDropdown dispatches closeDropdown', () => {
      const profileSelector = shallow(
        <MultiProfileSelector store={store} />,
      );
      expect(profileSelector.props().closeDropdown()).toEqual(actions.closeDropdown());
    });
    it('toggle onSearchChange dispatches filterProfilesByUsername', () => {
      const profileSelector = shallow(
        <MultiProfileSelector store={store} />,
      );
      expect(profileSelector.props().onSearchChange('event')).toEqual(actions.filterProfilesByUsername('event'));
    });
    it('toggle compareProfiles dispatches compareProfiles', () => {
      const profileSelector = shallow(
        <MultiProfileSelector store={store} />,
      );
      expect(profileSelector.props()
        .compareProfiles(mockProfiles)).toEqual(actions.compareProfiles(mockProfiles));
    });
  });
});
