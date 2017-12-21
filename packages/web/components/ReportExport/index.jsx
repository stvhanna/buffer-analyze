import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Report from '@bufferapp/report';
import styled from 'styled-components';

const Content = styled.div`
  max-width: 65rem;
  width: 880px;
  padding: 0 4rem;
  margin: 2.8rem auto;
`;


const ReportExport = ({ location }) => (
  <Content>
    <Report exporting />
  </Content>
);

ReportExport.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default connect()(ReportExport);
