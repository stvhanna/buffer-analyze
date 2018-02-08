import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureMockStore from 'redux-mock-store';
import ComparisonChartContainer from './index';
import ComparisonChart from './components/ComparisonChart';

import mockProfiles from './mocks/profiles';

configure({ adapter: new Adapter() });
describe('ComparisonChartContainer', () => {
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
    const component = shallow(<ComparisonChartContainer
      store={store}
      metricKey="audience"
    />);
    expect(component.find(ComparisonChart).length)
      .toBe(1);
  });
});
