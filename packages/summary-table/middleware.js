import { actions } from '@bufferapp/async-data-fetch';
import { actionTypes as profileActionTypes } from '@bufferapp/nav-sidebar';

export default ({ dispatch }) => next => (action) => { // eslint-disable-line no-unused-vars
  switch (action.type) {
    case profileActionTypes.SELECT_PROFILE:
      dispatch(actions.fetch({
        name: 'summary',
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
