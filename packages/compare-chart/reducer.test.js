import { actionTypes as asyncDataFetchActionTypes } from '@bufferapp/async-data-fetch';
import reducer, { actions, actionTypes } from './reducer';

describe('reducer', () => {
  let initialState = {};

  beforeEach(() => {
    initialState = {
      isDropdownOpen: false,
      loading: true,
      metrics: { totals: [], daily: [] },
      selectedMetricLabel: '',
      visualizePreviousPeriod: false,
      dailyMode: 0,
    };
  });

  it('should initialize default state', () => {
    expect(reducer(undefined, { type: 'INIT' }))
      .toEqual(initialState);
  });

  it('should select dailyMode', () => {
    expect(reducer({
      dailyMode: 0,
    }, {
      type: `compare_${actionTypes.SELECT_DAILY_MODE}`,
      mode: 1,
    }))
      .toEqual({
        dailyMode: 1,
      });
  });

  it('should update selectedMetricLabel', () => {
    expect(reducer({
      selectedMetricLabel: 'foo',
    }, {
      type: `compare_${actionTypes.SELECT_METRIC}`,
      metricLabel: 'bar',
    }))
      .toEqual({
        selectedMetricLabel: 'bar',
        isDropdownOpen: false,
      });
  });

  it('should update metric on fetch success', () => {
    const result = {
      totals: [
        { label: 'foo' },
        { label: 'bar' },
      ],
      daily: [
        { day: '12345' },
        { day: '12345' },
      ],
    };

    expect(reducer({
      selectedMetricLabel: '',
    }, {
      type: `compare_${asyncDataFetchActionTypes.FETCH_SUCCESS}`,
      result,
    }))
      .toEqual(Object.assign({}, {
        metrics: result,
        loading: false,
        selectedMetricLabel: 'foo',
      }));
  });

  it('should reset selectedMetricLabel on fetch success if got empty data', () => {
    const result = {
      totals: [],
      daily: [],
    };

    expect(reducer({
      selectedMetricLabel: 'foo',
    }, {
      type: `compare_${asyncDataFetchActionTypes.FETCH_SUCCESS}`,
      result,
    }))
      .toEqual(Object.assign({}, {
        metrics: result,
        loading: false,
        selectedMetricLabel: '',
      }));
  });

  it('should select first valid metric on fetch success if previous metric does not exist anymore', () => {
    const result = {
      totals: [
        { label: 'foo' },
        { label: 'bar' },
      ],
      daily: [
        { day: '12345' },
        { day: '12345' },
      ],
    };

    expect(reducer({
      selectedMetricLabel: 'fooBar',
    }, {
      type: `compare_${asyncDataFetchActionTypes.FETCH_SUCCESS}`,
      result,
    }))
      .toEqual(Object.assign({}, {
        metrics: result,
        loading: false,
        selectedMetricLabel: 'foo',
      }));
  });
});

describe('actions', () => {
  it('should open the dropdown', () => {
    expect(actions.openDropdown())
      .toEqual({
        type: `compare_${actionTypes.OPEN_DROPDOWN}`,
      });
  });

  it('should close the dropdown', () => {
    expect(actions.closeDropdown())
      .toEqual({
        type: `compare_${actionTypes.CLOSE_DROPDOWN}`,
      });
  });

  it('should toggle previousPeriod', () => {
    expect(actions.togglePreviousPeriod())
      .toEqual({
        type: `compare_${actionTypes.TOGGLE_PREVIOUS_PERIOD}`,
      });
  });

  it('should select metric', () => {
    expect(actions.selectMetric('foo'))
      .toEqual({
        type: `compare_${actionTypes.SELECT_METRIC}`,
        metricLabel: 'foo',
      });
  });

  it('should select the daily mode', () => {
    expect(actions.selectDailyMode(1))
      .toEqual({
        type: `compare_${actionTypes.SELECT_DAILY_MODE}`,
        mode: 1,
      });
  });
});
