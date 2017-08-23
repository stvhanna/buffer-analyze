import React from 'react';
import PropTypes from 'prop-types';
import {
  fontFamily,
  fontSizeLarge,
} from '@bufferapp/components/style/font';

import styles from '../../styles.less';
import TruncatedNumber from '../TruncatedNumber';

const Diff = ({ diff }) => {
  let containerClassName = styles.gridSummaryItemDiffContainer;
  let color = '#8D969E';
  if (diff > 0) {
    containerClassName += ` ${styles.gridSummaryItemDiffContainerPositive}`;
    color = '#2FD566';
  } else if (diff < 0) {
    containerClassName += ` ${styles.gridSummaryItemDiffContainerNegative}`;
    color = '#FF1E1E';
    diff *= -1;
  }

  return (
    <div className={containerClassName}>
      <span className={styles.gridSummaryItemDiff}>
        <span
          style={{
            fontSize: fontSizeLarge,
            fontFamily,
            color,
          }}
        >
          <TruncatedNumber absoluteValue shorterOption>{diff}</TruncatedNumber>%
        </span>
      </span>
    </div>
  );
};

Diff.propTypes = {
  diff: PropTypes.number.isRequired,
};

export default Diff;
