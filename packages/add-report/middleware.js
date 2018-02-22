import { actions } from '@bufferapp/async-data-fetch';
import { actionTypes } from './actions';

export default store => next => (action) => { // eslint-disable-line no-unused-vars
  switch (action.type) {
    case actionTypes.ADD_TO_REPORT:
      store.dispatch(actions.fetch({
        name: 'add_chart_to_report',
        args: {
          reportId: action.reportId,
          profileId: store.getState().profiles.selectedProfileId,
          chartId: action.chart_id,
          state: action.state,
        },
      }));
      break;
    case actionTypes.CREATE_REPORT:
      store.dispatch(actions.fetch({
        name: 'create_report',
        args: {
          userId: store.getState().appSidebar.user.id,
          profileId: store.getState().profiles.selectedProfileId,
          chartId: action.chart_id,
          name: action.name,
          state: action.state,
          dateRange: {
            range: store.getState().date.presets.find(preset => preset.selected).range,
            start: store.getState().date.startDate,
            end: store.getState().date.endDate,
          },
        },
      }));
      break;
    default:
      break;
  }
  return next(action);
};
