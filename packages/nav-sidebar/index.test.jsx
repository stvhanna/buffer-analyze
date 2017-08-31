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
  it('should render with links to Insights', () => {
    const store = storeFake({
      navSidebar: {
        profiles: [
          {
            id: '2',
            service: 'instagram',
          },
          {
            id: '4',
            service: 'twitter',
          },
          {
            id: '5',
            service: 'facebook',
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
    expect(wrapper.find('[children="Insights"]').length).toBe(1);
  });

  it('should render without links to Insights if there are no profiles', () => {
    const store = storeFake({
      navSidebar: {
        profiles: [],
      },
    });
    const wrapper = mount(
      <Provider store={store}>
        <NavSidebar route="/" />
      </Provider>,
    );
    expect(wrapper.find(NavSidebar).length)
      .toBe(1);
    expect(wrapper.find('[children="Insights"]').length).toBe(0);
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

