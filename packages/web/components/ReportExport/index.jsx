import React from 'react';
import { connect } from 'react-redux';
import Report from '@bufferapp/report';
import styled from 'styled-components';

const Content = styled.div`
  max-width: 65rem;
  width: 1024px;
  margin: 0 auto;
  background: #FAFAFA;
  -webkit-print-color-adjust: exact;
`;

const ReportExport = () => (
  <Content>
    <Report exporting />
  </Content>
);

export default connect()(ReportExport);
