import { actionTypes as dataFetchActionTypes } from '@bufferapp/async-data-fetch';

const getRedirectURL = () => {
  if (window.location.hostname === 'analyze.local.buffer.com') {
    return 'https://local.buffer.com/analyze';
  }
  return 'https://buffer.com/analyze';
};

export default () => next => (action) => {
  next(action);
  switch (action.type) {
    case `user_${dataFetchActionTypes.FETCH_SUCCESS}`: {
      const { result: { features = [] } } = action;
      const hasEarlyAccess = features.includes('analyze_early_access');
      if (!hasEarlyAccess) {
        window.location.assign(getRedirectURL());
      }
      break;
    }
    default:
      break;
  }
};
