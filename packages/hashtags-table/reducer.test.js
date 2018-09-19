import { actionTypes as asyncDataFetchActions } from '@bufferapp/async-data-fetch';
import { actionTypes as profileActionTypes } from '@bufferapp/analyze-profile-selector';
import reducer, { actions as hashtagsActions, actionTypes as hashtagsActionTypes } from './reducer';

describe('reducer', () => {
  it('has no data in initial state', () => {
    const data = reducer(undefined, {
      type: 'TEST_ACTION',
    });
    expect(data.hashtags).toEqual([]);
    expect(data.labels).toEqual([]);
  });
  it('initial state is loading', () => {
    const loading = reducer(undefined, {
      type: 'TEST_ACTION',
    }).loading;
    expect(loading).toBeTruthy();
  });
  it('has no data upon receiving FETCH_START', () => {
    const data = reducer(undefined, {
      type: `hashtags_${asyncDataFetchActions.FETCH_START}`,
    });
    expect(data.hashtags).toEqual([]);
    expect(data.labels).toEqual([]);
  });
  it('on fetch_success stops loading', () => {
    const hashtags = ['one', 'two', 'three'];
    const state = reducer(undefined, {
      type: `hashtags_${asyncDataFetchActions.FETCH_SUCCESS}`,
      result: hashtags,
    });
    expect(state.loading).toBeFalsy();
  });
  it('updates the state with the data received on fetch_success', () => {
    const hashtags = ['one', 'two', 'three'];
    const labels = ['foo'];
    const state = reducer(undefined, {
      type: `hashtags_${asyncDataFetchActions.FETCH_SUCCESS}`,
      result: { hashtags, labels },
    });
    expect(state.hashtags).toEqual(hashtags);
    expect(state.labels).toEqual(labels);
  });
  it('returns the initial state of hashtags when a new profile is selected', () => {
    const newState = reducer(undefined, {
      type: `${profileActionTypes.SELECT_PROFILE}`,
    });
    expect(newState.hashtags).toEqual([]);
    expect(newState.labels).toEqual([]);
  });
  it(`change sort order on ${hashtagsActionTypes.SORT_BY}`, () => {
    const state = reducer(undefined, {
      type: hashtagsActionTypes.SORT_BY,
      sortBy: 'foo',
      isDescending: false,
    });
    expect(state.sortBy).toBe('foo');
    expect(state.isDescending).toBeFalsy();
  });
  it('returns the right action upon sortBy', () => {
    const newAction = hashtagsActions.sortBy('foo', false);
    expect(newAction).toEqual({
      type: `${hashtagsActionTypes.SORT_BY}`,
      isDescending: false,
      sortBy: 'foo',
    });
  });
});
