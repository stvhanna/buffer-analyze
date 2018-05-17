import React from 'react';
import timezoneMock from 'timezone-mock';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureMockStore from 'redux-mock-store';

import ContextualCompare from '@bufferapp/contextual-compare';

import AnswersTab from './index';

timezoneMock.register('US/Eastern');

configure({ adapter: new Adapter() });
describe('web/AnswersTab', () => {
  it('should render the answers for facebook', () => {
    const mockStore = configureMockStore();
    const store = mockStore({});
    const match = {
      params: {
        service: 'facebook',
        id: 'afs42',
      },
    };
    const component = shallow(<AnswersTab
      match={match}
      store={store}
    />).dive();
    expect(component.find(ContextualCompare).length)
      .toBe(1);
  });
  it('should render the answers for twitter', () => {
    const mockStore = configureMockStore();
    const store = mockStore({});
    const match = {
      params: {
        service: 'twitter',
        id: 'afs42',
      },
    };
    const component = shallow(<AnswersTab
      match={match}
      store={store}
    />).dive();
    expect(component.find(ContextualCompare).length)
      .toBe(1);
  });
  it('should render the answers for instagram', () => {
    const mockStore = configureMockStore();
    const store = mockStore({});
    const match = {
      params: {
        service: 'instagram',
        id: 'afs42',
      },
    };
    const component = shallow(<AnswersTab
      match={match}
      store={store}
    />).dive();
    expect(component.find(ContextualCompare).length)
      .toBe(1);
  });
});
