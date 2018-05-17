import React from 'react';
import PropTypes from 'prop-types';
import style from 'styled-components';
import { white, mystic } from '@bufferapp/components/style/color';

const Toolbar = style.div`
  display: flex;
  justify-content: space-between;
  background: ${white};
  padding: 0.75rem 0.5rem calc(1rem - 0.07rem);
  margin-bottom: 0;
  border-bottom: 1px solid ${mystic};
  box-sizing: border-box;
`;

const ToolbarComponent = ({ children }) => <Toolbar>{children}</Toolbar>;

ToolbarComponent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ToolbarComponent;
