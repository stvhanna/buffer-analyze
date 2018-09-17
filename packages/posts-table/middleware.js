import moment from 'moment';
import striptags from 'striptags';
import { actions } from '@bufferapp/async-data-fetch';
import { actionTypes as profileActionTypes } from '@bufferapp/analyze-profile-selector';
import { actionTypes as dateActionTypes } from '@bufferapp/analyze-date-picker';
import { actionTypes as exportActionTypes, actions as exportActions } from '@bufferapp/analyze-png-export';
import { actionTypes as exportCSVActionTypes, actions as exportCSVActions } from '@bufferapp/analyze-csv-export';
import { actionTypes as postsActionTypes } from './reducer';

const EXPORT_FILENAME = 'posts';

const formatMedia = (post) => {
  if (post.media) {
    return post.media.video ? post.media.video.details.transcoded_location : post.media.picture;
  }
};

const escapeText = (text) => {
  const escapedText = striptags(text, [], '\n').replace(/\n+/gm, ' ');
  return `"${escapedText}"`;
};

const formatDataForKey = (key, post, timezone) => {
  switch (key) {
    case 'date':
      return moment(post[key]).tz(timezone).format('MM/DD/YYYY HH:mm:ss');
    case 'media':
      return formatMedia(post);
    case 'text':
      return escapeText(post.text);
    default:
      return post[key];
  }
};

const getSelectedProfileTimezone = ({ profiles, selectedProfileId }) => {
  const selectedProfile = profiles.find(profile => profile.id === selectedProfileId);
  return selectedProfile.timezone;
};

const formatDataForCSVExport = ({ posts }, profileState) => {
  const keys = Object.keys(posts[0]);
  const timezone = getSelectedProfileTimezone(profileState);
  const data = {};
  keys.forEach((key) => {
    data[key] = [];
    posts.forEach((post) => {
      const formattedKey = formatDataForKey(key, post, timezone);
      if (key === 'statistics') {
        delete data.statistics;
        Object.keys(formattedKey).forEach((statistic) => {
          const value = formattedKey[statistic];
          if (data[statistic]) {
            data[statistic].push(value);
          } else data[statistic] = [value];
        });
      } else data[key].push(formattedKey);
    });
  });
  return data;
};


export default store => next => (action) => { // eslint-disable-line no-unused-vars
  const { dispatch, getState } = store;
  switch (action.type) {
    case exportCSVActionTypes.EXPORT_TO_CSV_START:
      if (getState().posts.posts.length) {
        dispatch(
          exportCSVActions.exportChart(
            EXPORT_FILENAME,
            formatDataForCSVExport(getState().posts, getState().profiles),
          ),
        );
      }
      break;
    case exportActionTypes.EXPORT_TO_PNG_START:
      dispatch(exportActions.exportChart('js-dom-to-png-posts', EXPORT_FILENAME));
      break;
    case postsActionTypes.SELECT_TOP_POSTS_METRIC:
      dispatch(actions.fetch({
        name: 'posts',
        args: {
          profileId: getState().profiles.selectedProfileId,
          startDate: getState().date.startDate,
          endDate: getState().date.endDate,
          sortBy: action.metric.apiKey,
          descending: getState().posts.isDescendingSelected,
          limit: getState().posts.activePostsCount,
          searchTerms: getState().posts.searchTerms,
        },
      }));
      break;
    case postsActionTypes.SELECT_TOP_POSTS_COUNT:
      dispatch(actions.fetch({
        name: 'posts',
        args: {
          profileId: getState().profiles.selectedProfileId,
          startDate: getState().date.startDate,
          endDate: getState().date.endDate,
          sortBy: getState().posts.selectedMetric.apiKey,
          descending: getState().posts.isDescendingSelected,
          limit: action.postsCount !== 'All' ? action.postsCount : undefined,
          searchTerms: getState().posts.searchTerms,
        },
      }));
      break;
    case postsActionTypes.SELECT_TOP_POSTS_ORDER:
      dispatch(actions.fetch({
        name: 'posts',
        args: {
          profileId: getState().profiles.selectedProfileId,
          startDate: getState().date.startDate,
          endDate: getState().date.endDate,
          sortBy: getState().posts.selectedMetric.apiKey,
          descending: action.isDescendingSelected,
          limit: getState().posts.activePostsCount,
          searchTerms: getState().posts.searchTerms,
        },
      }));
      break;
    case profileActionTypes.SELECT_PROFILE:
      dispatch(actions.fetch({
        name: 'posts',
        args: {
          profileId: action.profile.id,
          startDate: getState().date.startDate,
          endDate: getState().date.endDate,
        },
      }));
      break;
    case dateActionTypes.SET_DATE_RANGE:
      if (getState().profiles.selectedProfileId) {
        dispatch(actions.fetch({
          name: 'posts',
          args: {
            profileId: getState().profiles.selectedProfileId,
            startDate: action.startDate,
            endDate: action.endDate,
            sortBy: getState().posts.selectedMetric.apiKey,
            descending: getState().posts.isDescendingSelected,
            limit: getState().posts.activePostsCount,
            searchTerms: getState().posts.searchTerms,
          },
        }));
      }
      break;
    case postsActionTypes.SEARCH:
      dispatch(actions.fetch({
        name: 'posts',
        args: {
          profileId: getState().profiles.selectedProfileId,
          startDate: getState().date.startDate,
          endDate: getState().date.endDate,
          sortBy: getState().posts.selectedMetric.apiKey,
          descending: getState().isDescendingSelected,
          limit: getState().posts.activePostsCount,
          searchTerms: action.tags,
        },
      }));
      break;
    default:
      break;
  }
  return next(action);
};
