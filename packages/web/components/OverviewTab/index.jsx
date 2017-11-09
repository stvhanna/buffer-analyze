import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import SummaryTable from '@bufferapp/summary-table';
import AverageTable from '@bufferapp/average-table';
import CompareChart from '@bufferapp/compare-chart';
import TopPostsTable from '@bufferapp/top-posts-table';
import HourlyChart from '@bufferapp/hourly-chart';
import ContextualCompare from '@bufferapp/contextual-compare';

const OverviewTab = ({ match }) => (
  <div>
    <SummaryTable profileService={match.params.service} />
    <AverageTable />
    {match.params.service === 'twitter' && <HourlyChart />}
    <CompareChart />
    {match.params.service === 'facebook' && <ContextualCompare /> }
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
