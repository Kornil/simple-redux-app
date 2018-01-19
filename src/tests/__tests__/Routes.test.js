import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import MockProvider from '../mockProvider';
import Routes from './../../Routes';
import { Home, About } from './../../containers';

describe('Routes', () => {
  it('default path should redirect to Home component', () => {
    const wrapper = mount(
      <MockProvider>
        <MemoryRouter initialEntries={['/']} initialIndex={0}>
          <Routes />
        </MemoryRouter>
      </MockProvider>,
    );
    expect(wrapper.find(Home)).toHaveLength(1);
  });

  it('/about path should redirect to About component', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/about']} initialIndex={0}>
        <Routes />
      </MemoryRouter>,
    );
    expect(wrapper.find(About)).toHaveLength(1);
  });
});
