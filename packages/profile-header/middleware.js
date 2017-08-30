import { actionTypes as asyncDataFetchActionTypes, actions } from '@bufferapp/async-data-fetch';

export default ({ dispatch }) => next => (action) => { // eslint-disable-line no-unused-vars
  switch (action.type) {
    case `followers_${asyncDataFetchActionTypes.FETCH_START}`:
      dispatch(actions.fetch({
        name: 'followers',
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
