import React from 'react';
import { shallow } from 'enzyme';
import CsPopOver from './CsPopOver';

describe('<CsPopOver />', () => {
  test('renders', () => {
    const wrapper = shallow(<CsPopOver />);
    expect(wrapper).toMatchSnapshot();
  });
});
