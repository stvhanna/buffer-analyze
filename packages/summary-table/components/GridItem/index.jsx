import React from 'react';
import PropTypes from 'prop-types';

import Diff from '../Diff';
import Label from '../Label';
import Value from '../Value';

const baseMargin = 10;
const borderColor = '#CED7DF';
const gridSummaryItem = {
  display: 'inline-block',
  listStyle: 'none',
  borderRight: `solid 1px ${borderColor}`,
  borderBottom: `solid 1px ${borderColor}`,
  boxSizing: 'border-box',
  paddingBottom: `${1.5 * baseMargin}px`,
  flexGrow: 1,
  width: '25%',
};
const gridSummaryItemValueWrapper = {
  display: 'flex',
  flexDirection: 'row',
  flex: 1,
  alignItems: 'center',
};

const GridItem = ({ metric, tooltip }) =>
  <li
    style={gridSummaryItem}
    key={metric.label}
  >
    <Label tooltip={tooltip}>{metric.label}</Label>

    <div style={gridSummaryItemValueWrapper}>
      <Value>{metric.value}</Value>
      <Diff diff={metric.diff} />
    </div>
  </li>;

GridItem.defaultProps = {
  tooltip: null,
};

GridItem.propTypes = {
  metric: PropTypes.shape({
    value: PropTypes.number,
    label: PropTypes.string,
    diff: PropTypes.number,
  }).isRequired,
  tooltip: PropTypes.string,
};

export default GridItem;
