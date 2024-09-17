import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';
import { StyleSheet, css } from 'aphrodite';
import { getLatestNotification } from '../utils/utils';

const styles = StyleSheet.create({
  notifications: {
    position: 'absolute',
    top: '0',
    right: '0',
    border: '1px solid #3a3a3a',
    backgroundColor: '#fff',
    width: '100vw', // Take up the entire screen width
    height: '100vh', // Take up the entire screen height
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  closeIcon: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    cursor: 'pointer',
  },
  list: {
    padding: '0', // Removed padding from the ul element
    margin: '0',
    listStyle: 'none',
  },
});

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
        <div className={css(styles.notifications)}>
          <p style={{ fontSize: '20px' }}>No new notification for now</p>
        </div>
      );
    }
    return (
      <div className={css(styles.notifications)}>
        <button
          type="button"
          aria-label="Close"
          onClick={() => {
            console.log('Close button has been clicked');
          }}
        >
          <span className={css(styles.closeIcon)}>X</span>
        </button>
        <ul className={css(styles.list)}>
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
