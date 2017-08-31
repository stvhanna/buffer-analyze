import React from 'react';
import PropTypes from 'prop-types';
import Text from '@bufferapp/components/Text';

const title = {
  margin: '2rem 0 1rem',
};

const Title = ({ profileService }) =>
  <h2 style={title}>
    <Text>
      {profileService === 'twitter' ? 'Tweet performance ' : 'Performance '}
      for the selected 7 days compared to the previous period
    </Text>
  </h2>
;

Title.propTypes = {
  profileService: PropTypes.string.isRequired,
};

export default Title;

