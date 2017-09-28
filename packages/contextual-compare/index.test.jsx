import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import ContextualCompareContainer, {
  reducer,
  actions,
  actionTypes,
  middleware,
} from './index';
import COntextualCompare from './components/COntextualCompare';

const storeFake = state => ({
  default: () => {},
  subscribe: () => {},
  dispatch: () => {},
  getState: () => ({ ...state }),
});

describe('ContextualCompareContainer', () => {
  it('should render', () => {
    const store = storeFake({
    });
    const wrapper = mount(
      <Provider store={store}>
        <ContextualCompare />
      </Provider>,
    );
    expect(wrapper.find(COntextualCompare).length)
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
