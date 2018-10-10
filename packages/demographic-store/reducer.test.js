import { actionTypes as asyncDataFetchActions } from '@bufferapp/async-data-fetch';
import reducer from './reducer';

describe('reducer', () => {
  it('expose the correct initial state', () => {
    const {
      metrics,
      loading,
    } = reducer(undefined, {
      type: 'TEST_ACTION',
    });
    expect(metrics).toEqual([]);
    expect(loading).toBeTruthy();
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
  });
});
