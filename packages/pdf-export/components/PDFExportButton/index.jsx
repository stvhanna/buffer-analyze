import React from 'react';
import PropTypes from 'prop-types';
import {
  Link,
} from '@bufferapp/components';

const PDFExportButton = ({ exportToPDF }) =>
  <Link
    href="#export-to-pdf"
    onClick={(e) => {
      e.preventDefault();
      exportToPDF();
    }}
  >Export as PDF</Link>;

PDFExportButton.propTypes = {
  exportToPDF: PropTypes.func.isRequired,
};

export default PDFExportButton;
