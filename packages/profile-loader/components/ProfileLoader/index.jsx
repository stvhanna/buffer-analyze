import React from 'react';
import PropTypes from 'prop-types';
import Loader from '@bufferapp/components/Loader';

const ProfileLoader = ({ loading, children }) => {
  if (loading) {
    return (<Loader>Loading...</Loader>);
  }
  return (<div>{children}</div>);
};

export default ProfileLoader;
