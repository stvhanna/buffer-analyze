import { actionTypes as asyncDataFetchActionTypes } from '@bufferapp/async-data-fetch';
import { actionTypes as profileActionTypes } from '@bufferapp/analyze-profile-selector';

import keyWrapper from '@bufferapp/keywrapper';

export const actionTypes = keyWrapper('POSTS_TABLE', {
  SELECT_TOP_POSTS_METRIC: 'SELECT_TOP_POSTS_METRIC',
  TOGGLE_TOP_POSTS_DROPDOWN: 'TOGGLE_TOP_POSTS_DROPDOWN',
  SELECT_TOP_POSTS_COUNT: 'SELECT_TOP_POSTS_COUNT',
  SELECT_TOP_POSTS_ORDER: 'SELECT_TOP_POSTS_ORDER',
  SEARCH: 'SEARCH',
});

const initialState = {
  posts: [],
  loading: true,
  metrics: [],
  isDropdownOpen: false,
  isDescendingSelected: true,
  selectedMetric: {},
  activePostsCount: 10,
  searchTerms: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case `posts_${asyncDataFetchActionTypes.FETCH_START}`:
      return {
        ...initialState,
        activePostsCount: parseInt(state.activePostsCount, 10),
        selectedMetric: state.selectedMetric,
        isDescendingSelected: state.isDescendingSelected,
        searchTerms: state.searchTerms,
      };
    case `posts_${asyncDataFetchActionTypes.FETCH_SUCCESS}`:
      return {
        ...state,
        loading: false,
        posts: action.result,
      };
    case actionTypes.SELECT_TOP_POSTS_METRIC:
      return {
        ...state,
        isDropdownOpen: false,
        selectedMetric: action.metric,
      };
    case actionTypes.SELECT_TOP_POSTS_COUNT:
      return {
        ...state,
        activePostsCount: parseInt(action.postsCount, 10),
      };
    case actionTypes.TOGGLE_TOP_POSTS_DROPDOWN:
      return {
        ...state,
        isDropdownOpen: !state.isDropdownOpen,
      };
    case profileActionTypes.SELECT_PROFILE:
      return {
        ...initialState,
      };
    case actionTypes.SELECT_TOP_POSTS_ORDER:
      return {
        ...state,
        isDescendingSelected: action.isDescendingSelected,
      };
    case actionTypes.SEARCH:
      return {
        ...state,
        searchTerms: action.tags,
      };
    default:
      return state;
  }
};

export const actions = {
  selectMetric(metric) {
    return {
      type: actionTypes.SELECT_TOP_POSTS_METRIC,
      metric,
    };
  },
  toggleDropdown() {
    return {
      type: actionTypes.TOGGLE_TOP_POSTS_DROPDOWN,
    };
  },
  handlePostsCountClick(postsCount) {
    return {
      type: actionTypes.SELECT_TOP_POSTS_COUNT,
      postsCount,
    };
  },
  handlePostsSortClick(isDescendingSelected) {
    return {
      type: actionTypes.SELECT_TOP_POSTS_ORDER,
      isDescendingSelected,
    };
  },
  search(tags) {
    return {
      type: actionTypes.SEARCH,
      tags,
    };
  },
};
