import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import HourlyChart, {
  reducer,
  actions,
  actionTypes,
  middleware,
} from './index';
import HourlyChart from './components/HourlyChart';

const storeFake = state => ({
  default: () => {},
  subscribe: () => {},
  dispatch: () => {},
  getState: () => ({ ...state }),
});

describe('HourlyChart', () => {
  it('should render', () => {
    const store = storeFake({
    });
    const wrapper = mount(
      <Provider store={store}>
        <HourlyChart />
      </Provider>,
    );
    expect(wrapper.find(HourlyChart).length)
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
