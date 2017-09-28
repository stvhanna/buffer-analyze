import React from 'react';
import PropTypes from 'prop-types';
import Loader from '@bufferapp/components/Loader';

const pageContentStyle = {
  padding: '0rem 2rem',
  display: 'flex',
  flexGrow: 1,
  flexDirection: 'column',
  height: '100vh',
  maxWidth: '70rem',
};

const ProfileLoader = ({ loading, children }) => {
  if (loading) {
    return (<Loader>Loading...</Loader>);
  }
  return (<div style={pageContentStyle}>{children}</div>);
};

ProfileLoader.defaultProps = {
  loading: false,
};

ProfileLoader.propTypes = {
  loading: PropTypes.bool,
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
};

export default ProfileLoader;
