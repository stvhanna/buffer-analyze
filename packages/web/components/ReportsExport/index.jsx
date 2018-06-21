import React from 'react';
import { connect } from 'react-redux';
import Report from '@bufferapp/report';
import styled from 'styled-components';

import {
  offWhite,
} from '@bufferapp/components/style/color';

const Content = styled.div`
  max-width: 65rem;
  width: 1024px;
  margin: 0 auto;
  background: ${offWhite};
  -webkit-print-color-adjust: exact;
`;

const ReportsExport = () => (
  <Content>
    <Report exporting />
  </Content>
);

export default connect()(ReportsExport);
