import { actions } from '@bufferapp/async-data-fetch';
import { actionTypes as profileActionTypes } from '@bufferapp/analyze-profile-selector';
import { actionTypes as dateActionTypes } from '@bufferapp/analyze-date-picker';
import { actionTypes as exportActionTypes, actions as exportActions } from '@bufferapp/analyze-png-export';
import { actionTypes as topPostsActionTypes } from './reducer';

export default store => next => (action) => { // eslint-disable-line no-unused-vars
  const { dispatch, getState } = store;
  switch (action.type) {
    case exportActionTypes.EXPORT_TO_PNG_START:
      dispatch(exportActions.exportChart('js-dom-to-png-top-posts', 'top-posts'));
      break;
    case topPostsActionTypes.SELECT_TOP_POSTS_METRIC:
      dispatch(actions.fetch({
        name: 'top_posts',
        args: {
          profileId: getState().profiles.selectedProfileId,
          startDate: getState().date.startDate,
          endDate: getState().date.endDate,
          sortBy: action.metric.apiKey,
          descending: action.descending,
          limit: getState().topPosts.activePostsCount,
        },
      }));
      break;
    case topPostsActionTypes.SELECT_TOP_POSTS_COUNT:
      dispatch(actions.fetch({
        name: 'top_posts',
        args: {
          profileId: getState().profiles.selectedProfileId,
          startDate: getState().date.startDate,
          endDate: getState().date.endDate,
          sortBy: getState().topPosts.selectedMetric.apiKey,
          descending: getState().topPosts.isDescendingSelected,
          limit: action.postsCount,
        },
      }));
      break;
    case profileActionTypes.SELECT_PROFILE:
      dispatch(actions.fetch({
        name: 'top_posts',
        args: {
          profileId: action.id,
          startDate: getState().date.startDate,
          endDate: getState().date.endDate,
        },
      }));
      break;
    case dateActionTypes.SET_DATE_RANGE:
      dispatch(actions.fetch({
        name: 'top_posts',
        args: {
          profileId: getState().profiles.selectedProfileId,
          startDate: action.startDate,
          endDate: action.endDate,
          sortBy: getState().topPosts.selectedMetric.apiKey,
          descending: getState().topPosts.isDescendingSelected,
          limit: getState().topPosts.activePostsCount,
        },
      }));
      break;
    default:
      break;
  }
  return next(action);
};
