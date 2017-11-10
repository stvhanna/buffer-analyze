import React from 'react';
import PropTypes from 'prop-types';

import Text from '@bufferapp/components/Text';
import {
  geyser,
} from '@bufferapp/components/style/color';

const messageContainer = {
  boxSizing: 'border-box',
  background: 'white',
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

