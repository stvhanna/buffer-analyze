import React from 'react';
import { connect } from 'react-redux';

import Table from './components/Table';
import { actions } from './reducer';

export const HashtagsTableWrapper = props => (<div><Table {...props} /></div>);

// default export = container
export default connect(
  state => ({
    loading: state.hashtags.loading,
    hashtags: state.hashtags.hashtags,
    labels: state.hashtags.labels,
    sortBy: state.hashtags.sortBy,
    isDescending: state.hashtags.isDescending,
    numToShow: state.hashtags.numToShow,
    startDate: state.date.startDate,
    endDate: state.date.endDate,
  }),
  dispatch => ({
    handleSortBy: ({ metricKey, isDescending }) => dispatch(
      actions.sortBy(metricKey, isDescending),
    ),
  }),
)(HashtagsTableWrapper);

// export reducer, actions and action types
export reducer, { actions, actionTypes } from './reducer';
export middleware from './middleware';
export { Table, Title } from './components/Table';
