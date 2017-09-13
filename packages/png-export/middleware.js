import { actionTypes, actions } from './reducer';
import generatePNGsFromCharts from './lib/generatePNGFromChart';
import downloadAsZip from './lib/downloadAsZip';

let timeoutID = null;

export default store => next => (action) => { // eslint-disable-line no-unused-vars
  const { exportToPNG, date } = store.getState();
  switch (action.type) {
    case actionTypes.PROCESS_CHARTS:
      return generatePNGsFromCharts(exportToPNG.charts, date)
        .then((pngs) => {
          downloadAsZip(exportToPNG.zipFilename, pngs);
          store.dispatch(actions.endExportToPNG());
        });
    case actionTypes.EXPORT_CHART:
      if (timeoutID) {
        clearTimeout(timeoutID);
      }
      timeoutID = setTimeout(() => store.dispatch(actions.processCharts()), 200);
      next(action);
      break;
    default:
      next(action);
      break;
  }
};
