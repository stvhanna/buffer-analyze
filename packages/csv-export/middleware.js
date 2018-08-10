import { actionTypes, actions } from './reducer';
import generateCSVsFromCharts from './lib/generateCSVFromChart';
import downloadAsZip from './lib/downloadAsZip';

export default store => next => (action) => { // eslint-disable-line no-unused-vars
  const { exportToCSV, date } = store.getState();
  switch (action.type) {
    case actionTypes.EXPORT_TO_CSV_START:
      return generateCSVsFromCharts(exportToCSV.charts, date)
        .then((csvs) => {
          downloadAsZip(action.filename, csvs).then(() => {
            store.dispatch(actions.endExportToCSV());
          });
          next(action);
        });
    default:
      return next(action);
  }
};
