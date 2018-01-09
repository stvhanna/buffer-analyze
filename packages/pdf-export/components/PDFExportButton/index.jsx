import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@bufferapp/analyze-shared-components';

const PDFExportButton = ({ exportToPDF }) =>
  <Button onClick={() => exportToPDF()}>Export as PDF</Button>;

PDFExportButton.propTypes = {
  exportToPDF: PropTypes.func.isRequired,
};

export default PDFExportButton;
