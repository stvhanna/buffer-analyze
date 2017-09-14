import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import CompareChartContainer, {
  reducer,
  actions,
  actionTypes,
  middleware,
} from './index';
import CompareChart from './components/CompareChart';

const storeFake = state => ({
  default: () => {},
  subscribe: () => {},
  dispatch: () => {},
  getState: () => ({ ...state }),
});

describe('CompareChartContainer', () => {
  it('should render', () => {
    const store = storeFake({
    });
    const wrapper = mount(
      <Provider store={store}>
        <CompareChart />
      </Provider>,
    );
    expect(wrapper.find(CompareChart).length)
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
