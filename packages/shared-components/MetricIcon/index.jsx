import React from 'react';
import PropTypes from 'prop-types';

import {
  geyser,
} from '@bufferapp/components/style/color';

import {
  color as metricsColor,
} from '../style';

const iconSize = 7;
const base = 10;
const style = {
  display: 'inline-block',
  verticalAlign: 'baseline',
  width: `${iconSize}px`,
  height: `${iconSize}px`,
  marginRight: `${0.5 * base}px`,

  borderWidth: '1px',
  borderStyle: 'solid',
};

function lightenDarkenColor (color, amt) {
  let usePound = false;
  if (color[0] === '#') {
    color = color.slice(1);
    usePound = true;
  }

  /* eslint-disable no-bitwise */
  const num = parseInt(color, 16);
  let r = (num >> 16) + amt;
  if (r > 255) r = 255;
  else if (r < 0) r = 0;

  let b = ((num >> 8) & 0x00FF) + amt;
  if (b > 255) b = 255;
  else if (b < 0) b = 0;

  let g = (num & 0x0000FF) + amt;
  if (g > 255) g = 255;
  else if (g < 0) g = 0;

  return `${usePound ? '#' : ''}${(g | (b << 8) | (r << 16)).toString(16)}`;
}

function getIconStyle(metric) {
  const color = metric.color ? metric.color : metricsColor[metric.key] || geyser;
  return Object.assign({}, style, {
    background: color,
    borderColor: lightenDarkenColor(color, -30),
    borderRadius: `${metric.squaredIcon ? 0 : base}px`,
  });
}

const MetricIcon = ({ metric }) => (<span style={getIconStyle(metric)} />);

MetricIcon.propTypes = {
  metric: PropTypes.shape({
    color: PropTypes.string,
    key: PropTypes.string,
  }).isRequired,
};

export default MetricIcon;
