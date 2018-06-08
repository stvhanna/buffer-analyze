import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
`;

const Header = ({ children }) =>
  <Container>{children}</Container>;

Header.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Header;
