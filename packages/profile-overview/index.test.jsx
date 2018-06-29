import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import ProfilesOverviewWrapper, {
  reducer,
  middleware,
  getComparableUsername,
  sortProfilesAlphabetically,
} from './index';

configure({ adapter: new Adapter() });

const profile = {
  id: '4e88a092512f7e1556000000',
  avatarUrl: 'testurl',
  service: 'facebook',
  username: 'Buffer',
  timezone: 'America/Los Angeles',
};

const validStore = {
  subscribe: () => {},
  dispatch: jest.fn(),
  getState: jest.fn(() => ({
    i18n: {
      translations: {},
    },
    profiles: {
      profiles: [profile],
      selectedProfile: profile,
    },
    profilesOverview: [],
    posts: {
      loading: false,
      posts: [],
      selectedMetric: {
        key: 'reactions',
        label: 'Reactions',
      },
      isDescendingSelected: true,
      activePostsCount: 10,
    },
    date: {},
  })),
};

describe('Profiles Overview', () => {
  it('should render ProfilesOverviewWrapper component', () => {
    const wrapper = mount(
      <Provider store={validStore}>
        <ProfilesOverviewWrapper />
      </Provider>,
    );
    expect(wrapper.find(ProfilesOverviewWrapper).length)
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

  it('should transform names for better sorting', () => {
    expect(getComparableUsername({ username: '@buffer' }))
      .toBe('BUFFER');
  });

  it('should sort profiles alphabetically', () => {
    expect(sortProfilesAlphabetically({ username: '@buffer' }, { username: 'Analyze' }))
      .toBe(1);
    expect(sortProfilesAlphabetically({ username: 'Analyze' }, { username: '@buffer' }))
      .toBe(-1);
    expect(sortProfilesAlphabetically({ username: 'Analyze' }, { username: 'Analyze' }))
      .toBe(0);
  });
});
