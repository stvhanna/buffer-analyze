import { actionTypes as dataFetchActionTypes } from '@bufferapp/async-data-fetch';

const getFirstProfileForService = (service, profiles) => (
  profiles.find(profile => profile.service === service)
);

const initialState = {
  profiles: [],
  facebookProfile: null,
  twitterProfile: null,
  instagramProfile: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case `profiles_${dataFetchActionTypes.FETCH_SUCCESS}`:
      return {
        profiles: action.result,
        facebookProfile: getFirstProfileForService('facebook', action.result),
        twitterProfile: getFirstProfileForService('twitter', action.result),
        instagramProfile: getFirstProfileForService('instagram', action.result),
      };
    default:
      return state;
  }
};
