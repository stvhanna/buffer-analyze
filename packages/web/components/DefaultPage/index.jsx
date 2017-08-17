import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

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

const DefaultPage = ({ match, loggedIn, loggingIn, checkedCookie }) => {
  let message = 'You are not logged in!';
  if (loggedIn) {
    message = 'You are logged in!';
  }
  if (loggingIn) {
    message = 'Please wait...';
  }
  return (
    <div style={pageStyle}>
      <NavSidebar route={match.path}/>
      {checkedCookie && <div style={defaultPageStyle}>
        <Text size="large">Welcome to Buffer Analyze 🎉</Text>
        <Divider />
        <Text>{message}</Text>
      </div>}
    </div>
  );
};

DefaultPage.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  loggingIn: PropTypes.bool.isRequired,
  checkedCookie: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ login }) => login;

export default connect(mapStateToProps)(DefaultPage);
