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
  padding: 1.5rem;
`;

export const Table = ({ metrics }) =>
  <Grid>
    {metrics.map((metric) => {
      const itemProps = {
        key: metric.label,
        metric,
        gridWidth: '33.33%',
      };
      if (metrics.length === 5) itemProps.gridWidth = '20%';
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

const PostsSummaryTable = ({ metrics, loading, profileService }) => {
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
        <Title profileService={profileService} />
        <AddReport chart="posts-summary" />
      </ChartHeader>
      <GridContainer id="js-dom-to-png-posts-summary">
        {content}
      </GridContainer>
    </ChartCard>
  );
};

PostsSummaryTable.defaultProps = {
  loading: false,
};

PostsSummaryTable.propTypes = {
  loading: PropTypes.bool,
  profileService: PropTypes.string.isRequired,
  metrics: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.number,
    diff: PropTypes.number,
  })).isRequired,
};

export default PostsSummaryTable;
