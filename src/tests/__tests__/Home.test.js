import React from 'react';
import { shallow } from 'enzyme';
import { Home } from './../../containers';
import MockProvider from '../mockProvider';

it('renders without crashing', () => {
  const snap = shallow(<MockProvider><Home /></MockProvider>);
  expect(snap).toMatchSnapshot();
});
