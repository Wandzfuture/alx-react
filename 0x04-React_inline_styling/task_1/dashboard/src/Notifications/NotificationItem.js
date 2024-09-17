import React, { memo } from 'react';
import PropTypes from 'prop-types';

const NotificationItem = memo((props) => {
  return (
    <li
      className={`NotificationItem ${props.type}`}
      dangerouslySetInnerHTML={{ __html: props.html }}
      onClick={() => props.markAsRead(props.id)}
    >
      {props.value}
    </li>
  );
});

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
