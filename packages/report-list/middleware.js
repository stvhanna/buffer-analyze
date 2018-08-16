import { LOCATION_CHANGE } from 'react-router-redux';
import { actions, actionTypes } from '@bufferapp/async-data-fetch';
import { actionTypes as reportListActionTypes } from './reducer';

export default store => next => (action) => { // eslint-disable-line no-unused-vars
  switch (action.type) {
    case `profiles_${actionTypes.FETCH_SUCCESS}`:
      store.dispatch(actions.fetch({
        name: 'list_reports',
        args: {
          organizationId: action.result[0].organizationId,
        },
      }));
      break;
    case LOCATION_CHANGE:
      if (action.payload.pathname === '/reports') {
        store.dispatch(actions.fetch({
          name: 'list_reports',
          args: {
            organizationId: store.getState().profiles.organizationId,
          },
        }));
      }
      break;
    case reportListActionTypes.REMOVE_REPORT:
      store.dispatch(actions.fetch({
        name: 'remove_report',
        args: {
          id: action.id,
        },
      }));
      break;
    default:
      break;
  }
  return next(action);
};
