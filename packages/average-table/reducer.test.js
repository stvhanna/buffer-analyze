import { actionTypes as asyncDataFetchActions } from '@bufferapp/async-data-fetch';
import reducer from './reducer';

describe('reducer', () => {
  it('has no metrics in initial state', () => {
    const metrics = reducer(undefined, {
      type: 'TEST_ACTION',
    }).metrics;
    expect(metrics).toEqual({ totals: [], daily: [] });
  });
  it('initial state is loading', () => {
    const loading = reducer(undefined, {
      type: 'TEST_ACTION',
    }).loading;
    expect(loading).toBeTruthy();
  });
  it('on fetch_success stops loading', () => {
    const state = reducer(undefined, {
      type: `average_${asyncDataFetchActions.FETCH_SUCCESS}`,
    });
    expect(state.loading).toBeFalsy();
  });
  it('updates the state with the metrics received on fetch_success', () => {
    const metrics = ['one', 'two', 'three'];
    const state = reducer(undefined, {
      type: `average_${asyncDataFetchActions.FETCH_SUCCESS}`,
      result: metrics,
    });
    expect(state.metrics).toEqual(metrics);
  });
});
