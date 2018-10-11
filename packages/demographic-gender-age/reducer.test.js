import { actionTypes as asyncDataFetchActions } from '@bufferapp/async-data-fetch';
import reducer, { actions, actionTypes } from './reducer';

describe('reducer', () => {
  it('expose the correct initial state', () => {
    const {
      selectedGroup,
      isDropdownOpen,
    } = reducer(undefined, {
      type: 'TEST_ACTION',
    });
    expect(selectedGroup).toEqual('');
    expect(isDropdownOpen).toBeFalsy();
  });

  it('updates the state with the selectedGroup on fetch_success', () => {
    const metrics = ['one', 'two', 'three'];
    const state = reducer(undefined, {
      type: `demographic_${asyncDataFetchActions.FETCH_SUCCESS}`,
      result: { metrics, selectedGroup: 'foo' },
    });
    expect(state.metrics).toEqual(metrics);
    expect(state.selectedGroup).toEqual('foo');
  });

  it('select the group and close dropdown', () => {
    const state = reducer({
      isDropdownOpen: true,
      metrics: [
        { key: 'foo', label: 'Foo' },
        { key: 'bar', label: 'Bar' },
      ],
    }, {
      type: actionTypes.SELECT_GENDER_AGE_GROUP,
      label: 'Foo',
    });
    expect(state.isDropdownOpen).toBeFalsy();
    expect(state.selectedGroup).toEqual('foo');
  });
});

describe('actions', () => {
  it('should open the dropdown', () => {
    expect(actions.openDropdown())
      .toEqual({
        type: actionTypes.OPEN_DROPDOWN,
      });
  });

  it('should close the dropdown', () => {
    expect(actions.closeDropdown())
      .toEqual({
        type: actionTypes.CLOSE_DROPDOWN,
      });
  });

  it('should select group', () => {
    expect(actions.selectMetricsGroup('foo'))
      .toEqual({
        type: actionTypes.SELECT_GENDER_AGE_GROUP,
        label: 'foo',
      });
  });
});
