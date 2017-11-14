import { actionTypes as asyncDataFetchActionTypes } from '@bufferapp/async-data-fetch';

export const actionTypes = {
  EDIT_NAME: 'EDIT_NAME',
  SAVE_CHANGES: 'SAVE_CHANGES',
};

const initialState = {
  loading: true,
  charts: [],
  name: '',
  edit: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case `get_report_${asyncDataFetchActionTypes.FETCH_START}`:
      return {
        ...initialState,
        name: action.args.name,
        id: action.args._id,
      };
    case `get_report_${asyncDataFetchActionTypes.FETCH_SUCCESS}`:
      return {
        ...state,
        charts: action.result,
        loading: false,
      };
    case actionTypes.SAVE_CHANGES:
      return {
        ...state,
        edit: false,
        name: action.name,
      };
    case actionTypes.EDIT_NAME:
      return {
        ...state,
        edit: true,
      };
    default:
      return state;
  }
};

export const actions = {
  editName: () => ({
    type: actionTypes.EDIT_NAME,
  }),
  saveChanges: name => ({
    type: actionTypes.SAVE_CHANGES,
    name,
  }),
};
