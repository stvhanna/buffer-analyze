import { push } from 'react-router-redux';
import { connect } from 'react-redux';
// import { actions } from '@bufferapp/analyze-profile-selector';
import NavSidebar from './components/NavSidebar';

export default connect(
  () => ({
  }),
  dispatch => ({
    onClick: path => dispatch(push(path)),
  }),
)(NavSidebar);

export reducer, { actions, actionTypes } from './reducer';
