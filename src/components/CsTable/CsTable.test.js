import React from 'react';
import { shallow } from 'enzyme';
import CsTable from './CsTable';

describe('<CsTable />', () => {
  test('renders', () => {
    const wrapper = shallow(<CsTable />);
    expect(wrapper).toMatchSnapshot();
  });
});
