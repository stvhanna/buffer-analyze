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
  openDropdown: PropTypes.func.isRequired,
  closeDropdown: PropTypes.func.isRequired,
  onSearchChange: PropTypes.func.isRequired,
};

const filterProfilesByService = (profiles, service) => (
  profiles.filter(p => p.service === service)
);

const mapStateToProps = (state) => {
  const filteredProfiles = filterProfilesByService(
    state.profiles.profiles,
    state.profiles.selectedProfileService,
  );
  return {
    isDropdownOpen: state.profiles.isDropdownOpen,
    profiles: filteredProfiles,
    profilesFilterString: state.profiles.profilesFilterString,
    selectedProfileId: state.profiles.selectedProfileId,
  };
};

const mapDispatchToProps = dispatch => ({
  selectProfile: ({ id, service }) => dispatch(actions.selectProfile(id, service)),
  openDropdown: () => dispatch(actions.openDropdown()),
  closeDropdown: () => dispatch(actions.closeDropdown()),
  onSearchChange: event => dispatch(actions.filterProfilesByUsername(event)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfileSelector);

export reducer, { actionTypes, actions } from './reducer';
