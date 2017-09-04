import React from 'react';
import PropTypes from 'prop-types';

import styles from '../../styles.less';

import Diff from '../Diff';
import Label from '../Label';
import Value from '../Value';

const GridItem = ({ metric, tooltip, gridWidth }) => {
  const style = {
    width: gridWidth,
  };

  return (
    <li
      className={styles.gridSummaryItem}
      style={style}
      key={metric.label}
    >
      <Label tooltip={tooltip}>{metric.label}</Label>

      <div className={styles.gridSummaryItemValueWrapper}>
        <Value>{metric.value}</Value>
        <Diff diff={metric.diff} />
      </div>
    </li>
  );
};

GridItem.defaultProps = {
  tooltip: null,
  gridWidth: '25%',
};

GridItem.propTypes = {
  metric: PropTypes.shape({
    value: PropTypes.number,
    label: PropTypes.string,
    diff: PropTypes.number,
  }).isRequired,
  tooltip: PropTypes.string,
  gridWidth: PropTypes.string,
};

export default GridItem;
