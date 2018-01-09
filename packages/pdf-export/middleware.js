import { actionTypes } from './actions';

const getExportURL = ({ startDate, endDate }) => {
  const { origin, pathname } = window.location;
  return `${origin}/report_to_pdf?url=${origin}/export${pathname}?start_date=${startDate}&end_date=${endDate}`;
};

export default store => next => (action) => { // eslint-disable-line no-unused-vars
  switch (action.type) {
    case actionTypes.EXPORT_TO_PDF:
      window.open(getExportURL(store.getState().date), '_blank');
      break;
    default:
      break;
  }
  return next(action);
};
