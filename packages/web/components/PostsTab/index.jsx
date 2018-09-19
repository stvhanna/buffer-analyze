import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PostsTable from '@bufferapp/posts-table';
import HashtagsTable from '@bufferapp/hashtags-table';
import PostsSummaryTable from '@bufferapp/posts-summary-table';

const PostsTab = () =>
  <div>
    <PostsSummaryTable />
    <HashtagsTable />
    <PostsTable />
  </div>;

PostsTab.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      service: PropTypes.string,
    }),
  }).isRequired,
};

export default connect()(PostsTab);
