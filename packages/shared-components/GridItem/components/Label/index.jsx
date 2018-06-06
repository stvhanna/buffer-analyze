import React from 'react';
import PropTypes from 'prop-types';
import Text from '@bufferapp/components/Text';

const gridSummaryItemLabel = {
  display: 'block',
};

const Label = ({ tooltip, children }) =>
  <span style={gridSummaryItemLabel}>
    <span data-tip={tooltip}>
      <Text color="shuttleGray" size="small">{children}</Text>
    </span>
  </span>;

Label.defaultProps = {
  tooltip: null,
};

Label.propTypes = {
  tooltip: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Label;
