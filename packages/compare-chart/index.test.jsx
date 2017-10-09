import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureMockStore from 'redux-mock-store';
import CompareChartContainer, {
  reducer,
  actions,
  actionTypes,
  middleware,
} from './index';
import CompareChart from './components/CompareChart';
import mockProfiles from './mocks/profiles';
import dailyData from './mocks/dailyData';

configure({ adapter: new Adapter() });
describe('CompareChartContainer', () => {
  let state = {};
  const totalPeriodDaily = [
    {
      day: '1504137600000',
      previousPeriodDay: '1503446400000',
      metrics: [
        {
          diff: 4,
          label: 'Click',
          value: 2679,
          postsCount: 100,
          previousPostsCount: 50,
          previousValue: 1100,
          color: '#fda3f3',
        },
      ],
    },
  ];

  beforeEach(() => {
    state = {
      compare: {
        loading: true,
        metrics: { totals: [], daily: [], totalPeriodDaily: [] },
        selectedMetricLabel: '',
        visualizePreviousPeriod: false,
        dailyMode: 0,
      },
      profiles: {
        profiles: mockProfiles,
        selectedProfileId: mockProfiles[0].id,
        selectedProfileService: 'twitter',
      },
    };
  });
  it('should render', () => {
    const mockStore = configureMockStore();
    const store = mockStore(state);

    const component = shallow(<CompareChartContainer
      store={store}
    />);
    expect(component.find(CompareChart).length)
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

  it('should dispatch', () => {
    const mockStore = configureMockStore();
    const store = mockStore(state);

    const component = shallow(<CompareChartContainer
      store={store}
    />);

    expect(component.props().selectMetric('foo')).toEqual({
      metricLabel: 'foo',
      type: `compare_${actionTypes.SELECT_METRIC}`,
    });

    expect(component.props().selectDailyMode(1)).toEqual({
      mode: 1,
      type: `compare_${actionTypes.SELECT_DAILY_MODE}`,
    });

    expect(component.props().openDropdown({
    })).toEqual({
      type: `compare_${actionTypes.OPEN_DROPDOWN}`,
    });

    expect(component.props().closeDropdown({
    })).toEqual({
      type: `compare_${actionTypes.CLOSE_DROPDOWN}`,
    });

    expect(component.props().togglePreviousPeriod({
    })).toEqual({
      type: `compare_${actionTypes.TOGGLE_PREVIOUS_PERIOD}`,
    });
  });

  it('should use daily if daily mode = 0', () => {
    const mockStore = configureMockStore();
    state.compare.dailyMode = 0;
    state.compare.metrics.daily = dailyData;
    state.compare.metrics.totalPeriodDaily = totalPeriodDaily;
    const store = mockStore(state);
    const component = shallow(<CompareChartContainer
      store={store}
    />);

    expect(component.props().dailyData).toBe(dailyData);
  });

  it('should use totalPeriodDaily instead od daily if daily mode = 1', () => {
    const mockStore = configureMockStore();
    state.compare.dailyMode = 1;
    state.compare.metrics.daily = dailyData;
    state.compare.metrics.totalPeriodDaily = totalPeriodDaily;
    const store = mockStore(state);
    const component = shallow(<CompareChartContainer
      store={store}
    />);

    expect(component.props().dailyData).toBe(totalPeriodDaily);
  });
});
