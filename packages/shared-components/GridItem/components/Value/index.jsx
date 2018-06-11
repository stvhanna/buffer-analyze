import React from 'react';
import PropTypes from 'prop-types';
import Text from '@bufferapp/components/Text';

import TruncatedNumber from '../../../TruncatedNumber';

const Value = ({ children, showPercentSign }) =>
  <Text size="extra-large" weight="bold" color="outerSpace">
    <TruncatedNumber showPercentSign={showPercentSign}>{children}</TruncatedNumber>
  </Text>;

Value.defaultProps = {
  showPercentSign: false,
};

Value.propTypes = {
  children: PropTypes.node.isRequired,
  showPercentSign: PropTypes.bool,
};

export default Value;
