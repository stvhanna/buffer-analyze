import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  ChartStateNoData as NoData,
  ChartStateLoading as Loading,
  ChartCard as Card,
  ChartHeader as Header,
} from '@bufferapp/analyze-shared-components';
import AddReport from '@bufferapp/add-report';

import ChartAndFooter from '../ChartAndFooter';
import Title from '../Title';

const ChartWrapper = ({
  metrics,
  profiles,
  profileIds,
  loading,
  metricKey,
}) => {
  let content = null;

  if (loading) {
    content = <Loading active noBorder />;
  } else if (!metrics[metricKey]) {
    content = <NoData />;
  } else {
    content = (
      <ChartAndFooter
        metrics={metrics}
        metricKey={metricKey}
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
        <Title metricKey={metricKey} />
        <AddReport
          chart="comparison"
          state={{
            metricKey,
            profileIds,
            profiles,
          }}
        />
      </Header>
      <ContentContainer>
        {content}
      </ContentContainer>
    </Card>
  );
};

ChartWrapper.defaultProps = {
  loading: false,
  selectedProfiles: [],
};

ChartWrapper.propTypes = {
  loading: PropTypes.bool,
  metricKey: PropTypes.string.isRequired,
  // props used for generating chart
  metrics: PropTypes.shape({}).isRequired,
  profileIds: PropTypes.arrayOf(PropTypes.string).isRequired,
  profiles: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string.isRequired,
    service: PropTypes.string.isRequired,
  })).isRequired,
};

export default ChartWrapper;

