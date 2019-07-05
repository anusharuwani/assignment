import React from 'react';
import { shallow } from 'enzyme';
import CsSelect from './CsSelect';

describe('<CsSelect />', () => {
  test('renders', () => {
    const wrapper = shallow(<CsSelect />);
    expect(wrapper).toMatchSnapshot();
  });
});
