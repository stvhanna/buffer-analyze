import { actionTypes as asyncDataFetchActions } from '@bufferapp/async-data-fetch';
import reducer from './reducer';

describe('reducer', () => {
  it('it is loading by default', () => {
    const state = reducer(undefined, {
      type: 'TEST_ACTION',
    });
    expect(state.loading).toBe(true);
  });
  it('stops loading on FETCH_SUCCESS', () => {
    const state = reducer(undefined, {
      type: `profiles_${asyncDataFetchActions.FETCH_SUCCESS}`,
    });
    expect(state.loading).toBe(false);
  });

  it('loads again on profiles_FETCH_START', () => {
    const previousState = reducer(undefined, {
      type: `profiles_${asyncDataFetchActions.FETCH_SUCCESS}`,
    });
    const state = reducer(previousState, {
      type: `profiles_${asyncDataFetchActions.FETCH_START}`,
    });
    expect(state.loading).toBe(true);
  });
});
