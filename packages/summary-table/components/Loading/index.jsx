import React from 'react';
import PropTypes from 'prop-types';

import {
  geyser,
} from '@bufferapp/components/style/color';
import Loader from '@bufferapp/components/Loader';

const loaderContainer = {
  background: 'white',
  borderRadius: '2px',
  flexDirection: 'row',
  flex: 1,
};

const Loading = ({ text, maxHeight, noBorder }) => {
  const style = {
    opacity: 1,
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    zIndex: 2,
    textAlign: 'center',
    border: noBorder ? 'none' : `solid 1px ${geyser}`,
    background: 'rgba(255,255,255,.95)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'opacity 350ms ease-in-out',
    maxHeight: maxHeight || 'none',
  };

  return (
    <div style={style}>
      <div style={loaderContainer}>
        <Loader>{text}</Loader>
      </div>
    </div>
  );
};

Loading.propTypes = {
  text: PropTypes.string,
  maxHeight: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.bool,
  ]),
  noBorder: PropTypes.bool,
};

Loading.defaultProps = {
  text: 'Loading...',
  maxHeight: false,
  noBorder: false,
};

export default Loading;
