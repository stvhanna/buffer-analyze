import { connect } from 'react-redux';
import ProfileLoader from './components/ProfileLoader';

// default export = container
export default connect(
  state => ({
    loading: state.profileLoader.loading,
  }),
)(ProfileLoader);

// export reducer, actions and action types
export reducer, { actions, actionTypes } from './reducer';
