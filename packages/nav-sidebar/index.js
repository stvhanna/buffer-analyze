import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import NavSidebar from './components/NavSidebar';
import { actions } from './reducer';

export default connect(
  state => ({
    profiles: state.navSidebar.profiles,
  }),
  dispatch => ({
    onClick: (path, profileId) => {
      dispatch(push(path));
      dispatch(actions.selectProfile(profileId));
    },
  }),
)(NavSidebar);

export reducer, { actions, actionTypes } from './reducer';
export middleware from './middleware';
