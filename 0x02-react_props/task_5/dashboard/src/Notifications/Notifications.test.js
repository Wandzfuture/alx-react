import React from 'react';
import { render, screen } from '@testing-library/react';
import Notifications from './Notifications';

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
});
