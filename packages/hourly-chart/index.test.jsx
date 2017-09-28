import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import HourlyChart, {
  reducer,
  actions,
  actionTypes,
  middleware,
} from './index';
import HourlyChartComponent from './components/HourlyChart';

describe('HourlyChart', () => {
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
  it('should render', () => {
    const wrapper = shallow(
      <HourlyChart store={store} />,
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

  describe('mapDispatchToProps', () => {
    it('toggle dropdown dispatches toggleDropdown', () => {
      const hourlyChart = shallow(
        <HourlyChart store={store} />,
      );
      expect(hourlyChart.props().toggleDropdown()).toEqual(actions.toggleDropdown());
    });
    it('toggle secondary dropdown dispatches toggleSecondaryDropdown', () => {
      const hourlyChart = shallow(
        <HourlyChart store={store} />,
      );
      expect(hourlyChart.props().toggleSecondaryDropdown())
        .toEqual(actions.toggleSecondaryDropdown());
    });
    it('show secondary dropdown dispatches showSecondaryDropdown', () => {
      const hourlyChart = shallow(
        <HourlyChart store={store} />,
      );
      expect(hourlyChart.props().showSecondaryDropdown()).toEqual(actions.showSecondaryDropdown());
    });
    it('hide secondary dropdown dispatches hideSecondaryDropdown', () => {
      const hourlyChart = shallow(
        <HourlyChart store={store} />,
      );
      expect(hourlyChart.props().hideSecondaryDropdown()).toEqual(actions.hideSecondaryDropdown());
    });
    it('select metric triggers selectMetric', () => {
      const hourlyChart = shallow(
        <HourlyChart store={store} />,
      );
      expect(hourlyChart.props().selectMetric('foo')).toEqual(actions.selectMetric('foo'));
    });
    it('select metric triggers selectSecondaryMetric if second parameter is true', () => {
      const hourlyChart = shallow(
        <HourlyChart store={store} />,
      );
      expect(hourlyChart.props().selectMetric('foo', true)).toEqual(actions.selectSecondaryMetric('foo'));
    });
  });
});
