import React from 'react';
import { shallow } from 'enzyme';
import BodySection from './BodySection';

describe('BodySection component', () => {
  it('renders correctly with title and children', () => {
    const title = 'test title';
    const children = <p>test children node</p>;
    const wrapper = shallow(
      <BodySection title={title}>
        {children}
      </BodySection>
    );

    expect(wrapper.find('h2').text()).toBe(title);
    expect(wrapper.find('p').text()).toBe('test children node');
  });
});
