export const actionTypes = {
  EXPORT_TO_CSV_START: 'EXPORT_TO_CSV_START',
  EXPORT_TO_CSV_END: 'EXPORT_TO_CSV_END',
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
          data: action.data,
        }]),
      };
    case actionTypes.EXPORT_TO_CSV_END:
      return initialState;
    default:
      return state;
  }
};

export const actions = {
  endExportToCSV: () => ({
    type: actionTypes.EXPORT_TO_CSV_END,
  }),
  exportToCSV: filename => ({
    type: actionTypes.EXPORT_TO_CSV_START,
    filename,
  }),
  exportChart: (filename, data) => ({
    type: actionTypes.EXPORT_CHART,
    filename,
    data,
  }),
};
