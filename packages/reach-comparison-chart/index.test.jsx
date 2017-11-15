import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import ReachComparisonChart, {
  reducer,
  actions,
  actionTypes,
  middleware,
} from './index';
import ReachComparisonChart from './components/ReachComparisonChart';

const storeFake = state => ({
  default: () => {},
  subscribe: () => {},
  dispatch: () => {},
  getState: () => ({ ...state }),
});

describe('ReachComparisonChart', () => {
  it('should render', () => {
    const store = storeFake({
    });
    const wrapper = mount(
      <Provider store={store}>
        <ReachComparisonChart />
      </Provider>,
    );
    expect(wrapper.find(ReachComparisonChart).length)
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
