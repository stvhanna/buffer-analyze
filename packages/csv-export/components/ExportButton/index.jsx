import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Text,
} from '@bufferapp/components';

const ExportButton = ({ exporting, exportToCSV }) => (
  <Button noStyle disabled={exporting} onClick={exportToCSV}>
    <Text size="small">{exporting ? 'Exporting...' : 'Export as CSV' }</Text>
  </Button>
);

ExportButton.defaultProps = {
  exporting: false,
};

ExportButton.propTypes = {
  exporting: PropTypes.bool,
  exportToCSV: PropTypes.func.isRequired,
};


export default ExportButton;
