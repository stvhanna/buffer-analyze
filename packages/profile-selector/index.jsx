import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ProfileSelectorDropdown from './components/ProfileSelectorDropdown';
import { actions } from './reducer';

const ProfileSelector = props => (
  <ProfileSelectorDropdown {...props} />
);

ProfileSelector.propTypes = {
  profiles: PropTypes.arrayOf(PropTypes.shape({
    service: PropTypes.string.isRequired,
    selected: PropTypes.bool.isRequired,
    username: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string.isRequired,
  })).isRequired,
  isDropdownOpen: PropTypes.bool.isRequired,
  selectProfile: PropTypes.func.isRequired,
  toggleDropdown: PropTypes.func.isRequired,
};

export const filterProfilesByService = (profiles, service) => (
  profiles.filter(p => p.service === service)
);

const mapStateToProps = (state) => {
  // This is expecting the service to be the second element of the path
  const routeMatch = state.router.location.pathname.match(/\/.*\/(.*)\//);
  const service = routeMatch[1];

  return {
    isDropdownOpen: state.profiles.isDropdownOpen,
    profiles: filterProfilesByService(state.profiles.profiles, service),
  };
};

const mapDispatchToProps = dispatch => ({
  selectProfile: ({ id }) => dispatch(actions.selectProfile(id)),
  toggleDropdown: () => dispatch(actions.toggleDropdown()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfileSelector);

export reducer, { actionTypes, actions } from './reducer';
