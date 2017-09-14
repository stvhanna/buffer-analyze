export const actionTypes = {
  EXPORT_TO_PNG_START: 'EXPORT_TO_PNG_START',
  EXPORT_TO_PNG_END: 'EXPORT_TO_PNG_END',
  EXPORT_CHART: 'EXPORT_CHART',
};

const initialState = {
  exporting: false,
  charts: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.EXPORT_CHART:
      return {
        ...state,
        exporting: true,
        charts: state.charts.concat([{
          filename: action.filename,
          id: action.id,
        }]),
      };
    case actionTypes.EXPORT_TO_PNG_END:
      return initialState;
    default:
      return state;
  }
};

export const actions = {
  endExportToPNG: () => ({
    type: actionTypes.EXPORT_TO_PNG_END,
  }),
  exportToPNG: filename => ({
    type: actionTypes.EXPORT_TO_PNG_START,
    filename,
  }),
  exportChart: (id, filename) => ({
    type: actionTypes.EXPORT_CHART,
    id,
    filename,
  }),
};
