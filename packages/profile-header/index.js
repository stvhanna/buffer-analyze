import { connect } from 'react-redux';
import ProfileHeader from './components/ProfileHeader';

// default export = container
export default connect(
  state => ({
    followersCount: state.followersCount,
  }),
)(ProfileHeader);

// export reducer, actions and action types
export reducer, { actions, actionTypes } from './reducer';
export middleware from './middleware';
