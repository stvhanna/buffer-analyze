import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import Tabs, {
  reducer,
  actions,
  actionTypes,
  middleware,
} from './index';
import Tabs from './components/Tabs';

const storeFake = state => ({
  default: () => {},
  subscribe: () => {},
  dispatch: () => {},
  getState: () => ({ ...state }),
});

describe('Tabs', () => {
  it('should render', () => {
    const store = storeFake({
    });
    const wrapper = mount(
      <Provider store={store}>
        <Tabs />
      </Provider>,
    );
    expect(wrapper.find(Tabs).length)
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
