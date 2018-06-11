import React from 'react';
import PropTypes from 'prop-types';

import {
  geyser,
} from '@bufferapp/components/style/color';

import {
  GridItem,
  PeriodPhrase,
  MetricIcon,
} from '@bufferapp/analyze-shared-components';

const gridStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  padding: '0',
  margin: '0 auto',
};

const gridContainer = {
  position: 'relative',
  margin: '1.5rem 1.5rem 1rem',
};

const Footer = ({ totals, selectedMetricLabel, startDate, endDate }) => {
  const metric = totals.find(m => m.label === selectedMetricLabel);

  const currentMetric = Object.assign({}, metric, {
    key: `${metric.label}_current`,
  });
  const pastMetric = Object.assign({}, metric, {
    key: `${metric.label}_past`,
    color: '#9B9FA3',
    value: metric.previousValue,
    diff: 0,
  });

  return (
    <div style={gridContainer}>
      <ul style={gridStyle}>
        <GridItem
          key={currentMetric.key}
          metric={currentMetric}
          customLabel={
            <span>
              <MetricIcon metric={currentMetric} />
              {metric.label} over <PeriodPhrase startDate={startDate} endDate={endDate} />
            </span>
          }
          showPercentSign={selectedMetricLabel === 'Engagement Rate'}
          hideDiff={pastMetric.value < 0}
          showArrowIcon={pastMetric.value < 0}
        />
        <GridItem
          key={pastMetric.key}
          metric={pastMetric}
          hideDiff
          customLabel={
            <span>
              <MetricIcon metric={pastMetric} />
              {metric.label} over <PeriodPhrase previous startDate={startDate} endDate={endDate} />
            </span>
          }
          showPercentSign={selectedMetricLabel === 'Engagement Rate'}
        />
      </ul>
    </div>
  );
};

Footer.defaultProps = {
  loading: false,
};

Footer.propTypes = {
  selectedMetricLabel: PropTypes.string.isRequired,
  totals: PropTypes.arrayOf(PropTypes.shape({
    diff: PropTypes.number,
    label: PropTypes.string,
    previousValue: PropTypes.number.isRequired,
    value: PropTypes.number,
  })).isRequired,
  startDate: PropTypes.number.isRequired,
  endDate: PropTypes.number.isRequired,
};

export default Footer;

