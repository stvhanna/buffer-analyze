import { push } from 'react-router-redux';
import { connect } from 'react-redux';
// import { actions } from '@bufferapp/analyze-profile-selector';
import NavSidebar from './components/NavSidebar';

export default connect(
  state => ({
    searchParameters: state.router.location.search,
  }),
  dispatch => ({
    onClick: (path, search) => dispatch(push({
      pathname: path,
      search,
    })),
  }),
)(NavSidebar);

export reducer, { actions, actionTypes } from './reducer';
