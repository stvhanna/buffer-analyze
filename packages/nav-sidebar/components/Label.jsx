import React from 'react';
import PropTypes from 'prop-types';

import {
  geyser,
} from '@bufferapp/components/style/color';

import {
  fontFamily,
} from '@bufferapp/components/style/font';

const labelStyle = {
  display: 'block',
  marginTop: '1rem',
  padding: '.5rem 1rem 0',
  textTransform: 'uppercase',
  letterSpacing: '.075rem',
  fontSize: '.6rem',
  color: geyser,
  fontFamily,
};

const Label = ({ children }) => (
  <span style={labelStyle}>
    {children}
  </span>
);

Label.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Label;
