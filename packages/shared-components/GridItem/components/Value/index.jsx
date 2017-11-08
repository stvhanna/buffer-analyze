import React from 'react';
import PropTypes from 'prop-types';
import Text from '@bufferapp/components/Text';

import TruncatedNumber from '../../../TruncatedNumber';

const headingColor = '#323b43';

const gridSummaryItemValue = {
  fontSize: '2.5rem',
  fontWeight: 600,
  color: headingColor,
};

const gridSummaryItemValueContainer = {
  display: 'inline-block',
};

const Value = ({ children }) =>
  <div style={gridSummaryItemValueContainer} >
    <span style={gridSummaryItemValue}>
      <Text size="extra-large" weight="bold" color="outerSpace"><TruncatedNumber>{children}</TruncatedNumber></Text>
    </span>
  </div>;

Value.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Value;
