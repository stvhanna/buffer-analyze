import React from 'react';
import { mount, shallow } from 'enzyme';
import { Provider } from 'react-redux';
import CsvExport, {
  reducer,
  actions,
  actionTypes,
  middleware,
} from './index';
import ExportButton from './components/ExportButton';

const storeFake = state => ({
  default: () => {},
  subscribe: () => {},
  dispatch: () => {},
  getState: () => ({ ...state }),
});

describe('CsvExport', () => {
  it('should render', () => {
    const store = storeFake({
      exportToCSV: {
        exporting: false,
      },
    });
    const wrapper = mount(
      <Provider store={store}>
        <CsvExport />
      </Provider>,
    );
    expect(wrapper.find(ExportButton).length)
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

  it('exportToCSV should call the exportToCSV action with the filename prop', () => {
    const store = {
      dispatch: jest.fn(),
      getState: jest.fn(() => ({
        exportToCSV: {},
      })),
    };
    const component = shallow(<CsvExport filename="overview" store={store} />);

    component.props().exportToCSV();
    expect(store.dispatch).toHaveBeenCalledWith(actions.exportToCSV('overview'));
  });
});
