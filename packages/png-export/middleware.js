import { actionTypes, actions } from './reducer';
import generatePNGsFromCharts from './lib/generatePNGFromChart';
import downloadAsZip from './lib/downloadAsZip';

export default store => next => (action) => { // eslint-disable-line no-unused-vars
  const { exportToPNG, date } = store.getState();
  switch (action.type) {
    case actionTypes.EXPORT_TO_PNG_START:
      return generatePNGsFromCharts(exportToPNG.charts, date)
        .then((pngs) => {
          downloadAsZip(action.filename, pngs);
          store.dispatch(actions.endExportToPNG());
          next(action);
        });
    default:
      return next(action);
  }
};
