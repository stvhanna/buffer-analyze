import { actions, actionTypes } from '@bufferapp/async-data-fetch';

export default ({ dispatch }) => next => (action) => {
  switch (action.type) {
    case `user_${actionTypes.FETCH_SUCCESS}`:
      dispatch(actions.fetch({
        name: 'profiles',
        args: {
          id: action.result.id,
        },
      }));
      break;
    default:
      break;
  }
  return next(action);
};
