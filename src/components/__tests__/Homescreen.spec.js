import React from 'react';
import Homescreen from '../Homescreen';
import { configure, shallow } from 'enzyme';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';

configure({ adapter: new ReactSixteenAdapter() });

it('renders without crashing', () => {
  const wrapper = shallow(<Homescreen navigation={{}} onPress={() => {}} />);
  expect(wrapper).toMatchSnapshot();
});
