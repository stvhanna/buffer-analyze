import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import CompareChartContainer, {
  reducer,
  actions,
  actionTypes,
  middleware,
} from './index';
import CompareChart from './components/CompareChart';
import mockProfiles from './mocks/profiles';

describe('CompareChartContainer', () => {
  let state = {};

  beforeEach(() => {
    state = {
      compare: {
        loading: true,
        metrics: { totals: [], daily: [] },
        selectedMetricLabel: '',
        visualizePreviousPeriod: false,
        dailyMode: 0,
      },
      profiles: {
        profiles: mockProfiles,
        selectedProfileId: mockProfiles[0].id,
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
});
