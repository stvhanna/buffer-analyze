import keyWrapper from '@bufferapp/keywrapper';

export const actionTypes = keyWrapper('PDF_EXPORT', {
  EXPORT_TO_PDF: 'EXPORT_TO_PDF',
});

export const actions = {
  exportToPDF: () => ({
    type: actionTypes.EXPORT_TO_PDF,
  }),
};
