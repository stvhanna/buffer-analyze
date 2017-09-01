import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import Header, {
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
    const profile = {
      id: '4e88a092512f7e1556000000',
      avatarUrl: 'testurl',
      service: 'facebook',
      username: 'Buffer',
    };
    const store = storeFake({
      profiles: {
        profiles: [profile],
      },
      profileHeader: {
        followersCount: 22,
      },
    });
    const wrapper = mount(
      <Provider store={store}>
        <Header followersCount={22} profile={profile} />
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
