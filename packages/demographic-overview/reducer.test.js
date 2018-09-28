import { actionTypes as asyncDataFetchActions } from '@bufferapp/async-data-fetch';
import reducer, { actions, actionTypes } from './reducer';

describe('reducer', () => {
  it('expose the correct initial state', () => {
    const {
      metrics,
      loading,
      selectedGroup,
      isDropdownOpen,
    } = reducer(undefined, {
      type: 'TEST_ACTION',
    });
    expect(metrics).toEqual([]);
    expect(loading).toBeTruthy();
    expect(selectedGroup).toEqual('');
    expect(isDropdownOpen).toBeFalsy();
  });

  it('initial state is loading', () => {
    const loading = reducer(undefined, {
      type: 'TEST_ACTION',
    }).loading;
    expect(loading).toBeTruthy();
  });

  it('on fetch_success stops loading', () => {
    const state = reducer(undefined, {
      result: {},
      type: `demographic_${asyncDataFetchActions.FETCH_SUCCESS}`,
    });
    expect(state.loading).toBeFalsy();
  });

  it('updates the state with the metrics received on fetch_success', () => {
    const metrics = ['one', 'two', 'three'];
    const state = reducer(undefined, {
      type: `demographic_${asyncDataFetchActions.FETCH_SUCCESS}`,
      result: { metrics, selectedGroup: 'foo' },
    });
    expect(state.metrics).toEqual(metrics);
    expect(state.selectedGroup).toEqual('foo');
  });

  it('select the group and close dropdown', () => {
    const state = reducer(undefined, {
      type: `demographic_${actionTypes.SELECT_OVERVIEW_GROUP}`,
      key: 'foo',
    });
    expect(state.isDropdownOpen).toBeFalsy();
    expect(state.selectedGroup).toEqual('foo');
  });
});

describe('actions', () => {
  it('should open the dropdown', () => {
    expect(actions.openDropdown())
      .toEqual({
        type: `demographic_${actionTypes.OPEN_DROPDOWN}`,
      });
  });

  it('should close the dropdown', () => {
    expect(actions.closeDropdown())
      .toEqual({
        type: `demographic_${actionTypes.CLOSE_DROPDOWN}`,
      });
  });

  it('should select group', () => {
    expect(actions.selectMetricsGroup('foo'))
      .toEqual({
        type: `demographic_${actionTypes.SELECT_OVERVIEW_GROUP}`,
        key: 'foo',
      });
  });
});
