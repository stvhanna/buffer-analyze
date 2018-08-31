import { actions, actionTypes as fetchActions } from '@bufferapp/async-data-fetch';

export default store => next => (action) => { // eslint-disable-line no-unused-vars
  switch (action.type) {
    case `profiles_${fetchActions.FETCH_SUCCESS}`:
      store.dispatch(actions.fetch({
        name: 'get_account_details',
        args: {
          organizationId: action.result[0].organizationId,
        },
      }));
      break;
    default:
      break;
  }
  return next(action);
};
