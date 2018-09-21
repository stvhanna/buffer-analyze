import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { white } from '@bufferapp/components/style/color';

import ErrorBoundary from '../ErrorBoundary';

const Container = styled.div`
  background: ${white};
  border: 1px solid #E2E8ED;
  border-radius: 4px;
  box-shadow: 0px 0px 10px rgba(48, 71, 89, 0.05);
  margin: 0 0 1rem;
`;

const ChartCard = ({ children }) =>
  <ErrorBoundary>
    <Container>{children}</Container>
  </ErrorBoundary>;

ChartCard.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ChartCard;
