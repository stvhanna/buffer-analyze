import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import { actions as profilesActions } from '@bufferapp/analyze-profile-selector';
import NavSidebar from './components/NavSidebar';

export default connect(
  state => ({
    profiles: state.navSidebar.profiles,
  }),
  dispatch => ({
    onClick: (path, profileId, profileService) => {
      dispatch(push(path));
      dispatch(profilesActions.selectProfile(profileId, profileService));
    },
  }),
)(NavSidebar);

export reducer, { actions, actionTypes } from './reducer';
export middleware from './middleware';
