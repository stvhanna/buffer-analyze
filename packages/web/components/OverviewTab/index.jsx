import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import SummaryTable from '@bufferapp/summary-table';
import Divider from '@bufferapp/components/Divider';
import AverageTable from '@bufferapp/average-table';
import TopPostsTable from '@bufferapp/top-posts-table';

const OverviewTab = ({ match }) => (
  <div>
    <SummaryTable profileService={match.params.service} />
    <Divider marginTop="1rem" marginBottom="1rem" />
    <AverageTable />
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
