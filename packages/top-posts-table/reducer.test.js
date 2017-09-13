import { actionTypes as asyncDataFetchActions } from '@bufferapp/async-data-fetch';
import reducer from './reducer';

describe('reducer', () => {
  it('has no topPosts in initial state', () => {
    const topPosts = reducer(undefined, {
      type: 'TEST_ACTION',
    }).topPosts;
    expect(topPosts).toEqual([]);
  });
  it('initial state is loading', () => {
    const loading = reducer(undefined, {
      type: 'TEST_ACTION',
    }).loading;
    expect(loading).toBeTruthy();
  });
  it('has no top posts upon receiving FETCH_START', () => {
    const topPosts = reducer(undefined, {
      type: `top_posts_${asyncDataFetchActions.FETCH_START}`,
    }).topPosts;
    expect(topPosts).toEqual([]);
  });
  it('on fetch_success stops loading', () => {
    const state = reducer(undefined, {
      type: `top_posts_${asyncDataFetchActions.FETCH_SUCCESS}`,
    });
    expect(state.loading).toBeFalsy();
  });
  it('updates the state with the posts received on fetch_success', () => {
    const topPosts = ['one', 'two', 'three'];
    const state = reducer(undefined, {
      type: `top_posts_${asyncDataFetchActions.FETCH_SUCCESS}`,
      result: topPosts,
    });
    expect(state.topPosts).toEqual(topPosts);
  });
});
