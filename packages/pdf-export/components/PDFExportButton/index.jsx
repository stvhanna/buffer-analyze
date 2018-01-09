import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button } from '@bufferapp/analyze-shared-components';
import Text from '@bufferapp/components/Text';

const Margin = styled.span`
  margin-left: .5rem;
`;

const PDFExportButton = ({ exportToPDF }) =>
  <Margin>
    <Button onClick={() => exportToPDF()}><Text size="small" weight="bold">Export as PDF</Text></Button>
  </Margin>;

PDFExportButton.propTypes = {
  exportToPDF: PropTypes.func.isRequired,
};

export default PDFExportButton;
