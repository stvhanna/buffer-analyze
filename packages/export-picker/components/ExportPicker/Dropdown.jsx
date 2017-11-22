import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const Container = styled.div`
  display: none;
  z-index: 2;
  position: absolute;
  width: 100%;
  top: 2.25rem;
  background: #FFFFFF;
  border: 1px solid #D5E3EF;
  border-width: 0 1px 1px;
  border-radius: 3;
  padding: 0.5rem 1rem;
  box-sizing: border-box;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);

  ${props => props.isOpen && css`
    display: block;
  `}
`;

const Dropdown = ({ isOpen, children }) => (
  <Container isOpen={isOpen}>
    {children}
  </Container>
);

Dropdown.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default Dropdown;
