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
    username: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string.isRequired,
  })).isRequired,
  isDropdownOpen: PropTypes.bool.isRequired,
  selectProfile: PropTypes.func.isRequired,
  selectedProfileId: PropTypes.string.isRequired,
  toggleDropdown: PropTypes.func.isRequired,
  onSearchChange: PropTypes.func.isRequired,
};

export const __filterProfilesByService = (profiles, service) => (
  profiles.filter(p => p.service === service)
);

export const __filterProfilesByUsername = (profiles, filterString) => (
  profiles.filter(p => p.username.match(filterString))
);

export const __mapStateToProps = (state, ownProps) => {
  let filteredProfiles = __filterProfilesByUsername(
    state.profiles.profiles,
    state.profiles.profilesFilterString,
  );
  filteredProfiles = __filterProfilesByService(
    filteredProfiles,
    ownProps.profileService,
  );
  return {
    isDropdownOpen: state.profiles.isDropdownOpen,
    profiles: filteredProfiles,
  };
};

const mapDispatchToProps = dispatch => ({
  selectProfile: ({ id }) => dispatch(actions.selectProfile(id)),
  toggleDropdown: () => dispatch(actions.toggleDropdown()),
  onSearchChange: event => dispatch(actions.filterProfilesByUsername(event)),
});

export default connect(
  __mapStateToProps,
  mapDispatchToProps,
)(ProfileSelector);

export reducer, { actionTypes, actions } from './reducer';
