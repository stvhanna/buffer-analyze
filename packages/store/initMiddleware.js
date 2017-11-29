import { actions as asyncDataFetchActions } from '@bufferapp/async-data-fetch';
import { actions as performanceActions } from '@bufferapp/performance-tracking';

export default ({ dispatch }) => next => (action) => {
  next(action);
  switch (action.type) {
    case 'APP_INIT':
      dispatch(asyncDataFetchActions.fetch({ name: 'environment' }));
      dispatch(performanceActions.measureFromNavigationStart({ name: 'init' }));
      break;
    default:
      break;
  }
};
