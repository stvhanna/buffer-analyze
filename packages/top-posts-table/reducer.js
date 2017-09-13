import { actionTypes as asyncDataFetchActionTypes } from '@bufferapp/async-data-fetch';

export const actionTypes = {};

const initialState = {
  topPosts: [],
  loading: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case `top_posts_${asyncDataFetchActionTypes.FETCH_START}`:
      return initialState;
    case `top_posts_${asyncDataFetchActionTypes.FETCH_SUCCESS}`:
      return {
        ...state,
        loading: false,
        topPosts: action.result,
      };
    default:
      return state;
  }
};

export const actions = {};
