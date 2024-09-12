import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';
import { getLatestNotification } from '../utils/utils';

const props = {
  id: 1,
  html: { __html: 'New course available' },
  type: 'default',
  value: 'New course available',
  markAsRead: jest.fn(),
};

describe('<NotificationItem />', () => {
  it('renders correctly with default props', () => {
    const wrapper = shallow(<NotificationItem />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders correctly with specific props', () => {
    const wrapper = shallow(<NotificationItem {...props} />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders correctly when type is urgent', () => {
    const wrapper = shallow(<NotificationItem {...props} type="urgent" />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders correctly when type is default', () => {
    const wrapper = shallow(<NotificationItem {...props} type="default" />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders the html prop as an html string', () => {
    const wrapper = shallow(<NotificationItem {...props} />);
    expect(wrapper.find('div').html()).toBe(props.html.__html);
  });

  it('renders a li element with the right class', () => {
    const wrapper = shallow(<NotificationItem {...props} />);
    expect(wrapper.find('li').hasClass('NotificationItem')).toBe(true);
  });

  it('renders a li element with the right type class', () => {
    const wrapper = shallow(<NotificationItem {...props} />);
    expect(wrapper.find('li').hasClass(props.type)).toBe(true);
  });

  it('renders a span element with the right value', () => {
    const wrapper = shallow(<NotificationItem {...props} />);
    expect(wrapper.find('span').text()).toBe(getLatestNotification());
  });

  it('calls markAsRead function when li element is clicked', () => {
    const wrapper = shallow(<NotificationItem {...props} />);
    const liElement = wrapper.find('li');
    liElement.simulate('click');
    expect(props.markAsRead).toHaveBeenCalledTimes(1);
    expect(props.markAsRead).toHaveBeenCalledWith(props.id);
  });
});
