import React from 'react';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import NavSidebar, {
  reducer,
} from './index';
import Insights from './components/Insights';
import Item from './components/Item';
import { Link } from '@bufferapp/components';

configure({ adapter: new Adapter() });
const storeFake = state => ({
  default: () => {},
  subscribe: () => {},
  dispatch: jest.fn(),
  getState: () => ({ ...state }),
});

describe('NavSidebar', () => {
  it('should render with links to Insights', () => {
    const store = storeFake({
      navSidebar: {
        instagramProfile: {
          id: '2',
          service: 'instagram',
        },
        twitterProfile: {
          id: '4',
          service: 'twitter',
        },
        facebookProfile: {
          id: '5',
          service: 'facebook',
        },
      },
    });
    const wrapper = mount(
      <Provider store={store}>
        <NavSidebar route="/" />
      </Provider>,
    );
    expect(wrapper.find(NavSidebar).length)
      .toBe(1);
    expect(wrapper.find(Insights)).toHaveLength(1);
  });

  describe('clicking on items', () => {
    let store;

    beforeEach(() => {
      store = storeFake({
        navSidebar: {
          instagramProfile: {
            id: '2',
            service: 'instagram',
          },
          twitterProfile: {
            id: '4',
            service: 'twitter',
          },
          facebookProfile: {
            id: '5',
            service: 'facebook',
          },
        },
      });
    });

    it('should dispatch CALL_HISTORY_METHOD and SELECT_PROFILE_SERVICE', () => {
      const wrapper = mount(
        <Provider store={store}>
          <NavSidebar route="/" />
        </Provider>,
      );
      const link = wrapper
        .find(Insights)
        .find(Link)
        .get(0);
      link.props.onClick({ preventDefault: () => {} });
      expect(store.dispatch).toHaveBeenCalledTimes(2);
      expect(store.dispatch.mock.calls[0][0]).toMatchObject({
        type: '@@router/CALL_HISTORY_METHOD',
      });
      expect(store.dispatch.mock.calls[1][0]).toMatchObject({
        type: 'SELECT_PROFILE_SERVICE',
      });
    });

    it('should not dispatch anything if item is active already', () => {
      const wrapper = mount(
        <Provider store={store}>
          <NavSidebar route="/insights/facebook/5/overview" />
        </Provider>,
      );
      const link = wrapper
        .find(Insights)
        .find(Link)
        .get(0);
      link.props.onClick({ preventDefault: () => {} });
      expect(store.dispatch).toHaveBeenCalledTimes(0);
    });
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
    expect(wrapper.find(Insights).children()).toHaveLength(0);
  });

  it('should export reducer', () => {
    expect(reducer)
      .toBeDefined();
  });
});

