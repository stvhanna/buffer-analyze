import { connect } from 'react-redux';
import MultiProfileSelector from './components/MultiProfileSelector';
import { actions } from './reducer';

// we only care about facebook, twitter and facebook profiles
const filterProfilesByService = profiles => (
  profiles.filter(p => ['facebook', 'twitter', 'instagram'].indexOf(p.service) > -1)
);

const mapStateToProps = state => ({
  profiles: filterProfilesByService(state.profiles.profiles),
  isDropdownOpen: state.multiProfileSelector.isDropdownOpen,
  profilesFilterString: state.multiProfileSelector.profilesFilterString,
  selectedProfiles: state.multiProfileSelector.selectedProfiles,
});

const mapDispatchToProps = dispatch => ({
  toggleProfile: ({ id, service }) => dispatch(actions.toggleProfile(id, service)),
  compareProfiles: selectedProfiles => dispatch(actions.compareProfiles(selectedProfiles)),
  openDropdown: () => dispatch(actions.openDropdown()),
  closeDropdown: () => dispatch(actions.closeDropdown()),
  onSearchChange: event => dispatch(actions.filterProfilesByUsername(event)),
});

// default export = container
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MultiProfileSelector);

// export reducer, actions and action types
export reducer, { actions, actionTypes } from './reducer';
