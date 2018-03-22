import React from 'react';
import PropTypes from 'prop-types';
import { ChartTitle } from '@bufferapp/analyze-shared-components';

const Title = ({ forReport, selectedMetricLabel }) => (
  <ChartTitle forReport={forReport}>
    { forReport ? selectedMetricLabel : 'Metrics breakdown' }
  </ChartTitle>
);

Title.propTypes = {
  forReport: PropTypes.bool,
  selectedMetricLabel: PropTypes.string,
};

Title.defaultProps = {
  forReport: false,
  selectedMetricLabel: '',
};

export default Title;
