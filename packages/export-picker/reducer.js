export const actionTypes = {
  OPEN_EXPORT_PICKER_LIST: 'OPEN_EXPORT_PICKER_LIST',
  CLOSE_EXPORT_PICKER_LIST: 'CLOSE_EXPORT_PICKER_LIST',
};

const initialState = {
  exporting: false,
  open: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.OPEN_EXPORT_PICKER_LIST:
      return {
        ...state,
        open: true,
      };
    case actionTypes.CLOSE_EXPORT_PICKER_LIST:
      return {
        ...state,
        open: false,
      };
    default:
      return state;
  }
};

export const actions = {
  open: () => ({
    type: actionTypes.OPEN_EXPORT_PICKER_LIST,
  }),
  close: () => ({
    type: actionTypes.CLOSE_EXPORT_PICKER_LIST,
  }),
};
