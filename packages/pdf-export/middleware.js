import { actionTypes } from './actions';

const getExportURL = () => {
  const { origin, pathname } = window.location;
  return `${origin}/report_to_pdf?url=${origin}/export${pathname}`;
};

export default store => next => (action) => { // eslint-disable-line no-unused-vars
  switch (action.type) {
    case actionTypes.EXPORT_TO_PDF:
      window.open(getExportURL(), '_blank');
      break;
    default:
      break;
  }
  return next(action);
};
