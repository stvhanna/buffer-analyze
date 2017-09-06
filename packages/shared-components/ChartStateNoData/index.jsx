import React from 'react';
import PropTypes from 'prop-types';

import Text from '@bufferapp/components/Text';
import {
  geyser,
} from '@bufferapp/components/style/color';

const messageContainer = {
  boxSizing: 'border-box',
  border: `solid 1px ${geyser}`,
  background: 'white',
  borderRadius: '2px',
  marginLeft: 30,
  marginRight: 30,
  flexDirection: 'row',
  flex: 1,
};

const description = {
  marginBottom: 30,
};

const NoData = ({ alignTop }) => {
  const container = {
    opacity: 1,
    position: 'absolute',
    top: alignTop ? 80 : 0,
    bottom: 0,
    right: 0,
    left: 0,
    zIndex: 2,
    textAlign: 'center',
    background: 'rgba(255, 255, 255, 1)',
    display: 'flex',
    alignItems: alignTop ? 'flex-start' : 'center',
    justifyContent: 'center',
    transition: 'opacity 350ms ease-in-out',
  };
  return (
    <div style={container}>
      <div style={messageContainer}>
        <h1><Text size="large">We couldn't find any analytics for this date range.</Text></h1>
        <p style={description}>
          <Text>Try selecting a longer date range, or share something and check back tomorrow :)</Text>
        </p>
      </div>
    </div>
  );
};

NoData.defaultProps = {
  alignTop: false,
};

NoData.propTypes = {
  alignTop: PropTypes.bool,
};
export default NoData;

