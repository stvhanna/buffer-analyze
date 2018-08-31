import { actions } from '@bufferapp/async-data-fetch';
import { actionTypes as profileActionTypes } from '@bufferapp/analyze-profile-selector';
import { actionTypes as dateActionTypes } from '@bufferapp/analyze-date-picker';
import { actionTypes as exportActionTypes, actions as exportActions } from '@bufferapp/analyze-png-export';
import { actionTypes as exportCSVActionTypes, actions as exportCSVActions } from '@bufferapp/analyze-csv-export';

const formatDataForCSVExport = ({ hashtags, labels }) => {
  const primaryMetricLabel = labels.primary_metric;
  const secondaryMetricLabel = labels.secondary_metric;
  const data = {
    hashtags: [],
    'Posts count': [],
    [primaryMetricLabel]: [],
    [secondaryMetricLabel]: [],
  };

  hashtags.forEach((hashtag) => {
    data.hashtags.push(hashtag.display_name);
    data['Posts count'].push(hashtag.posts_count);
    data[primaryMetricLabel].push(hashtag.primary_metric);
    data[secondaryMetricLabel].push(hashtag.secondary_metric);
  });

  return data;
};

export default store => next => (action) => { // eslint-disable-line no-unused-vars
  const { dispatch, getState } = store;
  switch (action.type) {
    case profileActionTypes.SELECT_PROFILE:
      dispatch(actions.fetch({
        name: 'hashtags',
        args: {
          profileId: action.profile.id,
          profileService: action.profile.service,
          startDate: getState().date.startDate,
          endDate: getState().date.endDate,
        },
      }));
      break;
    case dateActionTypes.SET_DATE_RANGE:
      if (getState().profiles.selectedProfileId) {
        dispatch(actions.fetch({
          name: 'hashtags',
          args: {
            profileId: getState().profiles.selectedProfileId,
            profileService: getState().profiles.selectedProfile.service,
            startDate: action.startDate,
            endDate: action.endDate,
          },
        }));
      }
      break;
    case exportActionTypes.EXPORT_TO_PNG_START:
      dispatch(exportActions.exportChart('js-dom-to-png-hashtags', 'posts-hashtags'));
      break;
    case exportCSVActionTypes.EXPORT_TO_CSV_START:
      dispatch(exportCSVActions.exportChart('posts-hashtags', formatDataForCSVExport(getState().hashtags)));
      break;
    default:
      break;
  }
  return next(action);
};
