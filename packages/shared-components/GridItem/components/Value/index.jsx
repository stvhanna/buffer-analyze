import React from 'react';
import PropTypes from 'prop-types';
import Text from '@bufferapp/components/Text';

import TruncatedNumber from '../../../TruncatedNumber';

const Value = ({ children }) =>
  <Text size="extra-extra-large" weight="bold" color="outerSpace">
    <TruncatedNumber>{children}</TruncatedNumber>
  </Text>;

Value.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Value;
