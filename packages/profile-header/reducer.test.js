import { actionTypes as asyncDataFetchActions } from '@bufferapp/async-data-fetch';
import reducer from './reducer';

describe('reducer', () => {
  it('has followers count as 0 in initial state', () => {
    const followersCount = reducer(undefined, {
      type: 'TEST_ACTION',
    }).followersCount;
    expect(followersCount).toEqual(0);
  });
  it('updates the state with the followers count received on fetch_success', () => {
    const state = reducer(undefined, {
      type: `followers_${asyncDataFetchActions.FETCH_SUCCESS}`,
      result: { currentFollowerCount: 255 },
    });
    expect(state.followersCount).toEqual(255);
  });
});
