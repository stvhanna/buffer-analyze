import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import NavSidebar from './components/NavSidebar';

export default connect(
  state => ({
    profiles: state.navSidebar.profiles,
  }),
  dispatch => ({
    onClick: path => dispatch(push(path)),
  }),
)(NavSidebar);

export reducer from './reducer';
export middleware from './middleware';
