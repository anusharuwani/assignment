import React from 'react';
import { shallow } from 'enzyme';
import CsIcon from './CsIcon';

describe('<CsIcon />', () => {
  test('renders', () => {
    const wrapper = shallow(<CsIcon />);
    expect(wrapper).toMatchSnapshot();
  });
});
