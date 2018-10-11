import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import AudienceGenderAge, {
  reducer,
  actions,
  actionTypes,
} from './index';
import AudienceGenderAgeChart from './components/AudienceGenderAgeChart';

jest.mock('@bufferapp/add-report');

configure({ adapter: new Adapter() });
const storeFake = state => ({
  default: () => {},
  subscribe: () => {},
  dispatch: () => {},
  getState: () => ({ ...state }),
});

describe('AudienceGenderAgeChart', () => {
  it('should render', () => {
    const store = storeFake({
      demographic: {
        loading: false,
        metrics: [],
      },
      demographicGenderAge: {
        selectedGroup: 'foo',
      },
      i18n: {
        translations: {},
      },
      date: {},
    });
    const wrapper = mount(
      <Provider store={store}>
        <AudienceGenderAge profileService="twitter" />
      </Provider>,
    );
    expect(wrapper.find(AudienceGenderAgeChart).length)
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
});
