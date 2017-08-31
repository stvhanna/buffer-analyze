import { connect } from 'react-redux';
import ProfileHeader from './components/ProfileHeader';

// this one gets the state and converts to props
// default export = container
export default connect(
  (state, props) => ({
    profile: state.profiles.profiles.find(profile => profile.id === props.selectedProfileId),
    followersCount: Number(state.profileHeader.followersCount),
  }),
)(ProfileHeader);

// export reducer, actions and action types
export reducer, { actions, actionTypes } from './reducer';
export middleware from './middleware';
