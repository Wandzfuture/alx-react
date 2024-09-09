import React from 'react';
import NotificationItem from './NotificationItem';

const Notifications = () => {
  const notifications = [
    { type: 'default', value: 'Notification 1' },
    { type: 'success', value: 'Notification 2' },
    { type: 'error', value: 'Notification 3' },
  ];

  return (
    <ul>
      {notifications.map((notification, index) => (
        <NotificationItem key={index} type={notification.type} value={notification.value} />
      ))}
    </ul>
  );
};

export default Notifications;
