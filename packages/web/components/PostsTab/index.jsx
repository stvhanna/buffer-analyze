import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import PostsSummaryTable from '@bufferapp/posts-summary-table';

const PostsTab = ({ match }) => (
  <PostsSummaryTable profileService={match.params.service} />
);

PostsTab.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      service: PropTypes.string,
    }),
  }).isRequired,
};

export default connect()(PostsTab);
