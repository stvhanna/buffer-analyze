import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import PostsSummary, {
  reducer,
  actions,
  actionTypes,
  middleware,
} from './index';
import PostsSummaryTable from './components/PostsSummaryTable';

const storeFake = state => ({
  default: () => {},
  subscribe: () => {},
  dispatch: () => {},
  getState: () => ({ ...state }),
});

describe('PostsSummaryTable', () => {
  it('should render', () => {
    const store = storeFake({
    });
    const wrapper = mount(
      <Provider store={store}>
        <PostsSummary />
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
