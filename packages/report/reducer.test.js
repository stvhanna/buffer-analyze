import { actionTypes as asyncDataFetchActions } from '@bufferapp/async-data-fetch';
import reducer from './reducer';

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
});
