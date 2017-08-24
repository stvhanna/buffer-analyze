import React from 'react';
import PropTypes from 'prop-types';
import {
  fontFamily,
  fontSizeLarge,
} from '@bufferapp/components/style/font';

import styles from '../../styles.less';
import ArrowIcon from '../ArrowIcon';
import TruncatedNumber from '../TruncatedNumber';

const Diff = ({ diff }) => {
  if (diff === null) {
    return null;
  }
  let containerClassName = styles.gridSummaryItemDiffContainer;
  let color = '#8D969E';
  if (diff > 0) {
    containerClassName += ` ${styles.gridSummaryItemDiffContainerPositive}`;
    color = 'shamrock';
  } else if (diff < 0) {
    containerClassName += ` ${styles.gridSummaryItemDiffContainerNegative}`;
    color = 'torchRed';
  }

  return (
    <div>
      <span className={styles.gridSummaryItemIcon}>
        <ArrowIcon diff={diff} />
      </span>
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
    </div>
  );
};

Diff.defaultProps = {
  diff: null,
};

Diff.propTypes = {
  diff: PropTypes.number,
};

export default Diff;
