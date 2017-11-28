import React from "react";
import PropTypes from "prop-types";
import { ComparisonChartWrapper } from "@bufferapp/analyze-shared-components";

const CHART_NAME = "Comments";

const CommentsComparisonChart = ({
  profilesMetricData,
  profileTotals,
  loading
}) => (
  <ComparisonChartWrapper
    profilesMetricData={profilesMetricData}
    profileTotals={profileTotals}
    loading={loading}
    chartName={CHART_NAME}
  />
);

CommentsComparisonChart.defaultProps = {
  loading: false,
  selectedProfiles: []
};

CommentsComparisonChart.propTypes = {
  loading: PropTypes.bool,
  // props used for generating chart
  profilesMetricData: PropTypes.arrayOf(
    PropTypes.shape({
      dailyData: PropTypes.arrayOf(
        PropTypes.shape({
          day: PropTypes.number.isRequired,
          metric: PropTypes.shape({
            color: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            value: PropTypes.number.isRequired
          })
        })
      ),
      service: PropTypes.string.isRequired,
      timezone: PropTypes.string.isRequired
    })
  ).isRequired,
  // props  for generating the right footer
  profileTotals: PropTypes.arrayOf(
    PropTypes.shape({
      metric: PropTypes.shape({
        label: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired
      }),
      currentPeriodTotal: PropTypes.number.isRequired,
      currentPeriodDiff: PropTypes.number.isRequired,
      profileId: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
      service: PropTypes.string
    })
  ).isRequired
};

export default CommentsComparisonChart;
