import React from 'react';
import PropTypes from 'prop-types';
import Text from '@bufferapp/components/Text';

const title = {
  margin: 0,
  padding: 0,
};

const Title = ({ profileService }) =>
  <h2 style={title}>
    <Text weight="bold" size="large">
      {profileService === 'twitter' ? 'Tweet ' : 'Post '}
      summary
    </Text>
  </h2>
;

Title.propTypes = {
  profileService: PropTypes.string.isRequired,
};

export default Title;

