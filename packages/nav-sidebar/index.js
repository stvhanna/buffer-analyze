import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import { actions as profilesActions } from '@bufferapp/analyze-profile-selector';
import NavSidebar from './components/NavSidebar';

export default connect(
  state => ({
    facebookProfile: state.navSidebar.facebookProfile,
    twitterProfile: state.navSidebar.twitterProfile,
    instagramProfile: state.navSidebar.instagramProfile,
  }),
  dispatch => ({
    onClick: (path, profileId, profileService) => {
      dispatch(push(path));
      if (path === '/comparisons') {
        profileService = null;
      }
      dispatch(profilesActions.selectProfileService(profileService));
    },
  }),
)(NavSidebar);

export reducer, { actions, actionTypes } from './reducer';
