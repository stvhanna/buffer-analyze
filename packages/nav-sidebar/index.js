import { push } from 'react-router-redux';
import { connect } from 'react-redux';
// import { actions } from '@bufferapp/analyze-profile-selector';
import NavSidebar from './components/NavSidebar';

export default connect(
  state => ({
    daysRemaining: state.account.trialDaysRemaining,
    onTrial: state.account.onTrial,
    isOwner: state.profiles.isOwner,
    organizationId: state.profiles.organizationId,
  }),
  dispatch => ({
    onClick: path => dispatch(push(path)),
  }),
)(NavSidebar);

export reducer, { actions, actionTypes } from './reducer';
