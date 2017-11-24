import { actionTypes as asyncDataFetchActionTypes } from '@bufferapp/async-data-fetch';
import reducer, { actions, actionTypes } from './reducer';

import mockDailyData from './mocks/dailyData';
import mockMetrics from './mocks/metrics';

describe('reducer', () => {
  let initialState = {};

  beforeEach(() => {
    initialState = {
      data: [],
      metrics: [],
      profileService: '',
      selectedMetrics: [],
      isPrimaryMetricDropdownOpen: false,
      isSecondaryMetricDropdownOpen: false,
      loading: true,
    };
  });

  it('export the initialState', () => {
    expect(reducer(undefined, { type: 'INIT' }))
      .toEqual(initialState);
  });

  it('should open primary dropdown', () => {
    expect(reducer({
      isPrimaryMetricDropdownOpen: false,
    }, {
      type: `audience_${actionTypes.OPEN_PRIMARY_DROPDOWN}`,
    }))
      .toEqual({
        isPrimaryMetricDropdownOpen: true,
        isSecondaryMetricDropdownOpen: false,
      });
  });

  it('should open secondary dropdown', () => {
    expect(reducer({
      isSecondaryMetricDropdownOpen: false,
    }, {
      type: `audience_${actionTypes.OPEN_SECONDARY_DROPDOWN}`,
    }))
      .toEqual({
        isSecondaryMetricDropdownOpen: true,
        isPrimaryMetricDropdownOpen: false,
      });
  });

  it('should close primary dropdown', () => {
    expect(reducer({
      isPrimaryMetricDropdownOpen: true,
    }, {
      type: `audience_${actionTypes.CLOSE_PRIMARY_DROPDOWN}`,
    }))
      .toEqual({
        isPrimaryMetricDropdownOpen: false,
      });
  });

  it('should close secondary dropdown', () => {
    expect(reducer({
      isSecondaryMetricDropdownOpen: true,
    }, {
      type: `audience_${actionTypes.CLOSE_SECONDARY_DROPDOWN}`,
    }))
      .toEqual({
        isSecondaryMetricDropdownOpen: false,
      });
  });

  it('should select custom metric', () => {
    expect(reducer({
      metrics: mockMetrics,
      selectedMetrics: [],
    }, {
      type: `audience_${actionTypes.SELECT_CUSTOM_METRIC}`,
      metricIndex: 0,
      selectedMetricLabel: mockMetrics[1].label,
    }))
      .toEqual({
        selectedMetrics: [
          mockMetrics[1],
        ],
        metrics: mockMetrics,
        isPrimaryMetricDropdownOpen: false,
        isSecondaryMetricDropdownOpen: false,
      });
  });

  it('should fetch the metrics and select a pair', () => {
    const result = {
      data: mockDailyData,
      metrics: mockMetrics,
    };

    expect(reducer({}, {
      type: `audience_${asyncDataFetchActionTypes.FETCH_SUCCESS}`,
      result,
    }))
      .toEqual(Object.assign({}, {
        data: mockDailyData,
        selectedMetrics: [
          result.metrics[0],
          result.metrics[1],
        ],
        metrics: mockMetrics,
        loading: false,
      }));
  });

  it('should return an empty selected metrics array if fetch result metrics are missing', () => {
    const result = {
      data: [],
      metrics: [],
    };

    expect(reducer({}, {
      type: `audience_${asyncDataFetchActionTypes.FETCH_SUCCESS}`,
      result,
    }))
      .toEqual(Object.assign({}, {
        data: result.data,
        loading: false,
        metrics: [],
        selectedMetrics: [],
      }));
  });

  it('should open the primary metric dropdown', () => {
    expect(actions.openPrimaryMetricDropdown())
      .toEqual({
        type: `audience_${actionTypes.OPEN_PRIMARY_DROPDOWN}`,
      });
  });

  it('should close the primary metric dropdown', () => {
    expect(actions.closePrimaryMetricDropdown())
      .toEqual({
        type: `audience_${actionTypes.CLOSE_PRIMARY_DROPDOWN}`,
      });
  });

  it('should select primary metric', () => {
    expect(actions.selectPrimaryMetric('foo'))
      .toEqual({
        type: `audience_${actionTypes.SELECT_CUSTOM_METRIC}`,
        metricIndex: 0,
        selectedMetricLabel: 'foo',
      });
  });

  it('should open the secondary metric dropdown', () => {
    expect(actions.openSecondaryMetricDropdown())
      .toEqual({
        type: `audience_${actionTypes.OPEN_SECONDARY_DROPDOWN}`,
      });
  });

  it('should close the secondary metric dropdown', () => {
    expect(actions.closeSecondaryMetricDropdown())
      .toEqual({
        type: `audience_${actionTypes.CLOSE_SECONDARY_DROPDOWN}`,
      });
  });

  it('should select secondary metric', () => {
    expect(actions.selectSecondaryMetric('foo'))
      .toEqual({
        type: `audience_${actionTypes.SELECT_CUSTOM_METRIC}`,
        metricIndex: 1,
        selectedMetricLabel: 'foo',
      });
  });
});
