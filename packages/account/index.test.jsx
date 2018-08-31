import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import {
  reducer,
  actions,
  actionTypes,
  middleware,
} from './index';

describe('AccountContainer', () => {

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
