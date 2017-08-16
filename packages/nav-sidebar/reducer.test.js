import { actionTypes } from '@bufferapp/async-data-fetch';
import reducer from './reducer';

describe('reducer', () => {
  it('has no profiles as initial state', () => {
    const profiles = reducer(undefined, {
      type: 'TEST_ACTION',
    }).profiles;
    expect(profiles).toEqual([]);
  });

  it('updates the state with the profiles received on fetch_success', () => {
    const profiles = ['a profile', 'another profile', 'a third profile'];
    const state = reducer(undefined, {
      type: `profiles_${actionTypes.FETCH_SUCCESS}`,
      result: profiles,
    });
    expect(state.profiles).toEqual(profiles);
  });
});
