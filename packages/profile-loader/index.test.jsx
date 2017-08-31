import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import ProfileLoaderContainer, {
  reducer,
  actions,
  actionTypes,
} from './index';
import ProfileLoader from './components/ProfileLoader';

const storeFake = state => ({
  default: () => {},
  subscribe: () => {},
  dispatch: () => {},
  getState: () => ({ ...state }),
});

describe('ProfileLoaderContainer', () => {
  it('should render', () => {
    const store = storeFake({
      profileLoader: {
        loading: true,
      },
    });
    const wrapper = mount(
      <Provider store={store}>
        <ProfileLoaderContainer />
      </Provider>,
    );
    expect(wrapper.find(ProfileLoader).length)
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
});
