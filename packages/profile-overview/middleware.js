import { actions, actionTypes as asyncDataFetchActionTypes } from '@bufferapp/async-data-fetch';

export default store => next => (action) => { // eslint-disable-line no-unused-vars
  const { dispatch } = store;
  switch (action.type) {
    case `profiles_${asyncDataFetchActionTypes.FETCH_SUCCESS}`:
      dispatch(actions.fetch({
        name: 'profiles_overview',
        args: {
          profiles: action.result.map(profile => profile.id),
        },
      }));
      break;
    default:
      break;
  }
  return next(action);
};
