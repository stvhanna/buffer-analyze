import React from 'react';
import PropTypes from 'prop-types';

import styles from '../../styles.less';

import Diff from '../Diff';
import ArrowIcon from '../ArrowIcon';
import Label from '../Label';
import Value from '../Value';

const GridItem = ({ metric, tooltip }) =>
  <li
    className={styles.gridSummaryItem}
    style={{
      width: '25%',
    }}
    key={metric.label}
  >
    <Label tooltip={tooltip}>{metric.label}</Label>

    <div className={styles.gridSummaryItemValueWrapper}>
      <Value>{metric.value}</Value>
      <span className={styles.gridSummaryItemIcon}>
        <ArrowIcon diff={metric.diff} />
      </span>
      <Diff diff={metric.diff} />
    </div>
  </li>;

GridItem.defaultProps = {
  tooltip: null,
};

GridItem.propTypes = {
  metric: PropTypes.shape({
    value: PropTypes.number,
    label: PropTypes.string,
    diff: PropTypes.number,
  }).isRequired,
  tooltip: PropTypes.string,
};

export default GridItem;
