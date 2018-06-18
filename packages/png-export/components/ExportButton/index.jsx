import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Text,
} from '@bufferapp/components';

const ExportButton = ({ exporting, exportToPNG }) => (
  <Button noStyle disabled={exporting} onClick={exportToPNG}>
    <Text size="extra-small">{exporting ? 'Exporting...' : 'Export as Images' }</Text>
  </Button>
);

ExportButton.defaultProps = {
  exporting: false,
};

ExportButton.propTypes = {
  exporting: PropTypes.bool,
  exportToPNG: PropTypes.func.isRequired,
};


export default ExportButton;
