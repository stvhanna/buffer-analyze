import React from 'react';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import HashtagsTable, {
  reducer,
  actions,
  actionTypes,
  middleware,
  HashtagsTableWrapper,
} from './index';

configure({ adapter: new Adapter() });
jest.mock('@bufferapp/add-report');

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
    hashtags: {
      loading: false,
      hashtags: [],
    },
    date: {},
  })),
};


describe('Top Post Table', () => {
  it('should render HashtagsTableWrapper component', () => {
    const wrapper = mount(
      <Provider store={validStore}>
        <HashtagsTable />
      </Provider>,
    ); expect(wrapper.find(HashtagsTableWrapper).length)
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
  it('postsTable should call the sortBy action', () => {
    const component = shallow(<HashtagsTable store={validStore} />);

    component.props().handleSortBy('foo', false);
    expect(validStore.dispatch).toHaveBeenCalledWith(actions.sortBy());
  });
});
