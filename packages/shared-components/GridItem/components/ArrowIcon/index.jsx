import React from 'react';
import PropTypes from 'prop-types';

import ArrowLongUpIcon from '@bufferapp/components/Icon/Icons/ArrowLongUpIcon';
import ArrowLongDownIcon from '@bufferapp/components/Icon/Icons/ArrowLongDownIcon';

const ArrowIcon = ({ diff }) => {
  if (diff > 0) {
    return <ArrowLongUpIcon color="shamrock" />;
  } else if (diff < 0) {
    return <ArrowLongDownIcon color="torchRed" />;
  }
  return null;
};

ArrowIcon.propTypes = {
  diff: PropTypes.number.isRequired,
};

export default ArrowIcon;
