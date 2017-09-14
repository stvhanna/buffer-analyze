import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
} from '@bufferapp/components';

const ExportButton = ({ exporting, exportToPNG }) =>
  <Button secondary disabled={exporting} onClick={exportToPNG}>{exporting ? 'Exporting...' : 'Export as Images' }</Button>;

ExportButton.defaultProps = {
  exporting: false,
};

ExportButton.propTypes = {
  exporting: PropTypes.bool,
  exportToPNG: PropTypes.func.isRequired,
};


export default ExportButton;
