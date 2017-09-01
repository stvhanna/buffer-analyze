import { actionTypes as asyncDataFetchActionTypes } from '@bufferapp/async-data-fetch';

export const actionTypes = {};

const initialState = {
  loading: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case `profiles_${asyncDataFetchActionTypes.FETCH_START}`:
      return {
        loading: true,
      };
    case `profiles_${asyncDataFetchActionTypes.FETCH_SUCCESS}`:
      return {
        loading: false,
      };
    default:
      return state;
  }
};

export const actions = {};
