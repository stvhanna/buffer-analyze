import { chronos } from '@bufferapp/chronos';
import { actions as fetchActions } from '@bufferapp/async-data-fetch';

export const actionTypes = {
  PERFORMANCE_START_MEASURE: 'PERFORMANCE_START_MEASURE',
  PERFORMANCE_STOP_MEASURE: 'PERFORMANCE_STOP_MEASURE',
  PERFORMANCE_MEASURE_FROM_EVENT: 'MEASURE_FROM_EVENT',
  PERFORMANCE_MEASURE_FROM_NAVIGATION_START: 'MEASURE_FROM_NAVIGATION_START',
};

export const actions = {
  startMeasure: ({ name, data }) => ({
    type: actionTypes.PERFORMANCE_START_MEASURE,
    measureName: name,
    measureData: data,
  }),
  measureFromSpecialEvent: ({ name, data }) => ({
    type: actionTypes.PERFORMANCE_MEASURE_FROM_EVENT,
    measureName: name,
    measureData: data,
  }),
  measureFromNavigationStart: ({ name, data }) => ({
    type: actionTypes.PERFORMANCE_MEASURE_FROM_NAVIGATION_START,
    measureName: name,
    measureData: data,
  }),
  stopMeasure: ({ name }) => ({
    type: actionTypes.PERFORMANCE_STOP_MEASURE,
    measureName: name,
  }),
};

export default ({ dispatch }) => next => (action) => {
  const thisChronos = chronos({
    store: (data) => {
      dispatch(fetchActions.fetch({
        name: 'performance',
        args: { data },
      }));
    },
  });

  const data = Object.assign({}, action.measureData);
  if (!data.tags) data.tags = [];
  data.tags.push('product:analyze');

  switch (action.type) {
    case actionTypes.PERFORMANCE_START_MEASURE:
      thisChronos.startMeasure(action.measureName, data);
      break;
    case actionTypes.PERFORMANCE_STOP_MEASURE:
      thisChronos.stopMeasure(action.measureName);
      break;
    case actionTypes.PERFORMANCE_MEASURE_FROM_EVENT:
      thisChronos.measureFromSpecialEvent(action.measureName, data);
      break;
    case actionTypes.PERFORMANCE_MEASURE_FROM_NAVIGATION_START:
      thisChronos.measureFromNavigationStart(action.measureName, data);
      break;
    default:
      break;
  }
  next(action);
};
