import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NavSidebar from '@bufferapp/nav-sidebar';
import { Text } from '@bufferapp/components';
import SummaryTable from '@bufferapp/summary-table';

const pageStyle = {
  display: 'flex',
  flexGrow: 1,
  height: '100%',
};

const pageContentStyle = {
  padding: '1rem',
};

const InsightsPage = ({ match, location }) => (
  <div style={pageStyle}>
    <NavSidebar route={location.pathname} />
    <div style={pageContentStyle}>
      <Text>This is where the Insights will go.</Text>
      <SummaryTable profileService={match.params.service} />
    </div>
  </div>
);

InsightsPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      service: PropTypes.string,
    }),
  }).isRequired,
};

export default connect()(InsightsPage);
