import React from 'react';
import PropTypes from 'prop-types';

import { Text, Divider } from '@bufferapp/components';
import NavSidebar from '@bufferapp/nav-sidebar';

const pageStyle = {
  display: 'flex',
  flexGrow: 1,
  height: '100%',
};

const defaultPageStyle = {
  padding: '1rem',
};

const DefaultPage = ({ location }) =>
  <div style={pageStyle}>
    <NavSidebar route={location.pathname} />
    <div style={defaultPageStyle}>
      <Text size="large">Welcome to Buffer Analyze 🎉</Text>
      <Divider />
      <Text>{'You are logged in!'}</Text>
    </div>
  </div>;

DefaultPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default DefaultPage;
