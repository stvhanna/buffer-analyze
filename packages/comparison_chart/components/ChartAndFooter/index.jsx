import React from 'react';
import PropTypes from 'prop-types';

import Chart from '../Chart';
import Footer from '../Footer';

const ChartAndFooter = ({
  metrics,
  metricKey,
  profiles,
}) => (<div>
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

ChartAndFooter.propTypes = {
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

