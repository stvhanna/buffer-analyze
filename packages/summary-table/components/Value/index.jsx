import React from 'react';
import PropTypes from 'prop-types';
import Text from '@bufferapp/components/Text';

import styles from '../../styles.less';

import TruncatedNumber from '../TruncatedNumber';

const Value = ({ children }) =>
  <div className={styles.gridSummaryItemValueContainer} >
    <span className={styles.gridSummaryItemValue}>
      <Text size="extra-large" weight="bold" color="outerSpace"><TruncatedNumber>{children}</TruncatedNumber></Text>
    </span>
  </div>;

Value.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Value;
