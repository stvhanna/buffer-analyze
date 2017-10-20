import { actions } from '@bufferapp/async-data-fetch';
import { actionTypes } from './actions';

export default store => next => (action) => { // eslint-disable-line no-unused-vars
  switch (action.type) {
    case actionTypes.CREATE_REPORT:
      store.dispatch(actions.fetch({
        name: 'create_report',
        args: {
          userId: store.getState().appSidebar.user.id,
          profileId: store.getState().profiles.selectedProfileId,
          chartId: action.chart_id,
          name: action.name,
        },
      }));
      break;
    default:
      break;
  }
  return next(action);
};
