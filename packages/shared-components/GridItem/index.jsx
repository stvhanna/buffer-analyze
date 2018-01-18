import React from 'react';
import PropTypes from 'prop-types';

import Diff from './components/Diff';
import Label from './components/Label';
import Value from './components/Value';
import GridItemChart from './components/GridItemChart';

const baseMargin = 10;
const borderColor = '#CED7DF';
const gridSummaryItem = {
  display: 'flex',
  listStyle: 'none',
  boxSizing: 'border-box',
  paddingBottom: `${1.5 * baseMargin}px`,
  flexGrow: 1,
};
const gridSummaryItemValueWrapper = {
  display: 'flex',
  flexDirection: 'row',
  flex: 1,
  alignItems: 'center',
};

function filterDailyDataMetrics(dailyData, metricLabel) {
  return dailyData.map(day => ({
    ...day,
    metric: day.metrics.filter(metric => metric.label === metricLabel).shift(),
  }));
}

const GridItem = ({
  metric,
  tooltip,
  gridWidth,
  dailyData,
  timezone,
  customLabel,
  prefix,
  hideDiff,
}) => {
  const style = {
    ...gridSummaryItem,
    width: gridWidth,
  };
  const dailyMetricData = filterDailyDataMetrics(dailyData, metric.label);
  return (
    <li
      style={style}
      key={metric.label}
    >
      {prefix && prefix}
      <div>
        {dailyData.length > 1 &&
          <GridItemChart timezone={timezone} dailyData={dailyMetricData} />
        }
        <Label tooltip={tooltip} >
          {!customLabel && metric.label}
          {customLabel && customLabel}
        </Label>
        <div style={gridSummaryItemValueWrapper}>
          <Value>{metric.value}</Value>
          {!hideDiff && <Diff diff={metric.diff} />}
        </div>
      </div>
    </li>
  );
};

GridItem.defaultProps = {
  dailyData: [],
  gridWidth: '25%',
  timezone: 'Etc/UTC',
  tooltip: null,
  customLabel: null,
  prefix: null,
  hideDiff: false,
};

GridItem.propTypes = {
  metric: PropTypes.shape({
    diff: PropTypes.number,
    label: PropTypes.string,
    value: PropTypes.number,
  }).isRequired,
  customLabel: PropTypes.element,
  prefix: PropTypes.element,
  dailyData: PropTypes.arrayOf(PropTypes.shape({
    day: PropTypes.string.isRequired,
    metrics: PropTypes.arrayOf(PropTypes.shape({
      diff: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    })),
  })),
  tooltip: PropTypes.string,
  timezone: PropTypes.string,
  gridWidth: PropTypes.string,
  hideDiff: PropTypes.bool,
};

export default GridItem;
