import React from 'react';
import { render, screen } from '@testing-library/react';
import Notifications from './Notifications';
import { getLatestNotification } from '../utils/utils';
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

jest.spyOn(console, 'log');

describe('Notifications', () => {
  it('renders the menu item when displayDrawer is false', () => {
    render(<Notifications displayDrawer={false} />);
    expect(screen.getByText('Your notifications')).toBeInTheDocument();
  });

  it('does not render div.Notifications when displayDrawer is false', () => {
    render(<Notifications displayDrawer={false} />);
    expect(screen.queryByText('New course available')).not.toBeInTheDocument();
  });

  it('renders the menu item when displayDrawer is true', () => {
    render(<Notifications displayDrawer={true} />);
    expect(screen.getByText('Your notifications')).toBeInTheDocument();
  });

  it('renders div.Notifications when displayDrawer is true', () => {
    render(<Notifications displayDrawer={true} />);
    expect(screen.getByText('New course available')).toBeInTheDocument();
  });

  it('calls markAsRead function when NotificationItem is clicked', () => {
    const listNotifications = [
      {
        id: 1,
        html: { __html: 'New course available' },
        type: 'default',
        value: 'New course available',
      },
    ];
    render(<Notifications listNotifications={listNotifications} />);
    const notificationItem = screen.getByText('New course available');
    notificationItem.click();
    expect(console.log).toHaveBeenCalledTimes(1);
    expect(console.log).toHaveBeenCalledWith('Notification 1 has been marked as read');
  });

  it('does not rerender when updating the props with the same list', () => {
    const listNotifications = [
      {
        id: 1,
        html: { __html: 'New course available' },
        type: 'default',
        value: 'New course available',
      },
    ];
    const { rerender } = render(<Notifications listNotifications={listNotifications} />);
    const originalRenderCount = React.createElement.calls.count();
    rerender(<Notifications listNotifications={listNotifications} />);
    expect(React.createElement.calls.count()).toBe(originalRenderCount);
  });

  it('rerenders when updating the props with a longer list', () => {
    const listNotifications = [
      {
        id: 1,
        html: { __html: 'New course available' },
        type: 'default',
        value: 'New course available',
      },
    ];
    const longerListNotifications = [
      {
        id: 1,
        html: { __html: 'New course available' },
        type: 'default',
        value: 'New course available',
      },
      {
        id: 2,
        html: { __html: 'New course available 2' },
        type: 'default',
        value: 'New course available 2',
      },
    ];
    const { rerender } = render(<Notifications listNotifications={listNotifications} />);
    const originalRenderCount = React.createElement.calls.count();
    rerender(<Notifications listNotifications={longerListNotifications} />);
    expect(React.createElement.calls.count()).toBeGreaterThan(originalRenderCount);
  });

  afterEach(() => {
    console.log.mockRestore();
  });
});
