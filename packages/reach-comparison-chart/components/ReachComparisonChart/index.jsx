import React from 'react';
import PropTypes from 'prop-types';
import { ComparisonChartWrapper } from '@bufferapp/analyze-shared-components';

const CHART_NAME = 'Reach';

const ReachComparisonChart = ({
  profilesMetricData,
  profileTotals,
  profiles,
  loading,
}) =>
  (
    <ComparisonChartWrapper
      profilesMetricData={profilesMetricData}
      profileTotals={profileTotals}
      profiles={profiles}
      loading={loading}
      chartName={CHART_NAME}
    />
  );

ReachComparisonChart.defaultProps = {
  loading: false,
  selectedProfiles: [],
};

ReachComparisonChart.propTypes = {
  loading: PropTypes.bool,
  // props used for generating chart
  profilesMetricData: PropTypes.arrayOf(PropTypes.shape({
    dailyData: PropTypes.arrayOf(PropTypes.shape({
      day: PropTypes.number.isRequired,
      metric: PropTypes.shape({
        color: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        value: PropTypes.number.isRequired,
      }),
    })),
    service: PropTypes.string.isRequired,
    timezone: PropTypes.string.isRequired,
  })).isRequired,
  // props  for generating the right footer
  profileTotals: PropTypes.arrayOf(PropTypes.shape({
    metric: PropTypes.shape({
      label: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
    }),
    currentPeriodTotal: PropTypes.number.isRequired,
    currentPeriodDiff: PropTypes.number.isRequired,
    profileId: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    service: PropTypes.string,
  })).isRequired,
  profiles: PropTypes.arrayOf(PropTypes.shape({
    profileId: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string.isRequired,
    service: PropTypes.string.isRequired,
  })).isRequired,
};

export default ReachComparisonChart;
