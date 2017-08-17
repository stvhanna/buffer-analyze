import { connect } from 'react-redux';
import NavSidebar from './components/NavSidebar';

export default connect(
  state => ({
    profiles: state.navSidebar.profiles,
  }),
)(NavSidebar);

export reducer from './reducer';
export middleware from './middleware';
