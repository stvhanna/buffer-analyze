import { actionTypes as asyncDataFetchActions } from '@bufferapp/async-data-fetch';
import reducer from './reducer';

describe('reducer', () => {
  describe('initial state', () => {
    it('is loading', () => {
      const state = reducer(undefined, {});
      expect(state.loading).toBeTruthy();
    });
    it('has no reports', () => {
      const state = reducer(undefined, {});
      expect(state.reports).toHaveLength(0);
    });
  });

  it('stops loading when list_reports_FETCH_SUCCESS is triggered', () => {
    const state = reducer(undefined, {
      type: `list_reports_${asyncDataFetchActions.FETCH_SUCCESS}`,
    });
    expect(state.loading).toBeFalsy();
  });

  it('stores reports when list_reports_FETCH_SUCCESS is triggered', () => {
    const state = reducer(undefined, {
      type: `list_reports_${asyncDataFetchActions.FETCH_SUCCESS}`,
      result: ['a report', 'another report'],
    });
    expect(state.reports).toEqual(['a report', 'another report']);
  });

  it('is loading again when list_reports_FETCH_START begins', () => {
    const loadedState = reducer(undefined, {
      type: `list_reports_${asyncDataFetchActions.FETCH_SUCCESS}`,
    });
    const state = reducer(loadedState, {
      type: `list_reports_${asyncDataFetchActions.FETCH_START}`,
    });
    expect(state.loading).toBeTruthy();
  });

  it('empties reports when list_reports_FETCH_START begins', () => {
    const loadedState = reducer(undefined, {
      type: `list_reports_${asyncDataFetchActions.FETCH_SUCCESS}`,
      result: ['a report', 'another report'],
    });
    const state = reducer(loadedState, {
      type: `list_reports_${asyncDataFetchActions.FETCH_START}`,
    });
    expect(state.reports).toHaveLength(0);
  });
});
