import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NavSidebar from '@bufferapp/nav-sidebar';
import SummaryTable from '@bufferapp/summary-table';
import ProfileSelector from '@bufferapp/analyze-profile-selector';

const pageStyle = {
  display: 'flex',
  flexGrow: 1,
  height: '100%',
};

const pageContentStyle = {
  padding: '1rem 0',
};

const InsightsPage = ({ match, location }) => (
  <div style={pageStyle}>
    <NavSidebar route={location.pathname} />
    <div style={pageContentStyle}>
      <ProfileSelector route={location.pathname} />
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
