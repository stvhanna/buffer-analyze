import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import SummaryTable from '@bufferapp/summary-table';
import AverageTable from '@bufferapp/average-table';
import CompareChart from '@bufferapp/compare-chart';
import ContextualCompare from '@bufferapp/contextual-compare';
import AudienceChart from '@bufferapp/audience-chart';

const OverviewTab = ({ match }) => (
  <div>
    <SummaryTable profileService={match.params.service} />
    <AverageTable />
    <CompareChart />
    <AudienceChart />
    <ContextualCompare />
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
