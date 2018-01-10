import React from 'react';
import Text from '@bufferapp/components/Text';
import PropTypes from 'prop-types';

const style = {
  margin: '0',
  padding: '0',
};

const Title = ({ profileService }) =>
  <h2 style={style}>
    <Text weight="bold" size="large">
      {profileService === 'twitter' ? 'Tweet breakdown' : 'Post breakdown'}
    </Text>
  </h2>
;

Title.propTypes = {
  profileService: PropTypes.string.isRequired,
};

export default Title;

