import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Diff from './components/Diff';
import Label from './components/Label';
import Value from './components/Value';
import GridItemChart from './components/GridItemChart';
import ArrowIcon from './components/ArrowIcon';

const Item = styled.li`
  display: flex;
  list-style: none;
  box-sizing: border-box;
  flex-grow: 1;
  width: ${props => props.width};
  justify-content: center;
  padding-left: 0.5rem;
  padding-right: 0.5rem;

  &:first-child > div {
    padding-left: ${props => (props.withChart ? '0' : '')};
    padding-right: ${props => (props.withChart ? '1rem' : '')};
  }

  &:last-child > div {
    padding-left: ${props => (props.withChart ? '1rem' : '')};
    padding-right: ${props => (props.withChart ? '0' : '')};
  }
`;

const Container = styled.div`
  width: 100%;
`;

const ValueWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  align-items: center;
`;

const GridItemChartContainer = styled.div`
  border: 1px solid #ECEEEF;
  border-width: 0 0 1px;
`;
const ArrowIconContainer = styled.span`
  display: inline-block;
  margin-left: 10px;
  height: 1rem;
`;

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
  customLabel,
  prefix,
  hideDiff,
  showPercentSign,
  showArrowIcon,
}) => {
  const dailyMetricData = filterDailyDataMetrics(dailyData, metric.label);
  return (
    <Item key={metric.label} width={gridWidth} withChart={dailyData.length > 0}>
      {prefix && prefix}
      <Container>
        {dailyData.length > 1 &&
          <GridItemChartContainer>
            <GridItemChart dailyData={dailyMetricData} />
          </GridItemChartContainer>
        }
        <Label tooltip={tooltip} >
          {!customLabel && metric.label}
          {customLabel && customLabel}
        </Label>
        <ValueWrapper>
          <Value showPercentSign={showPercentSign}>{metric.value}</Value>
          {!hideDiff && <Diff diff={metric.diff} />}
          { showArrowIcon &&
            <ArrowIconContainer>
              <ArrowIcon diff={metric.diff} />
            </ArrowIconContainer>
          }
        </ValueWrapper>
      </Container>
    </Item>
  );
};

GridItem.defaultProps = {
  dailyData: [],
  gridWidth: '25%',
  tooltip: null,
  customLabel: null,
  prefix: null,
  hideDiff: false,
  showPercentSign: false,
  showArrowIcon: false,
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
    day: PropTypes.string,
    metrics: PropTypes.arrayOf(PropTypes.shape({
      diff: PropTypes.number,
      label: PropTypes.string,
      value: PropTypes.number,
    })),
  })),
  tooltip: PropTypes.string,
  gridWidth: PropTypes.string,
  hideDiff: PropTypes.bool,
  showPercentSign: PropTypes.bool,
  showArrowIcon: PropTypes.bool,
};

export default GridItem;
