import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import { actions as profilesActions } from '@bufferapp/analyze-profile-selector';
import NavSidebar from './components/NavSidebar';

export default connect(
  state => ({
    profiles: state.navSidebar.profiles,
  }),
  dispatch => ({
    onClick: (path, profileId) => {
      dispatch(push(path));
      dispatch(profilesActions.selectProfile(profileId));
    },
  }),
)(NavSidebar);

export reducer, { actions, actionTypes } from './reducer';
export middleware from './middleware';
