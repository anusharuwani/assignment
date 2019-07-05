import React from 'react';
import { shallow } from 'enzyme';
import CsHeader from './CsHeader';

describe('<CsHeader />', () => {
  test('renders', () => {
    const wrapper = shallow(<CsHeader />);
    expect(wrapper).toMatchSnapshot();
  });
});
