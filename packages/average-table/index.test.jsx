import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureMockStore from 'redux-mock-store';
import AverageTableContainer, {
  reducer,
  actions,
  actionTypes,
  middleware,
} from './index';
import AverageTable from './components/AverageTable';
import mockProfiles from './mocks/profiles';

configure({ adapter: new Adapter() });
describe('AverageTable', () => {
  it('should render', () => {
    const mockStore = configureMockStore();
    const state = {
      average: {
        loading: true,
        metrics: { totals: [], daily: [] },
      },
      i18n: {
        translations: {},
      },
      profiles: {
        profiles: mockProfiles,
        selectedProfileId: mockProfiles[0].id,
      },
    };
    const store = mockStore(state);

    const component = shallow(<AverageTableContainer
      store={store}
    />);
    expect(component.find(AverageTable).length)
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
