import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const NotificationItem = memo((props) => {
  const styles = StyleSheet.create({
    NotificationItem: {
      listStyle: 'none',
      padding: '10px 8px',
      borderBottom: '1px solid #000',
      fontSize: '20px',
      width: '100%',
    },
    urgent: {
      backgroundColor: '#ff9900',
      color: '#fff',
    },
    default: {
      backgroundColor: '#fff',
      color: '#333',
    },
  });

  const className = css(
    styles.NotificationItem,
    props.type === 'urgent' ? styles.urgent : styles.default
  );

  return (
    <li
      className={className}
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
