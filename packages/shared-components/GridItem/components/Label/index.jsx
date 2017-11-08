import React from 'react';
import PropTypes from 'prop-types';
import Text from '@bufferapp/components/Text';

const baseMargin = 10;
const gridSummaryItemLabel = {
  display: 'block',
  fontSize: '0.75rem',
  fontWeight: 600,
  marginTop: `${1.5 * baseMargin}px`,
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
