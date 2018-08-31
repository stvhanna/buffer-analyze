import React from 'react';
import PropTypes from 'prop-types';

import Text from '@bufferapp/components/Text';

const labelStyle = {
  display: 'block',
  margin: '0 1rem 0.75rem',
  padding: '0',
  textTransform: 'uppercase',
  letterSpacing: '.075rem',
};

const Label = ({ children }) => (
  <span style={labelStyle}>
    <Text size="small" color="lightSlate" weight="medium">{children}</Text>
  </span>
);

Label.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Label;
