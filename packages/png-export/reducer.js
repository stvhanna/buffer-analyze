export const actionTypes = {
  EXPORT_TO_PNG_START: 'EXPORT_TO_PNG_START',
  EXPORT_TO_PNG_END: 'EXPORT_TO_PNG_END',
  EXPORT_CHART: 'EXPORT_CHART',
  PROCESS_CHARTS: 'PROCESS_CHARTS',
};

const initialState = {
  exporting: false,
  zipFilename: null,
  charts: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.EXPORT_TO_PNG_START:
      return {
        ...state,
        exporting: true,
        zipFilename: action.filename,
      };
    case actionTypes.EXPORT_CHART:
      return {
        ...state,
        charts: state.charts.concat([{
          filename: action.filename,
          id: action.id,
        }]),
      };
    case actionTypes.EXPORT_TO_PNG_END:
      return {
        ...state,
        charts: [],
        exporting: false,
        zipFilename: null,
      };
    default:
      return state;
  }
};

export const actions = {
  processCharts: () => ({
    type: actionTypes.PROCESS_CHARTS,
  }),
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
