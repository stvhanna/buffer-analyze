import React from 'react';
import PropTypes from 'prop-types';

import {
  geyser,
} from '@bufferapp/components/style/color';

import Title from '../Title';
import GridItem from '../GridItem';
import Loading from '../Loading';
import NoData from '../NoData';

const gridStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  padding: '0',
  margin: '0 auto',
  borderTop: `solid 1px ${geyser}`,
  borderLeft: `solid 1px ${geyser}`,
  borderRadius: '2px',
};

const sectionContainer = {
  marginLeft: '2rem',
};

const gridContainer = {
  minHeight: '12rem',
  position: 'relative',
  margin: '1rem 0 1.5rem',
};

const SummaryTable = ({ metrics, loading, profileService }) => {
  let content = null;
  if (loading) {
    content = <Loading active text="Summary table loading" />;
  } else if (metrics.length === 0) {
    content = <NoData />;
  } else {
    content = (
      <ul style={gridStyle}>
        {metrics.map(metric => <GridItem metric={metric} />)}
      </ul>
    );
  }

  return (
    <div style={sectionContainer}>
      <Title profileService={profileService} />
      <div style={gridContainer}>
        {content}
      </div>
    </div>
  );
};

SummaryTable.defaultProps = {
  loading: false,
};

SummaryTable.propTypes = {
  loading: PropTypes.bool,
  profileService: PropTypes.string.isRequired,
  metrics: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.number,
    diff: PropTypes.number,
  })).isRequired,
};

export default SummaryTable;
