import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import HourlyChart, {
  reducer,
  actions,
  actionTypes,
  middleware,
} from './index';
import HourlyChartComponent from './components/HourlyChart';

const storeFake = state => ({
  default: () => {},
  subscribe: () => {},
  dispatch: () => {},
  getState: () => ({ ...state }),
});

describe('HourlyChart', () => {
  it('should render', () => {
    const mockStore = configureMockStore();
    const store = mockStore({
      hourly: {
        metrics: [{
          label: 'Post Impressions',
          color: '#3ed56a',
          hourlyMetrics: [],
        }],
      },
    });
    const wrapper = shallow(
      <HourlyChart store={store}/>
    );
    expect(wrapper.find(HourlyChartComponent).length)
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
