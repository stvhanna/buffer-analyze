import { actionTypes as asyncDataFetchActionTypes } from '@bufferapp/async-data-fetch';
import reducer, { actions, actionTypes } from './reducer';

import mockDailyData from './mocks/dailyData';
import mockMetrics from './mocks/metrics';
import mockPresets from './mocks/presets';

describe('reducer', () => {
  let initialState = {};

  beforeEach(() => {
    initialState = {
      data: [],
      metrics: [],
      mode: 0,
      presets: [],
      profileService: '',
      selectedMetrics: [],
      selectedPreset: -1,
      isPrimaryMetricDropdownOpen: false,
      isSecondaryMetricDropdownOpen: false,
      isPresetsDropdownOpen: false,
      loading: true,
    };
  });

  it('export the initialState', () => {
    expect(reducer(undefined, { type: 'INIT' }))
      .toEqual(initialState);
  });

  it('should select chart mode', () => {
    expect(reducer({
      mode: 0,
    }, {
      type: `contextual_${actionTypes.SELECT_CHART_MODE}`,
      mode: 1,
    }))
      .toEqual({
        mode: 1,
      });
  });

  it('should open primary dropdown', () => {
    expect(reducer({
      isPrimaryMetricDropdownOpen: false,
    }, {
      type: `contextual_${actionTypes.OPEN_PRIMARY_DROPDOWN}`,
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
      type: `contextual_${actionTypes.OPEN_SECONDARY_DROPDOWN}`,
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
      type: `contextual_${actionTypes.CLOSE_PRIMARY_DROPDOWN}`,
    }))
      .toEqual({
        isPrimaryMetricDropdownOpen: false,
      });
  });

  it('should close secondary dropdown', () => {
    expect(reducer({
      isSecondaryMetricDropdownOpen: true,
    }, {
      type: `contextual_${actionTypes.CLOSE_SECONDARY_DROPDOWN}`,
    }))
      .toEqual({
        isSecondaryMetricDropdownOpen: false,
      });
  });

  it('should select a preset', () => {
    expect(reducer({
      presets: mockPresets,
      selectedPreset: 0,
    }, {
      type: `contextual_${actionTypes.SELECT_PRESET}`,
      preset: 1,
    }))
      .toEqual({
        presets: mockPresets,
        selectedPreset: 1,
      });
  });

  it('should toggle preset dropdown', () => {
    expect(reducer({
      isPresetsDropdownOpen: false,
    }, {
      type: `contextual_${actionTypes.TOGGLE_PRESETS_DROPDOWN}`,
    }))
      .toEqual({
        isPresetsDropdownOpen: true,
      });
  });

  it('should select custom metric', () => {
    expect(reducer({
      metrics: mockMetrics,
      selectedMetrics: [],
    }, {
      type: `contextual_${actionTypes.SELECT_CUSTOM_METRIC}`,
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

  it('should fetch the metrics and select a pair and a preset', () => {
    const result = {
      data: mockDailyData,
      metrics: mockMetrics,
      presets: mockPresets,
    };

    expect(reducer({}, {
      type: `contextual_${asyncDataFetchActionTypes.FETCH_SUCCESS}`,
      result,
    }))
      .toEqual(Object.assign({}, {
        data: mockDailyData,
        selectedMetrics: [
          result.metrics[0],
          result.metrics[1],
        ],
        metrics: mockMetrics,
        presets: mockPresets,
        selectedPreset: 0,
        loading: false,
      }));
  });

  it('should return an empty selected metrics array if fetch result metrics are missing', () => {
    const result = {
      data: [],
      metrics: [],
      presets: [],
    };

    expect(reducer({}, {
      type: `contextual_${asyncDataFetchActionTypes.FETCH_SUCCESS}`,
      result,
    }))
      .toEqual(Object.assign({}, {
        data: result.data,
        loading: false,
        metrics: [],
        presets: [],
        selectedMetrics: [],
        selectedPreset: -1,
      }));
  });

  it('should open the primary metric dropdown', () => {
    expect(actions.openPrimaryMetricDropdown())
      .toEqual({
        type: `contextual_${actionTypes.OPEN_PRIMARY_DROPDOWN}`,
      });
  });

  it('should close the primary metric dropdown', () => {
    expect(actions.closePrimaryMetricDropdown())
      .toEqual({
        type: `contextual_${actionTypes.CLOSE_PRIMARY_DROPDOWN}`,
      });
  });

  it('should select primary metric', () => {
    expect(actions.selectPrimaryMetric('foo'))
      .toEqual({
        type: `contextual_${actionTypes.SELECT_CUSTOM_METRIC}`,
        metricIndex: 0,
        selectedMetricLabel: 'foo',
      });
  });

  it('should open the secondary metric dropdown', () => {
    expect(actions.openSecondaryMetricDropdown())
      .toEqual({
        type: `contextual_${actionTypes.OPEN_SECONDARY_DROPDOWN}`,
      });
  });

  it('should close the secondary metric dropdown', () => {
    expect(actions.closeSecondaryMetricDropdown())
      .toEqual({
        type: `contextual_${actionTypes.CLOSE_SECONDARY_DROPDOWN}`,
      });
  });

  it('should select secondary metric', () => {
    expect(actions.selectSecondaryMetric('foo'))
      .toEqual({
        type: `contextual_${actionTypes.SELECT_CUSTOM_METRIC}`,
        metricIndex: 1,
        selectedMetricLabel: 'foo',
      });
  });

  it('should select the chart mode', () => {
    expect(actions.selectMode(1))
      .toEqual({
        type: `contextual_${actionTypes.SELECT_CHART_MODE}`,
        mode: 1,
      });
  });

  it('should select a preset', () => {
    expect(actions.selectPreset(1))
      .toEqual({
        type: `contextual_${actionTypes.SELECT_PRESET}`,
        preset: 1,
      });
  });

  it('should toggle the presets dropdown', () => {
    expect(actions.togglePresetDropdown())
      .toEqual({
        type: `contextual_${actionTypes.TOGGLE_PRESETS_DROPDOWN}`,
      });
  });
});
