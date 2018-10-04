import React from 'react';
import PropTypes from 'prop-types';
import Text from '@bufferapp/components/Text';
import { ChartTitle } from '@bufferapp/analyze-shared-components';

function getSelectedMetricsGroup(metrics, selectedGroup) {
  return metrics.find(group => group.key === selectedGroup);
}

const Title = ({ forReport, selectedGroup, metrics }) => (
  <ChartTitle forReport={forReport}>
    Audience overview {forReport && metrics.length > 1 && <Text color="shuttleGray" size="small">
      (for {getSelectedMetricsGroup(metrics, selectedGroup).label})
    </Text>}
  </ChartTitle>
);

Title.propTypes = {
  forReport: PropTypes.bool,
  selectedGroup: PropTypes.string,
  metrics: PropTypes.arrayOf(PropTypes.shape({ })),
};

Title.defaultProps = {
  forReport: false,
  selectedGroup: '',
  metrics: null,
};

export default Title;
