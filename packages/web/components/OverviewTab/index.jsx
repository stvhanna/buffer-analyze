import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import SummaryTable from '@bufferapp/summary-table';
import Divider from '@bufferapp/components/Divider';
import AverageTable from '@bufferapp/average-table';
import CompareChart from '@bufferapp/compare-chart';
import TopPostsTable from '@bufferapp/top-posts-table';
import HourlyChart from '@bufferapp/hourly-chart';

const OverviewTab = ({ match }) => (
  <div>
    <SummaryTable profileService={match.params.service} />
    <Divider marginTop="1rem" marginBottom="1rem" />
    <AverageTable />
    {match.params.service === 'twitter' && <HourlyChart />}
    <CompareChart />
    <TopPostsTable selectedProfileId={match.params.id} profileService={match.params.service} />
  </div>
);

OverviewTab.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      service: PropTypes.string,
    }),
  }).isRequired,
};

export default connect()(OverviewTab);