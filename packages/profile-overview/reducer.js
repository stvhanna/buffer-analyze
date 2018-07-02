import { actionTypes as asyncDataFetchActionTypes } from '@bufferapp/async-data-fetch';

const initialState = {
  data: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case `profiles_overview_${asyncDataFetchActionTypes.FETCH_SUCCESS}`:
      return {
        ...state,
        data: action.result,
      };
    default:
      return state;
  }
};
