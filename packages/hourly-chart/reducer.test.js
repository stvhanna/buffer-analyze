import { actionTypes as asyncDataFetchActions } from '@bufferapp/async-data-fetch';
import reducer, { actionTypes } from './reducer';

const metrics = [
  {
    label: 'Engagements',
    color: '#3a92d3',
    hourlyMetrics: [737, 1308, 666, 697, 575, 2312, 1793, 2135, 1427, 929, 780, 850, 4816, 3610, 2053, 2389, 3159, 1214, 844, 1638, 1349, 909, 1094, 685], // eslint-disable-line max-len
  },
  {
    label: 'Impressions',
    color: '#fec78b',
    hourlyMetrics: [18075, 36358, 19167, 18259, 17976, 51024, 77103, 84309, 56496, 41740, 39535, 34002, 71848, 59870, 40613, 66784, 139601, 63494, 41352, 54119, 43472, 36116, 31686, 21091], // eslint-disable-line max-len
  },
  {
    label: 'Favorites',
    color: '#8fc6db',
    hourlyMetrics: [65, 128, 52, 68, 49, 262, 171, 256, 130, 71, 59, 63, 217, 130, 107, 306, 326, 106, 65, 164, 123, 64, 54, 33], // eslint-disable-line max-len
  },
];

const postsCount =
  [2, 0, 0, 0, 0, 5, 11, 4, 1, 0, 1, 0, 3, 1, 0, 5, 11, 0, 0, 2, 0, 1, 1, 0];

describe('reducer', () => {
  describe('initial state', () => {
    it('should be loading', () => {
      const state = reducer(undefined, {
        type: 'TEST_ACTION',
      });
      expect(state.loading).toBeTruthy();
    });

    it('should have no metrics', () => {
      const state = reducer(undefined, {
        type: 'TEST_ACTION',
      });
      expect(state.metrics).toEqual([]);
    });
    it('dropdown is closed', () => {
      const state = reducer(undefined, {
        type: 'TEST_ACTION',
      });
      expect(state.dropdownOpen).toBeFalsy();
    });
    it('secondary dropdown is hidden', () => {
      const state = reducer(undefined, {
        type: 'TEST_ACTION',
      });
      expect(state.secondaryDropdownShown).toBeFalsy();
    });
    it('secondary dropdown is closed', () => {
      const state = reducer(undefined, {
        type: 'TEST_ACTION',
      });
      expect(state.secondaryDropdownOpen).toBeFalsy();
    });
  });
  describe('metrics fetched', () => {
    it('should not be loading', () => {
      const state = reducer(undefined, {
        type: `hourly_${asyncDataFetchActions.FETCH_SUCCESS}`,
        result: {
          metrics,
        },
      });
      expect(state.loading).toBeFalsy();
    });
    it('should store metrics', () => {
      const state = reducer(undefined, {
        type: `hourly_${asyncDataFetchActions.FETCH_SUCCESS}`,
        result: {
          metrics,
        },
      });
      expect(state.metrics).toEqual(metrics);
    });
    it('should store posts count', () => {
      const state = reducer(undefined, {
        type: `hourly_${asyncDataFetchActions.FETCH_SUCCESS}`,
        result: {
          metrics,
          postsCount,
        },
      });
      expect(state.postsCount).toEqual(postsCount);
    });
    it('selected metric is the first on the list', () => {
      const state = reducer(undefined, {
        type: `hourly_${asyncDataFetchActions.FETCH_SUCCESS}`,
        result: {
          metrics,
        },
      });
      expect(state.selectedMetric).toBe(metrics[0].label);
    });
  });
  describe('dropdown', () => {
    it('open', () => {
      const state = reducer(undefined, {
        type: actionTypes.TOGGLE_DROPDOWN,
      });
      expect(state.dropdownOpen).toBeTruthy();
    });
    it('select metric', () => {
      const openDropdownState = reducer(undefined, {
        type: actionTypes.TOGGLE_DROPDOWN,
      });
      const state = reducer(openDropdownState, {
        type: actionTypes.SELECT_METRIC,
        metric: 'Impressions',
      });
      expect(state.selectedMetric).toBe('Impressions');
    });
  });
  describe('secondary dropdown', () => {
    it('show selects the first metric not selected on the primary dropdown', () => {
      const loadedMetrics = reducer(undefined, {
        type: `hourly_${asyncDataFetchActions.FETCH_SUCCESS}`,
        result: {
          metrics,
        },
      });
      const state = reducer(loadedMetrics, {
        type: actionTypes.SHOW_SECONDARY_DROPDOWN,
      });
      expect(state.selectedSecondaryMetric).toBe('Impressions');
    });
    it('open', () => {
      const state = reducer(undefined, {
        type: actionTypes.TOGGLE_SECONDARY_DROPDOWN,
      });
      expect(state.secondaryDropdownOpen).toBeTruthy();
    });
    it('select secondary metric', () => {
      const openDropdownState = reducer(undefined, {
        type: actionTypes.TOGGLE_SECONDARY_DROPDOWN,
      });
      const state = reducer(openDropdownState, {
        type: actionTypes.SELECT_SECONDARY_METRIC,
        metric: 'Engagements',
      });
      expect(state.selectedSecondaryMetric).toBe('Engagements');
    });
    it('hide removes selected metric from dropdown', () => {
      const state = reducer(undefined, {
        type: actionTypes.HIDE_SECONDARY_DROPDOWN,
      });
      expect(state.selectedSecondaryMetric).toBe(null);
    });
  });
});
