import { actionTypes as dataFetchActionTypes } from '@bufferapp/async-data-fetch';

const getRedirectURL = () => {
  console.log('redirect?', window.location.hostname);
  if (window.location.hostname === 'analyze.local.buffer.com') {
    return 'https://local.buffer.com/analyze';
  }
  return 'https://buffer.com/analyze';
};

export default () => next => (action) => {
  switch (action.type) {
    case `profiles_${dataFetchActionTypes.FETCH_SUCCESS}`: {
      const profiles = action.result;
      // if there aren't any active analyze profiles
      // then redirect back to the home page
      if (profiles.length < 1) {
        window.location.assign(getRedirectURL());
      }
      break;
    }
    default:
      break;
  }
  return next(action);
};
