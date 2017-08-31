import { actions } from '@bufferapp/async-data-fetch';
import { actionTypes as profileActionTypes } from '@bufferapp/analyze-profile-selector';

export default ({ dispatch }) => next => (action) => {
  switch (action.type) {
    case profileActionTypes.SELECT_PROFILE:
      dispatch(actions.fetch({
        name: 'analytics_start_date',
        args: {
          profileId: action.id,
        },
      }));
      break;
    default:
      break;
  }
  return next(action);
};
