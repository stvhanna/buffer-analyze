import { actionTypes } from '@bufferapp/async-data-fetch';
import reducer from './reducer';

const profiles = [{
  service: 'facebook',
  name: 'Facebook Page!',
}, {
  service: 'twitter',
  name: 'Twitter account name',
}, {
  service: 'instagram',
  name: 'Instagram handle',
}];

describe('reducer', () => {
  it('has no profiles as initial state', () => {
    const state = reducer(undefined, {
      type: 'TEST_ACTION',
    });
    expect(state.profiles).toEqual([]);
  });

  it('updates the state with the profiles received on fetch_success', () => {
    const state = reducer(undefined, {
      type: `profiles_${actionTypes.FETCH_SUCCESS}`,
      result: profiles,
    });
    expect(state.profiles).toEqual(profiles);
  });

  it('stores the first Facebook profile received on FETCH_SUCCESS as facebookProfile', () => {
    const state = reducer(undefined, {
      type: `profiles_${actionTypes.FETCH_SUCCESS}`,
      result: profiles,
    });
    expect(state.facebookProfile.name).toEqual('Facebook Page!');
  });

  it('stores the first Twitter profile received on FETCH_SUCCESS as twitterProfile', () => {
    const state = reducer(undefined, {
      type: `profiles_${actionTypes.FETCH_SUCCESS}`,
      result: profiles,
    });
    expect(state.twitterProfile.name).toEqual('Twitter account name');
  });

  it('stores the first Instagram profile received on FETCH_SUCCESS as instagramProfile', () => {
    const state = reducer(undefined, {
      type: `profiles_${actionTypes.FETCH_SUCCESS}`,
      result: profiles,
    });
    expect(state.instagramProfile.name).toEqual('Instagram handle');
  });
});
