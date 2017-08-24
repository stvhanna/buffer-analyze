import { actions } from '@bufferapp/async-data-fetch';

export default ({ dispatch }) => next => (action) => { // eslint-disable-line no-unused-vars
  switch (action.type) {
    case 'PROFILE_SELECTED':
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
