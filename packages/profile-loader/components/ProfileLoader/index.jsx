import React from 'react';
import PropTypes from 'prop-types';
import Loader from '@bufferapp/components/Loader';

const pageContentStyle = {
  background: 'rgb(250, 250, 250)',
  display: 'flex',
  flexGrow: 1,
  flexDirection: 'column',
  height: '100vh',
  maxWidth: '100%',
};

const pageContentLoadingStyle = {
  ...pageContentStyle,
  justifyContent: 'center',
  alignItems: 'center',
};

const ProfileLoader = ({ loading, children }) => {
  if (loading) {
    return (<div style={pageContentLoadingStyle}><Loader>Loading...</Loader></div>);
  }
  return (<div style={pageContentStyle}>{children}</div>);
};

ProfileLoader.defaultProps = {
  loading: false,
};

ProfileLoader.propTypes = {
  loading: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default ProfileLoader;
