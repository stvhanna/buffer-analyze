import { actionTypes as asyncDataFetchActions } from '@bufferapp/async-data-fetch';
import reducer, { actions, actionTypes } from './reducer';

describe('reducer', () => {
  let initialState = {};

  beforeEach(() => {
    initialState = {
      isDropdownOpen: false,
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
      type: actionTypes.TOGGLE_DROPDOWN,
    }))
      .toEqual({ isDropdownOpen: true });
  });

  it('should close the dropdown', () => {
    expect(reducer({
      isDropdownOpen: true,
    }, {
      type: actionTypes.TOGGLE_DROPDOWN,
    }))
      .toEqual({ isDropdownOpen: false });
  });
});

describe('actions', () => {
  it('should toggle the dropdown', () => {
    expect(actions.toggleDropdown())
      .toEqual({
        type: actionTypes.TOGGLE_DROPDOWN,
      });
  });
});
