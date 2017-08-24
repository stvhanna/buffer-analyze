import React from 'react';
import { connect } from 'react-redux';

const ProfileSelector = () => (
  (<div> yeah! </div>)
);

export default connect(
  state => ({
    profiles: state.navSidebar.profiles,
  }),
)(ProfileSelector);

export reducer, { actionTypes, actions } from './reducer';
