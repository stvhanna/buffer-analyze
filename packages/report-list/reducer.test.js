import { actionTypes as asyncDataFetchActions } from '@bufferapp/async-data-fetch';
import reducer, { actions, actionTypes } from './reducer';

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

  it('removeReport triggers REMOVE_REPORT', () => {
    const id = 'report-123';
    expect(actions.removeReport(id)).toEqual({
      type: actionTypes.REMOVE_REPORT,
      id,
    });
  });

  it('filters out the removed report on remover_report_FETCH_SUCCESS', () => {
    const id = 'report-123';
    const reports = [{ _id: 'report-123' }, { _id: 'report-654' }];
    const reportsFilteredState = reducer({
      reports,
    }, {
      type: `remove_report_${asyncDataFetchActions.FETCH_SUCCESS}`,
      result: {
        id,
      },
    });
    expect(reportsFilteredState.reports).toHaveLength(1);
    expect(reportsFilteredState.reports[0]._id).toBe('report-654');
  });

  it('prepends the newly created report on create_report_FETCH_SUCCESS', () => {
    const state = reducer(undefined, {
      type: `list_reports_${asyncDataFetchActions.FETCH_SUCCESS}`,
      result: [{
        name: 'a report',
      }],
    });
    const stateWithNewReport = reducer(state, {
      type: `create_report_${asyncDataFetchActions.FETCH_SUCCESS}`,
      result: {
        name: 'a new report',
      },
    });
    expect(stateWithNewReport.reports[0].name).toEqual('a new report');
  });
});
