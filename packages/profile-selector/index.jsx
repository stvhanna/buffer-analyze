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

const mapStateToProps = state => ({
  isDropdownOpen: state.profiles.isDropdownOpen,
  profiles: state.profiles.profiles,
  profilesFilterString: state.profiles.profilesFilterString,
  selectedProfileId: state.profiles.selectedProfile.id,
});

const mapDispatchToProps = dispatch => ({
  selectProfile: profile => dispatch(actions.selectProfile(profile)),
  openDropdown: () => dispatch(actions.openDropdown()),
  closeDropdown: () => dispatch(actions.closeDropdown()),
  onSearchChange: event => dispatch(actions.filterProfilesByUsername(event)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfileSelector);

export reducer, { actionTypes, actions } from './reducer';
export middleware from './middleware';
