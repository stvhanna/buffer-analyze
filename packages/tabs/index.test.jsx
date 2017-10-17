import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import Tabs, { generateInsightsTabRoute } from './index';
import TabNavigation from './components/TabNavigation';

configure({ adapter: new Adapter() });
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
