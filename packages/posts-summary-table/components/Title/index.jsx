import React from 'react';
import PropTypes from 'prop-types';
import { ChartTitle } from '@bufferapp/analyze-shared-components';

const Title = ({ profileService, forReport }) =>
  <ChartTitle forReport={forReport}>
    {profileService === 'twitter' ? 'Tweet ' : 'Post '}
    summary
  </ChartTitle>
;

Title.propTypes = {
  profileService: PropTypes.string.isRequired,
  forReport: PropTypes.bool,
};

Title.defaultProps = {
  forReport: false,
};

export default Title;

