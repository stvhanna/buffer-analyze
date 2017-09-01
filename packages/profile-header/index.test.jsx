import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import {
  reducer,
  actions,
  actionTypes,
  middleware,
} from './index';
import ProfileHeader from './components/ProfileHeader';

const storeFake = state => ({
  default: () => {},
  subscribe: () => {},
  dispatch: () => {},
  getState: () => ({ ...state }),
});

describe('ProfileHeader', () => {
  it('should render', () => {
    const store = storeFake({
    });
    const wrapper = mount(
      <Provider store={store}>
        <ProfileHeader />
      </Provider>,
    );
    expect(wrapper.find(ProfileHeader).length)
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

  it('should export middleware', () => {
    expect(middleware)
      .toBeDefined();
  });
});
