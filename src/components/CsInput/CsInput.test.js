import React from 'react';
import { shallow } from 'enzyme';
import CsInput from './CsInput';

describe('<CsInput />', () => {
  test('renders', () => {
    const wrapper = shallow(<CsInput />);
    expect(wrapper).toMatchSnapshot();
  });
});
