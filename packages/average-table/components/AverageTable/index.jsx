import React from 'react';
import PropTypes from 'prop-types';

import Text from '@bufferapp/components/Text';
import {
  geyser,
} from '@bufferapp/components/style/color';

import {
  ChartStateNoData as NoData,
  ChartStateLoading as Loading,
  GridItem,
} from '@bufferapp/analyze-shared-components';

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

const AverageTable = ({ totals, loading }) => {
  let content = null;
  if (loading) {
    content = <Loading active text="Average loading..." />;
  } else if (totals.length === 0) {
    content = <NoData />;
  } else {
    content = (
      <ul style={gridStyle}>
        {totals.map(metric => <GridItem key={metric.label} metric={metric} />)}
      </ul>
    );
  }

  return (
    <div>
      <h2 style={{ margin: '2rem 0 1rem' }}>
        <Text> Average post performance </Text>
      </h2>
      <div style={gridContainer}>
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
  totals: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.number,
    diff: PropTypes.number,
  })).isRequired,
};

export default AverageTable;

