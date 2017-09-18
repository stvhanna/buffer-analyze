import React from 'react';
import PropTypes from 'prop-types';
import { Text } from '@bufferapp/components';
// import styles from '../../styles.less';

import Dropdown from './components/Dropdown';
// import PostsCountBar from './components/PostsCountBar';

const topPostsHeaderContainer = {
  padding: '2rem 0',
  display: 'flex',
  justifyContent: 'space-between',
};

const TopPostsHeader = ({ metrics, selectedMetric }) =>
  <div className={topPostsHeaderContainer}>
    <Dropdown
      metrics={metrics}
      selectedMetric={selectedMetric}
    />
  </div>
;

TopPostsHeader.propTypes = {
  metrics: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  })).isRequired,
  selectedMetric: PropTypes.shape({
    key: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
};

export default TopPostsHeader;
