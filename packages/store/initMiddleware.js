import { actions as performanceActions } from '@bufferapp/performance-tracking';

export default ({ dispatch }) => next => (action) => {
  next(action);
  switch (action.type) {
    case 'APP_INIT':
      dispatch(performanceActions.measureFromNavigationStart({ name: 'init' }));
      break;
    default:
      break;
  }
};
