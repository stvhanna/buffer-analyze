import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
} from '@bufferapp/components';

const ExportButton = ({ exporting, exportToCSV }) =>
  <Button secondary disabled={exporting} onClick={exportToCSV}>{exporting ? 'Exporting...' : 'Export as CSV' }</Button>;

ExportButton.defaultProps = {
  exporting: false,
};

ExportButton.propTypes = {
  exporting: PropTypes.bool,
  exportToCSV: PropTypes.func.isRequired,
};


export default ExportButton;
