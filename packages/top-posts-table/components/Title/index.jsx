import React from 'react';
import PropTypes from 'prop-types';
import Text from '@bufferapp/components/Text';

const title = {
  margin: '2rem 0 0',
};

const Title = () =>
  <h2 style={title}>
    <Text weight="bold" size="large">
      Top Posts
    </Text>
  </h2>
;

export default Title;

