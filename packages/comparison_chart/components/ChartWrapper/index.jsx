import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  ChartCard as Card,
  ChartHeader as Header,
} from '@bufferapp/analyze-shared-components';
import AddReport from '@bufferapp/add-report';

import ChartAndFooter from '../ChartAndFooter';
import Title from '../Title';

const ContentContainer = styled.div`
  position: relative;
  padding: 1.5rem;
`;

class ChartWrapper extends PureComponent {
  render() {
    const {
      metrics,
      profiles,
      profileIds,
      loading,
      metricKey,
    } = this.props;

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
          <ChartAndFooter
            loading={loading}
            metrics={metrics}
            metricKey={metricKey}
            profiles={profiles}
          />
        </ContentContainer>
      </Card>
    );
  }
}

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

