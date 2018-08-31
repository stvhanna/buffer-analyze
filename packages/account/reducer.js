import { actionTypes as asyncDataFetchActionTypes } from '@bufferapp/async-data-fetch';

export const actionTypes = {};

const initialState = {
  trialDaysRemaining: -1,
  onTrial: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case `get_account_details_${asyncDataFetchActionTypes.FETCH_SUCCESS}`:
      return {
        ...state,
        trialDaysRemaining: action.result.daysRemaining,
        onTrial: action.result.onTrial,
      };
    default:
      return state;
  }
};

export const actions = {};
