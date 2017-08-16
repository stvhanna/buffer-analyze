import { actionTypes, actions } from '@bufferapp/async-data-fetch';

export default ({ dispatch }) => next => (action) => {
  next(action);
  switch (action.type) {
    case `login_${actionTypes.FETCH_SUCCESS}`:
      dispatch(actions.fetch({
        name: 'profiles',
      }));
      break;
    default:
      break;
  }
};
