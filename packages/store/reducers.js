import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as exampleReducer } from '@bufferapp/example';

export default combineReducers({
  router: routerReducer,
  example: exampleReducer,
});
