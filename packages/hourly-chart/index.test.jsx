import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureMockStore from 'redux-mock-store';
import HourlyChart, {
  reducer,
  actions,
  actionTypes,
  middleware,
} from './index';
import HourlyChartComponent from './components/HourlyChart';

jest.mock('@bufferapp/add-report');

configure({ adapter: new Adapter() });
describe('HourlyChart', () => {
  const mockStore = configureMockStore();
  const store = mockStore({
    profiles: {
      selectedProfileService: 'twitter',
    },
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
    it('select metric triggers selectMetric', () => {
      const hourlyChart = shallow(
        <HourlyChart store={store} />,
      );
      expect(hourlyChart.props().selectMetric('foo')).toEqual(actions.selectMetric('foo'));
    });
  });
});
