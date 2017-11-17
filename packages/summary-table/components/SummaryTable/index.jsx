import React from 'react';
import PropTypes from 'prop-types';

import { white } from '@bufferapp/components/style/color';

import {
  ChartStateNoData as NoData,
  ChartStateLoading as Loading,
  ChartCard,
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
  position: 'relative',
  padding: '1.5rem',
};

export const Table = ({ metrics }) =>
  <ul style={gridStyle}>
    {metrics.map((metric) => {
      const itemProps = {
        key: metric.label,
        metric,
      };
      if (metrics.length === 5) itemProps.gridWidth = '20%';
      return (<GridItem {...itemProps} />);
    })}
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
    content = <Loading active noBorder />;
  } else if (metrics.length === 0) {
    content = <NoData />;
  } else {
    content = <Table metrics={metrics} />;
  }

  return (
    <ChartCard>
      <ChartHeader>
        <Title profileService={profileService} startDate={startDate} endDate={endDate} />
        <AddReport chart="summary-table" />
      </ChartHeader>
      <div id="js-dom-to-png-summary" style={gridContainer}>
        {content}
      </div>
    </ChartCard>
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
