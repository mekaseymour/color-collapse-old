import React from 'react';
import App from './App';
import { configure, shallow } from 'enzyme';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';

configure({ adapter: new ReactSixteenAdapter() });

it('renders without crashing', () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toMatchSnapshot();
});
