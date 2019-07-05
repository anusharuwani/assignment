import React from 'react';
import { shallow } from 'enzyme';
import CsCol from './CsCol';

describe('<CsCol />', () => {
  test('renders', () => {
    const wrapper = shallow(<CsCol />);
    expect(wrapper).toMatchSnapshot();
  });
});
