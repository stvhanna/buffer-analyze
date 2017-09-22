import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import TopPosts, {
  reducer,
  actions,
  actionTypes,
  middleware,
} from './index';
import TopPostsTable from './components/TopPostsTable';

const storeFake = state => ({
  default: () => {},
  subscribe: () => {},
  dispatch: () => {},
  getState: () => ({ ...state }),
});

describe('TopPostsTable', () => {
  it('should render TopPostsTable component', () => {
    const profile = {
      id: '4e88a092512f7e1556000000',
      avatarUrl: 'testurl',
      service: 'facebook',
      username: 'Buffer',
      timezone: 'America/Los Angeles',
    };
    const store = storeFake({
      profiles: {
        profiles: [profile],
      },
      topPosts: {
        loading: false,
        topPosts: [],
        selectedMetric: {},
        isDescendingSelected: true,
        activePostsCount: 10,
      },
      date: {},
    });
    const wrapper = mount(
      <Provider store={store}>
        <TopPosts
          profileService="facebook"
          selectedProfileId="4e88a092512f7e1556000000"
        />
      </Provider>,
    );
    expect(wrapper.find(TopPostsTable).length)
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
