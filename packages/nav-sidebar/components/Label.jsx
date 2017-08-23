import React from 'react';
import PropTypes from 'prop-types';

import Text from '@bufferapp/components/Text';

const labelStyle = {
  display: 'block',
  marginTop: '1rem',
  padding: '.5rem 1rem 0',
  textTransform: 'uppercase',
  letterSpacing: '.075rem',
};

const Label = ({ children }) => (
  <span style={labelStyle}>
    <Text size="extra-small" color="geyser">{children}</Text>
  </span>
);

Label.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Label;
