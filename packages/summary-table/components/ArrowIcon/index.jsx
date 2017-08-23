import React from 'react';
import PropTypes from 'prop-types';

import ArrowLongUpIcon from '@bufferapp/components/Icon/Icons/ArrowLongUpIcon';
import ArrowLongRightIcon from '@bufferapp/components/Icon/Icons/ArrowLongRightIcon';
import ArrowLongDownIcon from '@bufferapp/components/Icon/Icons/ArrowLongDownIcon';

const ArrowIcon = ({ diff }) => {
  if (diff > 0) {
    return <ArrowLongUpIcon color="#2FD566" />;
  } else if (diff === 0) {
    return <ArrowLongRightIcon color="#8D969E" />;
  } else if (diff < 0) {
    return <ArrowLongDownIcon color="#FF1E1E" />;
  }
};

ArrowIcon.propTypes = {
  diff: PropTypes.number.isRequired,
};

export default ArrowIcon;
