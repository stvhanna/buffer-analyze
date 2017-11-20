import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
  ChartStateNoData as NoData,
  ChartStateLoading as Loading,
  ChartCard,
  ChartHeader,
} from '@bufferapp/analyze-shared-components';

import Chart from '../Chart';
import Title from '../Title';
import Footer from '../Footer';

const AudienceComparisonChart = ({
  profilesMetricData,
  profileTotals,
  loading,
}) => {
  let content = null;
  let footer = null;

  if (loading) {
    content = <Loading active noBorder />;
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
    position: relative;
    padding: 1.5rem;
  `;

  return (
    <ChartCard>
      <ChartHeader>
        <Title />
      </ChartHeader>
      <ContentContainer>
        {content}
      </ContentContainer>
      {footer}
    </ChartCard>
  );
};

AudienceComparisonChart.defaultProps = {
  loading: false,
  selectedProfiles: [],
};

AudienceComparisonChart.propTypes = {
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

  })).isRequired,
};

export default AudienceComparisonChart;
