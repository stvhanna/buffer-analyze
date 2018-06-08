import React from 'react';
import PropTypes from 'prop-types';
import { ChartTitle } from '@bufferapp/analyze-shared-components';

const Title = ({ forReport }) =>
  <ChartTitle forReport={forReport}>
    Hourly engagements
  </ChartTitle>
;

Title.propTypes = {
  forReport: PropTypes.bool,
};

Title.defaultProps = {
  forReport: false,
};

export default Title;
