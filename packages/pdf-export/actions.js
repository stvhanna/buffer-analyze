export const actionTypes = {
  EXPORT_TO_PDF: 'EXPORT_TO_PDF',
};

export const actions = {
  exportToPDF: () => ({
    type: actionTypes.EXPORT_TO_PDF,
  }),
};
