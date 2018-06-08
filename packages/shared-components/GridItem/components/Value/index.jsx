import React from 'react';
import PropTypes from 'prop-types';
import Text from '@bufferapp/components/Text';

import TruncatedNumber from '../../../TruncatedNumber';

const Value = ({ smaller, children }) =>
  <Text size={smaller ? 'large' : 'extra-large'} weight="bold" color="outerSpace">
    <TruncatedNumber>{children}</TruncatedNumber>
  </Text>;

Value.defaultProps = {
  smaller: false,
};

Value.propTypes = {
  children: PropTypes.node.isRequired,
  smaller: PropTypes.bool,
};

export default Value;
