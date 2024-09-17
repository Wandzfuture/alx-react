iimport React from 'react';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';
import BodySection from '../BodySection';

StyleSheetTestUtils.suppressStyleInjection();

describe('BodySectionWithMarginBottom component', () => {
  it('renders correctly with title and children', () => {
    const title = 'test title';
    const children = <p>test children node</p>;
    const wrapper = shallow(
      <BodySectionWithMarginBottom title={title}>
        {children}
      </BodySectionWithMarginBottom>
    );

    expect(wrapper.find(BodySection).prop('title')).toBe(title);
    expect(wrapper.find(BodySection).prop('children')).toBe(children);
  });
});
