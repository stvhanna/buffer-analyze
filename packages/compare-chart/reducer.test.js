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
});
