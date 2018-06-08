import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  ChartStateNoData as NoData,
  ChartStateLoading as Loading,
  ChartCard,
  ChartHeader,
  GridItem,
} from '@bufferapp/analyze-shared-components';
import AddReport from '@bufferapp/add-report';
import Title from '../Title';

const Grid = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 0 auto;
`;

const GridContainer = styled.div`
  position: relative;
  padding: 1rem 1.5rem;
`;

export const Table = ({ metrics }) =>
  <Grid>
    {metrics.map((metric) => {
      const itemProps = {
        key: metric.label,
        metric,
      };
      if (metrics.length === 5) itemProps.gridWidth = '20%';
      if (metrics.length === 6) itemProps.gridWidth = '33%';
      return (<GridItem {...itemProps} />);
    })}
  </Grid>;

Table.propTypes = {
  metrics: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.number,
    diff: PropTypes.number,
  })).isRequired,
};

const SummaryTable = ({ metrics, loading }) => {
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
        <Title />
        <AddReport chart="summary-table" />
      </ChartHeader>
      <GridContainer id="js-dom-to-png-summary">
        {content}
      </GridContainer>
    </ChartCard>
  );
};

SummaryTable.defaultProps = {
  loading: false,
};

SummaryTable.propTypes = {
  loading: PropTypes.bool,
  metrics: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.number,
    diff: PropTypes.number,
  })).isRequired,
};

export default SummaryTable;
