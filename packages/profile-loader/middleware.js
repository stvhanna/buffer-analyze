import { actionTypes, actions as asyncDataFetchActions } from '@bufferapp/async-data-fetch';

export default ({ dispatch }) => next => (action) => {
  switch (action.type) {
    case `login_${actionTypes.FETCH_SUCCESS}`:
      dispatch(asyncDataFetchActions.fetch({
        name: 'profiles',
      }));
      break;
    default:
      break;
  }
  return next(action);
};
