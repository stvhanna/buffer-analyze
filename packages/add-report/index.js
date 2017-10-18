import { connect } from 'react-redux';
import AddReport from './components/AddReport';

// default export = container
export default connect(
  // state => ({
    // add state here
  // }),
)(AddReport);

// export reducer, actions and action types
// export reducer, { actions, actionTypes } from './reducer';
// export middleware from './middleware';
