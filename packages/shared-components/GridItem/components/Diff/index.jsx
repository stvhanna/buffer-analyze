import React from 'react';
import PropTypes from 'prop-types';
import {
  fontFamily,
  fontSizeLarge,
} from '@bufferapp/components/style/font';

import ArrowIcon from '../ArrowIcon';
import TruncatedNumber from '../../../TruncatedNumber';

const baseMargin = 10;
const gridSummaryItemDiffContainer = {
  color: '#8D969E',
  display: 'inline-block',
  fontSize: '18px',
  fontWeight: 600,
  marginLeft: `${0.5 * baseMargin}px`,
};
const gridSummaryItemIcon = {
  display: 'inline-block',
  marginLeft: `${baseMargin}px`,
  height: '1rem',
};


const Diff = ({ diff }) => {
  if (diff === null) {
    return null;
  }
  let color = '#8D969E';
  let itemDiffStyle;
  if (diff > 0) {
    itemDiffStyle = {
      ...gridSummaryItemDiffContainer,
      color: '#2FD566',
    };
    color = 'shamrock';
  } else if (diff < 0) {
    itemDiffStyle = {
      ...gridSummaryItemDiffContainer,
      color: '#FF1E1E',
    };
    color = 'torchRed';
  }

  return (
    <div>
      <span style={gridSummaryItemIcon}>
        <ArrowIcon diff={diff} />
      </span>
      <div style={itemDiffStyle}>
        <span>
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
