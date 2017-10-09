import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import PostsSummary, {
  reducer,
  actions,
  actionTypes,
  middleware,
} from './index';
import PostsSummaryTable from './components/PostsSummaryTable';

configure({ adapter: new Adapter() });
const storeFake = state => ({
  default: () => {},
  subscribe: () => {},
  dispatch: () => {},
  getState: () => ({ ...state }),
});

describe('PostsSummaryTable', () => {
  it('should render', () => {
    const store = storeFake({
      postsSummary: {
        loading: false,
        metrics: [],
      },
      date: {},
    });
    const wrapper = mount(
      <Provider store={store}>
        <PostsSummary profileService="facebook" />
      </Provider>,
    );
    expect(wrapper.find(PostsSummaryTable).length)
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
