import { actionTypes as asyncDataFetchActionTypes } from '@bufferapp/async-data-fetch';
import keyWrapper from '@bufferapp/keywrapper';

export const actionTypes = keyWrapper('AUDIENCE_CHART', {
  SELECT_CHART_MODE: 'SELECT_CHART_MODE',
  SELECT_SECONDARY_METRIC: 'SELECT_SECONDARY_METRIC',
  OPEN_PRIMARY_DROPDOWN: 'OPEN_PRIMARY_DROPDOWN',
  OPEN_SECONDARY_DROPDOWN: 'OPEN_SECONDARY_DROPDOWN',
  CLOSE_PRIMARY_DROPDOWN: 'CLOSE_PRIMARY_DROPDOWN',
  CLOSE_SECONDARY_DROPDOWN: 'CLOSE_SECONDARY_DROPDOWN',

  SELECT_PRESET: 'SELECT_PRESET',
  TOGGLE_PRESETS_DROPDOWN: 'TOGGLE_PRESETS_DROPDOWN',
});

const initialState = {
  data: [],
  isPrimaryMetricDropdownOpen: false,
  isSecondaryMetricDropdownOpen: false,
  loading: true,
  metrics: [],
  profileService: '',
  selectedMetrics: [],
};

function selecetCustomMetricsPairOnFetch(metrics) {
  if (metrics.length >= 2) {
    return [
      metrics[0],
      metrics[1],
    ];
  }
  return [];
}

function selectMetricByLabel(
  metricIndex,
  selectedMetricLabel,
  selectedMetrics,
  metrics,
) {
  const updatedSelectedMetric = selectedMetrics.slice();
  updatedSelectedMetric[metricIndex] = metrics.find(m => m.label === selectedMetricLabel);
  return updatedSelectedMetric;
}

export default (state = initialState, action) => {
  switch (action.type) {
    case `audience_${asyncDataFetchActionTypes.FETCH_START}`:
      return initialState;
    case `audience_${asyncDataFetchActionTypes.FETCH_SUCCESS}`:
      return Object.assign({}, state, {
        data: action.result.data,
        metrics: action.result.metrics,
        selectedMetrics: selecetCustomMetricsPairOnFetch(action.result.metrics),
        loading: false,
      });

    case `audience_${actionTypes.SELECT_CHART_MODE}`:
      return Object.assign({}, state, {
        mode: action.mode,
      });

    case `audience_${actionTypes.SELECT_CUSTOM_METRIC}`:
      return Object.assign({}, state, {
        selectedMetrics: selectMetricByLabel(
          action.metricIndex,
          action.selectedMetricLabel,
          state.selectedMetrics,
          state.metrics,
        ),
        isPrimaryMetricDropdownOpen: false,
        isSecondaryMetricDropdownOpen: false,
      });

    case `audience_${actionTypes.OPEN_PRIMARY_DROPDOWN}`:
      return Object.assign({}, state, {
        isPrimaryMetricDropdownOpen: true,
        isSecondaryMetricDropdownOpen: false,
      });
    case `audience_${actionTypes.CLOSE_PRIMARY_DROPDOWN}`:
      return Object.assign({}, state, {
        isPrimaryMetricDropdownOpen: false,
      });

    case `audience_${actionTypes.OPEN_SECONDARY_DROPDOWN}`:
      return Object.assign({}, state, {
        isSecondaryMetricDropdownOpen: true,
        isPrimaryMetricDropdownOpen: false,
      });
    case `audience_${actionTypes.CLOSE_SECONDARY_DROPDOWN}`:
      return Object.assign({}, state, {
        isSecondaryMetricDropdownOpen: false,
      });

    default:
      return state;
  }
};

export const actions = {
  openPrimaryMetricDropdown() {
    return {
      type: `audience_${actionTypes.OPEN_PRIMARY_DROPDOWN}`,
    };
  },

  closePrimaryMetricDropdown() {
    return {
      type: `audience_${actionTypes.CLOSE_PRIMARY_DROPDOWN}`,
    };
  },

  selectPrimaryMetric(selectedMetricLabel) {
    return {
      type: `audience_${actionTypes.SELECT_CUSTOM_METRIC}`,
      metricIndex: 0,
      selectedMetricLabel,
    };
  },

  openSecondaryMetricDropdown() {
    return {
      type: `audience_${actionTypes.OPEN_SECONDARY_DROPDOWN}`,
    };
  },

  closeSecondaryMetricDropdown() {
    return {
      type: `audience_${actionTypes.CLOSE_SECONDARY_DROPDOWN}`,
    };
  },

  selectSecondaryMetric(selectedMetricLabel) {
    return {
      type: `audience_${actionTypes.SELECT_CUSTOM_METRIC}`,
      metricIndex: 1,
      selectedMetricLabel,
    };
  },
};
