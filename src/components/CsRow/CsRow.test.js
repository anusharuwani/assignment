import React from 'react';
import { shallow } from 'enzyme';
import CsRow from './CsRow';

describe('<CsRow />', () => {
  test('renders', () => {
    const wrapper = shallow(<CsRow />);
    expect(wrapper).toMatchSnapshot();
  });
});
