import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureMockStore from 'redux-mock-store';
import AudienceComparisonChartContainer, {
  reducer,
  actionTypes,
  middleware,
} from './index';
import AudienceComparisonChart from './components/AudienceComparisonChart';

import mockProfiles from './mocks/profiles';

configure({ adapter: new Adapter() });
describe('AudienceComparisonChartContainer', () => {
  let state = {};
  beforeEach(() => {
    state = {
      audienceComparison: {
        profilesMetricData: [],
        profileTotals: [],
      },
      profiles: {
        profiles: mockProfiles,
      },
      multiProfileSelector: {
        selectedProfiles: mockProfiles,
      },
    };
  });
  it('should render', () => {
    const mockStore = configureMockStore();
    const store = mockStore(state);
    const component = shallow(<AudienceComparisonChartContainer
      store={store}
    />);
    expect(component.find(AudienceComparisonChart).length)
      .toBe(1);
  });

  it('should export reducer', () => {
    expect(reducer)
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
