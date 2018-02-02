import { chronos } from '@bufferapp/chronos';
import {
  actions as fetchActions,
  actionTypes as asyncActionTypes,
} from '@bufferapp/async-data-fetch';

import { actionTypes, actions } from './reducer';

const pendingMeasures = [];
let rpcCallTimeout;

function sendMeasuresToRPC (dispatch) {
  dispatch(fetchActions.fetch({
    name: 'performance',
    args: { measures: pendingMeasures.splice(0, pendingMeasures.length) },
  }));
}

export const storeMeasure = dispatch => (measure) => {
  pendingMeasures.push(measure);
  if (rpcCallTimeout) clearTimeout(rpcCallTimeout);
  rpcCallTimeout = setTimeout(sendMeasuresToRPC, 10000, dispatch);
};

function actionTypeRegExp(actionType) {
  // ignoring performance events to avoid tracking those
  return RegExp(`^(?!performance)\\w*_${actionType}$`);
}

function getNameFromActionType(actionType) {
  const parsedAction = actionType.match(/^([a-z]*)_/i);
  return parsedAction ? `${parsedAction[1]}Fetch` : null;
}

export default ({ dispatch }) => next => (action) => {
  const thisChronos = chronos({
    store: storeMeasure(dispatch),
  });

  switch (true) {
    case RegExp(actionTypes.PERFORMANCE_START_MEASURE).test(action.type):
      thisChronos.startMeasure(action.measureName, action.measureData);
      break;
    case RegExp(actionTypes.PERFORMANCE_STOP_MEASURE).test(action.type):
      thisChronos.stopMeasure(action.measureName);
      break;
    case RegExp(actionTypes.PERFORMANCE_MEASURE_FROM_EVENT).test(action.type):
      thisChronos.measureFromSpecialEvent(action.measureName, action.measureData);
      break;
    case RegExp(actionTypes.PERFORMANCE_MEASURE_FROM_NAVIGATION_START).test(action.type):
      thisChronos.measureFromNavigationStart(action.measureName, action.measureData);
      break;
    // Automatic Async Data Fetch tracking
    case actionTypeRegExp(asyncActionTypes.FETCH_START).test(action.type):
      dispatch(actions.startMeasure({
        name: getNameFromActionType(action.type),
      }));
      break;
    case actionTypeRegExp(asyncActionTypes.FETCH_SUCCESS).test(action.type):
      dispatch(actions.stopMeasure({
        name: getNameFromActionType(action.type),
      }));
      break;
    case actionTypeRegExp(asyncActionTypes.FETCH_FAIL).test(action.type):
      dispatch(actions.stopMeasure({
        name: getNameFromActionType(action.type),
      }));
      break;
    default:
      break;
  }
  next(action);
};
