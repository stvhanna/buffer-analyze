import React from 'react';
import PropTypes from 'prop-types';

import {
  geyser,
  white,
} from '@bufferapp/components/style/color';

import {
  ChartStateNoData as NoData,
  ChartStateLoading as Loading,
  ChartHeader,
  GridItem,
} from '@bufferapp/analyze-shared-components';

import AddReport from '@bufferapp/add-report';

import Title from '../Title';

const gridStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  padding: '0',
  margin: '0 auto',
};

const gridContainer = {
  minHeight: '12rem',
  position: 'relative',
  margin: '1rem 0 1.5rem',
};

const chartContainer = {
  background: `${white}`,
  padding: '1rem',
  border: '1px solid #E2E8ED',
  boxShadow: '0px 0px 10px rgba(48, 71, 89, 0.05)',
  borderRadius: '5px',
};

export const Table = ({ metrics }) =>
  <ul style={gridStyle}>
    {metrics.map(metric => <GridItem key={metric.label} metric={metric} />)}
  </ul>;

Table.propTypes = {
  metrics: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.number,
    diff: PropTypes.number,
  })).isRequired,
};


const SummaryTable = ({ metrics, loading, profileService, startDate, endDate }) => {
  let content = null;
  if (loading) {
    content = <Loading active text="Summary loading..." />;
  } else if (metrics.length === 0) {
    content = <NoData />;
  } else {
    content = <Table metrics={metrics} />;
  }

  return (
    <div style={chartContainer}>
      <ChartHeader>
        <Title profileService={profileService} startDate={startDate} endDate={endDate} />
        <AddReport chart="summary-table" />
      </ChartHeader>
      <div id="js-dom-to-png-summary" style={gridContainer}>
        {content}
      </div>
    </div>
  );
};

SummaryTable.defaultProps = {
  loading: false,
  startDate: null,
  endDate: null,
};

SummaryTable.propTypes = {
  loading: PropTypes.bool,
  profileService: PropTypes.string.isRequired,
  metrics: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.number,
    diff: PropTypes.number,
  })).isRequired,
  startDate: PropTypes.number,
  endDate: PropTypes.number,
};

export default SummaryTable;
