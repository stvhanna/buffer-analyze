import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import MultiProfileSelector, {
  reducer,
  actions,
  actionTypes,
  middleware,
} from './index';
import MultiProfileSelector from './components/MultiProfileSelector';

const storeFake = state => ({
  default: () => {},
  subscribe: () => {},
  dispatch: () => {},
  getState: () => ({ ...state }),
});

describe('MultiProfileSelector', () => {
  it('should render', () => {
    const store = storeFake({
    });
    const wrapper = mount(
      <Provider store={store}>
        <MultiProfileSelector />
      </Provider>,
    );
    expect(wrapper.find(MultiProfileSelector).length)
      .toBe(1);
  });

  it('should export reducer', () => {
    expect(reducer)
      .toBeDefined();
  });

  it('should export actions', () => {
    expect(actions)
      .toBeDefined();
  });

  it('should export actionTypes', () => {
    expect(actionTypes)
      .toBeDefined();
  });

  it('should export middleware', () => {
    expect(middleware)
      .toBeDefined();
  });
});
