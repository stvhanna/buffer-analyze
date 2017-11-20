import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
  geyser,
} from '@bufferapp/components/style/color';

import {
  ChartStateNoData as NoData,
  ChartStateLoading as Loading,
  ComparisonChart as Chart,
  ComparisonFooter as Footer,
  ComparisonTitle as Title,
} from '@bufferapp/analyze-shared-components';

const ComparisonChartWrapper = ({
  profilesMetricData,
  profileTotals,
  loading,
  chartName,
}) => {
  let content = null;
  let footer = null;

  if (loading) {
    content = <Loading active text={`${chartName} comparison chart loading...`} />;
  } else if (profilesMetricData.length === 0) {
    content = <NoData />;
  } else {
    content = (
      <div>
        <Chart
          profilesMetricData={profilesMetricData}
        />
      </div>
    );
    footer = (
      <Footer
        profileTotals={profileTotals}
      />
    );
  }

  const ContentContainer = styled.div`
    padding: 0;
    margin: auto;
    border-radius: 2px;
    border: solid 1px ${geyser};
    min-height: 12rem;
    position: relative;
  `;

  return (
    <div>
      <Title chartName={chartName} />
      <ContentContainer>
        {content}
      </ContentContainer>
      {footer}
    </div>
  );
};

ComparisonChartWrapper.defaultProps = {
  loading: false,
  selectedProfiles: [],
};

ComparisonChartWrapper.propTypes = {
  loading: PropTypes.bool,
  chartName: PropTypes.string.isRequired,
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
  })).isRequired,
};

export default ComparisonChartWrapper;
