import React from 'react';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import { actions as profilesActions } from '@bufferapp/analyze-profile-selector';
import NavSidebar, {
  reducer,
} from './index';
import Insights from './components/Insights';

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
    expect(wrapper.find(Insights)).toHaveLength(1);
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

  it('it should export onClick', () => {
    const store = storeFake({
      navSidebar: {
        profiles: [],
      },
    });
    const component = shallow(
      <NavSidebar store={store} route="/" />,
    );
    expect(component.props().onClick).toBeDefined();
    component.props().onClick();
    expect(store.dispatch).toHaveBeenCalledTimes(2);
    expect(store.dispatch.mock.calls[0][0]).toMatchObject({
      type: '@@router/CALL_HISTORY_METHOD',
    });
    expect(store.dispatch.mock.calls[1][0]).toMatchObject(
      profilesActions.selectProfileService(),
    );
  });

  it('should export reducer', () => {
    expect(reducer)
      .toBeDefined();
  });
});

