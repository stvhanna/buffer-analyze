import React from 'react';
import timezoneMock from 'timezone-mock';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureMockStore from 'redux-mock-store';

import AudienceOverview from '@bufferapp/demographic-overview';

import AudienceTab from './index';

timezoneMock.register('US/Eastern');

configure({ adapter: new Adapter() });
describe('web/AudienceTab', () => {
  it('should render the audience for facebook', () => {
    const mockStore = configureMockStore();
    const store = mockStore({});
    const match = {
      params: {
        service: 'facebook',
        id: 'afs42',
      },
    };
    const component = shallow(<AudienceTab
      match={match}
      store={store}
    />).dive();
    expect(component.find(AudienceOverview).length)
      .toBe(1);
  });
  it('should render the audience for instagram', () => {
    const mockStore = configureMockStore();
    const store = mockStore({});
    const match = {
      params: {
        service: 'instagram',
        id: 'afs42',
      },
    };
    const component = shallow(<AudienceTab
      match={match}
      store={store}
    />).dive();
    expect(component.find(AudienceOverview).length)
      .toBe(1);
  });
  it('should render not the audience for twitter', () => {
    const mockStore = configureMockStore();
    const store = mockStore({});
    const match = {
      params: {
        service: 'twitter',
        id: 'afs42',
      },
    };
    const component = shallow(<AudienceTab
      match={match}
      store={store}
    />).dive();
    expect(component.find(AudienceOverview).length)
      .toBe(0);
  });
});
