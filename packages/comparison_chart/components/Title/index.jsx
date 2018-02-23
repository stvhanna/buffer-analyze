import React from 'react';
import PropTypes from 'prop-types';
import { ChartTitle } from '@bufferapp/analyze-shared-components';

function capitalizeMetricName(name) {
  return `${name.charAt(0).toUpperCase()}${name.slice(1)}`;
}

const ComparisonTitle = ({ metricKey, forReport }) =>
  <ChartTitle forReport={forReport}>
    {capitalizeMetricName(metricKey)} comparison
  </ChartTitle>
;

ComparisonTitle.propTypes = {
  metricKey: PropTypes.string.isRequired,
  forReport: PropTypes.bool,
};

ComparisonTitle.defaultProps = {
  forReport: false,
};

export default ComparisonTitle;
