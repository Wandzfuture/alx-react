import React from 'react';
import PropTypes from 'prop-types';

class NotificationItem extends React.Component {
  render() {
    return (
      <li
        className={`NotificationItem ${this.props.type}`}
        dangerouslySetInnerHTML={{ __html: this.props.html }}
        onClick={() => this.props.markAsRead(this.props.id)}
      >
        {this.props.value}
      </li>
    );
  }
}

NotificationItem.propTypes = {
  html: PropTypes.shape({ __html: PropTypes.string.isRequired }),
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  markAsRead: PropTypes.func.isRequired,
};

NotificationItem.defaultProps = {
  type: 'default',
};

export default NotificationItem;
