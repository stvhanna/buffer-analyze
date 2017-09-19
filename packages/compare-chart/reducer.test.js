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
    };
  });

  it('should initialize default state', () => {
    expect(reducer(undefined, { type: 'INIT' }))
      .toEqual(initialState);
  });

  it('should open the dropdown', () => {
    expect(reducer({
      isDropdownOpen: false,
    }, {
      type: `compare_${actionTypes.TOGGLE_DROPDOWN}`,
    }))
      .toEqual({ isDropdownOpen: true });
  });

  it('should close the dropdown', () => {
    expect(reducer({
      isDropdownOpen: true,
    }, {
      type: `compare_${actionTypes.TOGGLE_DROPDOWN}`,
    }))
      .toEqual({ isDropdownOpen: false });
  });
  it('should togglePreviousPeriod', () => {
    expect(reducer({
      visualizePreviousPeriod: false,
    }, {
      type: `compare_${actionTypes.TOGGLE_PREVIOUS_PERIOD}`,
    }))
      .toEqual({ visualizePreviousPeriod: true });
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
});

describe('actions', () => {
  it('should toggle the dropdown', () => {
    expect(actions.toggleDropdown())
      .toEqual({
        type: `compare_${actionTypes.TOGGLE_DROPDOWN}`,
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
});
