import { actions as asyncDataFetchActions } from '@bufferapp/async-data-fetch';

export default ({ dispatch }) => next => (action) => {
  switch (action.type) {
    case 'APP_INIT':
      dispatch(asyncDataFetchActions.fetch({
        name: 'profiles',
      }));
      break;
    default:
      break;
  }
  return next(action);
};
