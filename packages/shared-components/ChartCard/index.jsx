import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  background: #FFFFFF;
  border: 1px solid #E2E8ED;
  box-shadow: 0px 0px 10px rgba(48, 71, 89, 0.05);
  border-radius: 4px;
  margin: 0 0 1rem;
`;

const ChartCard = ({ children }) =>
  <Container>{children}</Container>;

ChartCard.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ChartCard;
