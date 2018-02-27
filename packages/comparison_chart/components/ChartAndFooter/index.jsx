import React from 'react';
import PropTypes from 'prop-types';

import {
  ChartStateNoData as NoData,
  ChartStateLoading as Loading,
} from '@bufferapp/analyze-shared-components';

import Chart from '../Chart';
import Footer from '../Footer';

const ChartAndFooter = ({
  loading,
  metrics,
  metricKey,
  profiles,
}) => {
  if (loading) {
    return <Loading active noBorder />;
  } else if (!metrics || !metrics[metricKey]) {
    return <NoData />;
  }
  return (<div>
    <Chart
      metricKey={metricKey}
      profilesMetricData={metrics[metricKey].profilesMetricData}
      profiles={profiles}
    />
    <Footer
      profileTotals={metrics[metricKey].profileTotals}
      profiles={profiles}
      metricKey={metricKey}
    />
  </div>);
};

ChartAndFooter.defaultProps = {
  loading: false,
};

ChartAndFooter.propTypes = {
  loading: PropTypes.bool,
  metrics: PropTypes.shape({}).isRequired,
  metricKey: PropTypes.string.isRequired,
  profiles: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string.isRequired,
    service: PropTypes.string.isRequired,
  })).isRequired,
};

export default ChartAndFooter;

