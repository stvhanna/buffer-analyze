import React from 'react';
import { Provider } from 'react-redux';

const storeFake = state => ({
  default: () => {},
  subscribe: () => {},
  dispatch: () => {},
  getState: () => ({ ...state }),
});
const store = storeFake({
  i18n: {
    translations: {},
  },
  reportList: {},
});

export default storyFn => (
  <Provider store={store}>
    {storyFn()}
  </Provider>
);
