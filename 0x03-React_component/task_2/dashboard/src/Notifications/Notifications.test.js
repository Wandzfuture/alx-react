import React from 'react';
import { render, screen } from '@testing-library/react';
import Notifications from './Notifications';
import { getLatestNotification } from '../utils/utils';

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

  afterEach(() => {
    console.log.mockRestore();
  });
});
