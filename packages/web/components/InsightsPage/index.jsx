import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NavSidebar from '@bufferapp/nav-sidebar';
import { Text, Divider } from '@bufferapp/components';

const pageStyle = {
  display: 'flex',
  flexGrow: 1,
  height: '100%',
};

const pageContentStyle = {
  padding: '1rem',
};

const InsightsPage = ({ location }) => (
  <div style={pageStyle}>
    <NavSidebar route={location.pathname} />
    <div style={pageContentStyle}>
      <Text>This is where the Insights will go.</Text>
    </div>
  </div>
);

InsightsPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default connect()(InsightsPage);
