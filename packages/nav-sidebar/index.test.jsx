import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import NavSidebar, {
  reducer,
  middleware,
} from './index';

const storeFake = state => ({
  default: () => {},
  subscribe: () => {},
  dispatch: () => {},
  getState: () => ({ ...state }),
});

describe('NavSidebar', () => {
  it('should render', () => {
    const store = storeFake({
      navSidebar: {
        profiles: [
          {
            id: 2,
            service: 'instagram',
          },
        ],
      },
    });
    const wrapper = mount(
      <Provider store={store}>
        <NavSidebar route="/" />
      </Provider>,
    );
    expect(wrapper.find(NavSidebar).length)
      .toBe(1);
  });

  it('should export reducer', () => {
    expect(reducer)
      .toBeDefined();
  });

  it('should export middleware', () => {
    expect(middleware)
      .toBeDefined();
  });
});

