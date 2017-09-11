import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import TopPostsTable, {
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
  it('should render', () => {
    const store = storeFake({
    });
    const wrapper = mount(
      <Provider store={store}>
        <TopPostsTable />
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
