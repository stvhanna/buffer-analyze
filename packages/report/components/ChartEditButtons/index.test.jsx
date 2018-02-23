import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ChartEditButtons from './index';

configure({ adapter: new Adapter() });
describe('ChartEditButtons', () => {
  const moveUp = jest.fn();
  const moveDown = jest.fn();
  const deleteChart = jest.fn();

  it('should move the chart up', () => {
    const component = shallow(<ChartEditButtons
      id="foo"
      moveUp={moveUp}
      moveDown={moveDown}
      deleteChart={deleteChart}
    />);
    const button = component.childAt(0);
    button.simulate('click');
    expect(moveUp).toHaveBeenCalledWith('foo');
  });

  it('should move the chart down', () => {
    const component = shallow(<ChartEditButtons
      id="foo"
      moveUp={moveUp}
      moveDown={moveDown}
      deleteChart={deleteChart}
    />);
    const button = component.childAt(1);
    button.simulate('click');
    expect(moveDown).toHaveBeenCalledWith('foo');
  });

  it('should delete the chart', () => {
    const component = shallow(<ChartEditButtons
      id="foo"
      moveUp={moveUp}
      moveDown={moveDown}
      deleteChart={deleteChart}
    />);
    const button = component.childAt(2);
    button.simulate('click');
    expect(deleteChart).toHaveBeenCalledWith('foo');
  });
});
