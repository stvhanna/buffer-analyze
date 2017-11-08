import React from 'react';
import PropTypes from 'prop-types';

import Text from '@bufferapp/components/Text';
import {
  geyser,
} from '@bufferapp/components/style/color';

import {
  ChartStateNoData as NoData,
  ChartStateLoading as Loading,
  ChartHeader,
  GridItem,
} from '@bufferapp/analyze-shared-components';

import AddReport from '@bufferapp/add-report';

const gridStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  padding: '0',
  margin: '0 auto',
  borderTop: `solid 1px ${geyser}`,
  borderLeft: `solid 1px ${geyser}`,
  borderRadius: '2px',
};

const gridContainer = {
  minHeight: '12rem',
  position: 'relative',
  margin: '1rem 0 1.5rem',
};

export const Table = ({ metrics, timezone }) =>
  <ul style={gridStyle}>
    {metrics.totals.map(metric => <GridItem
      key={metric.label}
      metric={metric}
      dailyData={metrics.daily}
      timezone={timezone}
    />)}
  </ul>;

Table.propTypes = {
  timezone: PropTypes.string.isRequired,
  metrics: PropTypes.shape({
    daily: PropTypes.arrayOf(PropTypes.shape({
      day: PropTypes.string.isRequired,
      metrics: PropTypes.arrayOf(PropTypes.shape({
        diff: PropTypes.number.isRequired,
        label: PropTypes.string.isRequired,
        value: PropTypes.number.isRequired,
      })),
    })),
    totals: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.number,
      diff: PropTypes.number,
    })),
  }).isRequired,
};

export const Title = () =>
  <h2 style={{ margin: '2rem 0 1rem' }}>
    <Text weight="bold" size="extra-large"> Average Performance </Text>
  </h2>;

const AverageTable = ({ metrics, loading, timezone }) => {
  let content = null;
  if (loading) {
    content = <Loading active text="Average loading..." />;
  } else if (metrics.totals.length === 0) {
    content = <NoData />;
  } else {
    content = (
      <Table metrics={metrics} timezone={timezone} />
    );
  }

  return (
    <div>
      <ChartHeader>
        <Title />
        <AddReport chart="average" />
      </ChartHeader>
      <div id="js-dom-to-png-average" style={gridContainer}>
        {content}
      </div>
    </div>
  );
};

AverageTable.defaultProps = {
  loading: false,
};

AverageTable.propTypes = {
  loading: PropTypes.bool,
  timezone: PropTypes.string.isRequired,
  metrics: PropTypes.shape({
    daily: PropTypes.arrayOf(PropTypes.shape({
      day: PropTypes.string.isRequired,
      metrics: PropTypes.arrayOf(PropTypes.shape({
        diff: PropTypes.number.isRequired,
        label: PropTypes.string.isRequired,
        value: PropTypes.number.isRequired,
      })),
    })),
    totals: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.number,
      diff: PropTypes.number,
    })),
  }).isRequired,
};

export default AverageTable;

