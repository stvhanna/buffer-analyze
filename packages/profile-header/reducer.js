import { actionTypes as asyncDataFetchActionTypes } from '@bufferapp/async-data-fetch';

export const actionTypes = {};

const initialState = {
  followersCount: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case `profile_header_${asyncDataFetchActionTypes.FETCH_START}`:
      return initialState;
    case `profile_header_${asyncDataFetchActionTypes.FETCH_SUCCESS}`:
      return {
        followersCount: action.result,
      };
    default:
      return state;
  }
};

export const actions = {};
