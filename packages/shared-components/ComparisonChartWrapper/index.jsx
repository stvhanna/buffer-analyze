import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
  ChartStateNoData as NoData,
  ChartStateLoading as Loading,
  ChartCard as Card,
  ChartHeader as Header,
  ComparisonChart as Chart,
  ComparisonFooter as Footer,
  ComparisonTitle as Title,
} from '@bufferapp/analyze-shared-components';

const ComparisonChartWrapper = ({
  profilesMetricData,
  profileTotals,
  profiles,
  loading,
  chartName,
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
        profiles={profiles}
      />
    );
  }

  const ContentContainer = styled.div`
    position: relative;
    padding: 1.5rem;
  `;

  return (
    <Card>
      <Header>
        <Title chartName={chartName} />
      </Header>
      <ContentContainer>
        {content}
      </ContentContainer>
      {footer}
    </Card>
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
  })).isRequired,
  profiles: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string.isRequired,
    service: PropTypes.string.isRequired,
  })).isRequired,
};

export default ComparisonChartWrapper;
