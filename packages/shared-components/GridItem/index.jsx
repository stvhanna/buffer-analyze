import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Diff from './components/Diff';
import Label from './components/Label';
import Value from './components/Value';
import GridItemChart from './components/GridItemChart';

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
    padding-left: 0;
    padding-right: 1rem;
  }

  &:last-child > div {
    padding-left: 1rem;
    padding-right: 0;
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
}) => {
  const dailyMetricData = filterDailyDataMetrics(dailyData, metric.label);
  return (
    <Item key={metric.label} width={gridWidth}>
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
          <Value>{metric.value}</Value>
          {!hideDiff && <Diff diff={metric.diff} />}
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
  gridWidth: PropTypes.string,
  hideDiff: PropTypes.bool,
};

export default GridItem;
