import { connect } from 'react-redux';
import MultiProfileSelector from './components/MultiProfileSelector';

// default export = container
export default connect(
  state => ({
    // add state here
  }),
)(MultiProfileSelector);

// export reducer, actions and action types
export reducer, { actions, actionTypes } from './reducer';
export middleware from './middleware';
