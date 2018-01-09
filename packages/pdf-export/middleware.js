import { actionTypes } from './actions';

const getExportURL = ({ startDate, endDate }, name) => {
  const { origin, pathname } = window.location;
  const exportURL = encodeURIComponent(`${origin}/export${pathname}?name=${name}&start_date=${startDate}&end_date=${endDate}`);
  return `${origin}/report_to_pdf?url=${exportURL}`;
};

export default store => next => (action) => { // eslint-disable-line no-unused-vars
  const { date, report } = store.getState();
  switch (action.type) {
    case actionTypes.EXPORT_TO_PDF:
      window.open(getExportURL(date, report.name), '_blank');
      break;
    default:
      break;
  }
  return next(action);
};
