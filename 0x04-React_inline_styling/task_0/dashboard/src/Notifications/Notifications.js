import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';
import './Notifications.css';
import { getLatestNotification } from '../utils/utils';

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.listNotifications.length > this.props.listNotifications.length;
  }

  render() {
    if (this.props.listNotifications.length === 0) {
      return (
        <div className="Notifications">
          <p>No new notification for now</p>
        </div>
      );
    }
    return (
      <div className="Notifications">
        <button
          type="button"
          aria-label="Close"
          onClick={() => {
            console.log('Close button has been clicked');
          }}
        >
          <span className="close-icon">X</span>
        </button>
        <ul>
          {this.props.listNotifications.map((notification) => (
            <NotificationItem
              key={notification.id}
              type={notification.type}
              html={notification.html}
              value={notification.value}
              markAsRead={this.markAsRead}
            />
          ))}
        </ul>
      </div>
    );
  }
}

Notifications.propTypes = {
  listNotifications: PropTypes.arrayOf(NotificationItemShape).isRequired,
};

Notifications.defaultProps = {
  listNotifications: [],
};

export default Notifications;
