import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import ProfileLoaderContainer, {
  reducer,
  actions,
  actionTypes,
  middleware,
} from './index';
import ProfileLoader from './components/ProfileLoader';

configure({ adapter: new Adapter() });
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

  it('should export middleware', () => {
    expect(middleware)
      .toBeDefined();
  });
});
