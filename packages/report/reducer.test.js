import { actionTypes as asyncDataFetchActions } from '@bufferapp/async-data-fetch';
import reducer, { actions, actionTypes } from './reducer';

describe('reducer', () => {
  describe('initial state', () => {
    it('is loading', () => {
      const state = reducer(undefined, {});
      expect(state.loading).toBeTruthy();
    });
    it('has no name', () => {
      const state = reducer(undefined, {});
      expect(state.name).toBe('');
    });
    it('has no charts', () => {
      const state = reducer(undefined, {});
      expect(state.charts).toHaveLength(0);
    });
    it('is not in edit mode', () => {
      const state = reducer(undefined, {});
      expect(state.edit).toBeFalsy();
    });
  });

  it('receives the name when a new report is selected', () => {
    const state = reducer(undefined, {
      type: `get_report_${asyncDataFetchActions.FETCH_START}`,
      args: {
        name: 'A new report',
      },
    });
    expect(state.name).toBe('A new report');
  });

  describe('FETCH_SUCCESS', () => {
    it('stops loading', () => {
      const state = reducer(undefined, {
        type: `get_report_${asyncDataFetchActions.FETCH_SUCCESS}`,
      });
      expect(state.loading).toBeFalsy();
    });
    it('stores the retrieved chart information', () => {
      const state = reducer(undefined, {
        type: `get_report_${asyncDataFetchActions.FETCH_SUCCESS}`,
        result: ['a chart', 'another chart'],
      });
      expect(state.charts).toEqual(['a chart', 'another chart']);
    });
  });

  it('EDIT_NAME sets edit mode', () => {
    const state = reducer(undefined, {
      type: actionTypes.EDIT_NAME,
    });
    expect(state.edit).toBeTruthy();
  });

  describe('SAVE_CHANGES', () => {
    it('removes edit mode', () => {
      const initialState = reducer(undefined, {});
      const state = reducer(initialState, {
        type: actionTypes.SAVE_CHANGES,
      });
      expect(state.edit).toBeFalsy();
    });
    it('stores the new name', () => {
      const initialState = reducer(undefined, {});
      const state = reducer(initialState, {
        type: actionTypes.SAVE_CHANGES,
        name: 'a new name',
      });
      expect(state.name).toBe('a new name');
    });
  });

  describe('actions', () => {
    it('editName', () => {
      expect(actions.editName()).toEqual({
        type: actionTypes.EDIT_NAME,
      });
    });
    it('saveChanges', () => {
      expect(actions.saveChanges('a new name')).toEqual({
        type: actionTypes.SAVE_CHANGES,
        name: 'a new name',
      });
    });
  });
});
