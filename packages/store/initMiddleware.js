import { actions as performanceActions } from '@bufferapp/performance-tracking';
import {
  actions as dataFetchActions,
  actionTypes as dataFetchActionTypes,
} from '@bufferapp/async-data-fetch';

export default ({ dispatch }) => next => (action) => {
  next(action);
  switch (action.type) {
    case 'APP_INIT':
        dispatch(performanceActions.measureFromNavigationStart({ name: 'init' }));
        dispatch(dataFetchActions.fetch({ name: 'user' }));
        break;
    case `user_${dataFetchActionTypes.FETCH_SUCCESS}`:
        /* eslint-disable */
        if (FS) {
            FS.identify(action.result.id, {
              email: action.result.email,
          });
        }
        break;
    default:
    break;
}
};
