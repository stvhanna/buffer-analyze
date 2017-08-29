import { connect } from 'react-redux';
import DatePicker from './components/DatePicker';

// default export = container
export default connect(
  state => ({
    // add state here
  }),
)(DatePicker);

// export reducer, actions and action types
export reducer, { actions, actionTypes } from './reducer';
export middleware from './middleware';
