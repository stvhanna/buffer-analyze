import React from 'react';
import PropTypes from 'prop-types';
import Text from '@bufferapp/components/Text';
import TruncatedNumber from '../../../TruncatedNumber';

const Value = ({ children, showPercentSign, smaller }) =>
  <Text size={smaller ? 'large' : 'extra-large'} weight="bold" color="outerSpace">
    <TruncatedNumber showPercentSign={showPercentSign}>{children}</TruncatedNumber>
  </Text>;

Value.defaultProps = {
  smaller: false,
  showPercentSign: false,
};

Value.propTypes = {
  children: PropTypes.node.isRequired,
  smaller: PropTypes.bool,
  showPercentSign: PropTypes.bool,
};

export default Value;
