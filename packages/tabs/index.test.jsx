import React from 'react';
import { mount } from 'enzyme';
import { push } from 'react-router-redux';
import { Provider } from 'react-redux';
import Tabs, { generateInsightsTabRoute } from './index';
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
  it('should generate profile insights tab route', () => {
    const profileId = '1234adf';
    const tabId = 'overview';
    const service = 'facebook';
    expect(generateInsightsTabRoute({
      profileId,
      tabId,
      service,
    }))
      .toBe(`/insights/${service}/${profileId}/${tabId}`);
  });
});
