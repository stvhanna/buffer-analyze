import React from 'react';
import PropTypes from 'prop-types';

import {
  color,
} from '@bufferapp/analyze-shared-components/style';

import {
  geyser,
} from '@bufferapp/components/style/color';

const style = {
  display: 'inline-block',
  verticalAlign: 'baseline',
  width: '10px',
  height: '10px',
  marginRight: '5px',
  borderRadius: '1px',
};

const ColorIcon = ({ metric, circle }) => (
  <i
    style={{
      ...style,
      borderRadius: circle ? '50%' : null,
      background: color[metric] || geyser,
    }}
  />
);

ColorIcon.defaultProps = {
  metric: null,
  circle: false,
};

ColorIcon.propTypes = {
  metric: PropTypes.string,
  circle: PropTypes.bool,
};

export default ColorIcon;
