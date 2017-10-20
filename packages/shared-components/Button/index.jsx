import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button`
  background: white;
  border: 1px solid #D5E3EF;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 3px;
  padding: 1rem 1.25rem;
  outline: none;
  &:hover {
    cursor: pointer;
  }
`;

const Button = ({ children, ...restProps }) =>
  <StyledButton {...restProps}>{children}</StyledButton>;

Button.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Button;
