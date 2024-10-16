import { createSelector } from 'reselect';

const getFilter = (state) => state.filter;
const getNotifications = (state) => state.notifications;

export const getUnreadNotificationsByType = createSelector(
    [getFilter, getNotifications],
    (filter, notifications) => {
        if (filter === 'urgent') {
            return notifications.filter(notification => !notification.read && notification.type === 'urgent');
        }
        return notifications.filter(notification => !notification.read);
    }
);
