import { actionTypes as asyncDataFetchActions } from '@bufferapp/async-data-fetch';
import reducer from './reducer';

describe('reducer', () => {
  it('has no data in initial state', () => {
    const data = reducer(undefined, {
      type: 'TEST_ACTION',
    }).data;
    expect(data).toEqual({});
  });
  it('updates the state with the data received on fetch_success', () => {
    const data = ['one', 'two', 'three'];
    const state = reducer(undefined, {
      type: `profiles_overview_${asyncDataFetchActions.FETCH_SUCCESS}`,
      result: data,
    });
    expect(state.data).toEqual(data);
  });
});
