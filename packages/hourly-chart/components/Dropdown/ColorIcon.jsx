import React from 'react';
import PropTypes from 'prop-types';

const style = {
  display: 'inline-block',
  verticalAlign: 'baseline',
  width: '10px',
  height: '10px',
  marginRight: '5px',
  borderRadius: '1px',
};

const ColorIcon = ({ color, circle }) => (
  <i
    style={{
      ...style,
      borderRadius: circle ? '50%' : null,
      background: color,
    }}
  />
);

ColorIcon.defaultProps = {
  color: null,
  circle: false,
};

ColorIcon.propTypes = {
  color: PropTypes.string,
  circle: PropTypes.bool,
};

export default ColorIcon;
