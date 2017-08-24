import React from 'react';
import PropTypes from 'prop-types';
import Text from '@bufferapp/components/Text';

import styles from '../../styles.less';

const Label = ({ tooltip, children }) =>
  <span className={styles.gridSummaryItemLabel}>
    <span data-tip={tooltip}>
      <Text color="shuttleGray" size="small">{children}</Text>
    </span>
  </span>;

Label.defaultProps = {
  tooltip: null,
};

Label.propTypes = {
  tooltip: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Label;
