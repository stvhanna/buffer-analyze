import { actionTypes as dataFetchActionTypes } from '@bufferapp/async-data-fetch';

const initialState = {
  profiles: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case `profiles_${dataFetchActionTypes.FETCH_SUCCESS}`:
      return {
        profiles: action.result,
      };
    default:
      return state;
  }
};

export const actionTypes = {
  SELECT_PROFILE: 'SELECT_PROFILE',
};

export const actions = {
  selectProfile: profileId => ({
    type: actionTypes.SELECT_PROFILE,
    id: profileId,
  }),
};
