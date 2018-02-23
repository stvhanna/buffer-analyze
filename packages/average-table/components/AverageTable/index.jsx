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

const Container = styled.div`
  position: relative;
  padding: 0.75rem 1.5rem 1.5rem;
`;

export const Table = ({ daily, totals }) =>
  <Grid>
    {totals.map(metric => <GridItem
      key={metric.label}
      metric={metric}
      dailyData={daily}
      gridWidth={`${100 / totals.length}%`}
    />)}
  </Grid>;

Table.defaultProps = {
  daily: [],
};

Table.propTypes = {
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
  })).isRequired,
};

const AverageTable = ({ metrics, loading, profileService }) => {
  if (profileService === 'instagram') {
    return null;
  }

  let content = null;
  if (loading) {
    content = <Loading active noBorder />;
  } else if (metrics.totals.length === 0) {
    content = <NoData />;
  } else {
    content = (
      <Table daily={metrics.daily} totals={metrics.totals} />
    );
  }

  return (
    <ChartCard>
      <ChartHeader>
        <Title />
        <AddReport chart="average" />
      </ChartHeader>
      <Container id="js-dom-to-png-average">
        {content}
      </Container>
    </ChartCard>
  );
};

AverageTable.defaultProps = {
  loading: false,
};

AverageTable.propTypes = {
  loading: PropTypes.bool,
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
  profileService: PropTypes.string.isRequired,
};

export default AverageTable;

