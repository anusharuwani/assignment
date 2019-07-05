import React from 'react';
import { shallow } from 'enzyme';
import CsButton from './CsButton';

describe('<CsButton />', () => {
  test('renders', () => {
    const wrapper = shallow(<CsButton />);
    expect(wrapper).toMatchSnapshot();
  });
});
