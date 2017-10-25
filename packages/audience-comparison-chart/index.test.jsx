import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import AudienceComparisonChartContainer, {
  reducer,
  actions,
  actionTypes,
  middleware,
} from './index';
import AudienceComparisonChart from './components/AudienceComparisonChart';

const storeFake = state => ({
  default: () => {},
  subscribe: () => {},
  dispatch: () => {},
  getState: () => ({ ...state }),
});

describe('AudienceComparisonChartContainer', () => {
  it('should render', () => {
    const store = storeFake({
    });
    const wrapper = mount(
      <Provider store={store}>
        <AudienceComparisonChart />
      </Provider>,
    );
    expect(wrapper.find(AudienceComparisonChartContainer).length)
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
