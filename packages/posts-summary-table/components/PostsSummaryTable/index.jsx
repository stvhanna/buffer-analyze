import React from 'react';
import PropTypes from 'prop-types';
import {
  geyser,
} from '@bufferapp/components/style/color';

import {
  ChartStateNoData as NoData,
  ChartStateLoading as Loading,
  GridItem,
} from '@bufferapp/analyze-shared-components';

import Title from '../Title';

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

const PostsSummaryTable = ({ metrics, loading, profileService, startDate, endDate }) => {
  let content = null;
  if (loading) {
    content = <Loading active text="Summary loading..." />;
  } else if (metrics.length === 0) {
    content = <NoData />;
  } else {
    content = (
      <ul style={gridStyle}>
        {metrics.map(metric => <GridItem key={metric.label} metric={metric} gridWidth={'33.33%'} />)}
      </ul>
    );
  }

  return (
    <div>
      <Title profileService={profileService} startDate={startDate} endDate={endDate} />
      <div id="js-dom-to-png-posts-summary" style={gridContainer}>
        {content}
      </div>
    </div>
  );
};

PostsSummaryTable.defaultProps = {
  loading: false,
  startDate: null,
  endDate: null,
};

PostsSummaryTable.propTypes = {
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

export default PostsSummaryTable;
