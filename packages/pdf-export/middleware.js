import { actionTypes } from './actions';

const getExportURL = ({ name, dateRange }) => {
  const { origin, pathname } = window.location;
  const exportURL = encodeURIComponent(`${origin}/export${pathname}?start_date=${dateRange.startDate}&end_date=${dateRange.endDate}`);
  return `${origin}/report_to_pdf?name=${name}&url=${exportURL}`;
};

export default store => next => (action) => { // eslint-disable-line no-unused-vars
  const { report } = store.getState();
  switch (action.type) {
    case actionTypes.EXPORT_TO_PDF:
      window.open(getExportURL(report), '_blank');
      break;
    default:
      break;
  }
  return next(action);
};
