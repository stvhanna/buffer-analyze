import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import Tabs from './index';
import TabNavigation from './components/TabNavigation';

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
        <Tabs selectedTabId={'posts'} />
      </Provider>,
    );
    expect(wrapper.find(TabNavigation).length)
      .toBe(1);
  });
});
