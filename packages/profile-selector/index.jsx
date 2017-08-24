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
    handle: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string.isRequired,
  })).isRequired,
  isDropdownOpen: PropTypes.bool.isRequired,
  selectProfile: PropTypes.func.isRequired,
  toggleDropdown: PropTypes.func.isRequired,
};

const mapStateToProps = (state, props) => ({
  isDropdownOpen: false,
  profiles: state.navSidebar.profiles.filter(p => p.service === props.location.match.service),
});

const mapDispatchToProps = dispatch => ({
  selectProfile: id => dispatch(actions.selectedProfile({ id })),
  toggleDropdown: () => dispatch(actions.toggleDropdown),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfileSelector);

export reducer, { actionTypes, actions } from './reducer';
