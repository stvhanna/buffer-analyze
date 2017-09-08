import React from 'react';
import PropTypes from 'prop-types';

import Diff from './components/Diff';
import Label from './components/Label';
import Value from './components/Value';
import GridItemChart from './components/GridItemChart';

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

const GridItem = ({ metric, tooltip, gridWidth, dailyData }) => {
  gridSummaryItem.width = gridWidth;
  return (
    <li
      style={gridSummaryItem}
      key={metric.label}
    >
      {dailyData.length > 0 && <GridItemChart dailyData={dailyData} />}
      <Label tooltip={tooltip}>{metric.label}</Label>
      <div style={gridSummaryItemValueWrapper}>
        <Value>{metric.value}</Value>
        <Diff diff={metric.diff} />
      </div>
    </li>
  );
};

GridItem.defaultProps = {
  tooltip: null,
  gridWidth: '25%',
  dailyData: [],
};

GridItem.propTypes = {
  metric: PropTypes.shape({
    diff: PropTypes.number,
    label: PropTypes.string,
    value: PropTypes.number,
  }).isRequired,
  dailyData: PropTypes.arrayOf(PropTypes.shape({
    day: PropTypes.string.isRequired,
    metrics: PropTypes.arrayOf(PropTypes.shape({
      diff: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    })),
  })),
  tooltip: PropTypes.string,
  gridWidth: PropTypes.string,
};

export default GridItem;
