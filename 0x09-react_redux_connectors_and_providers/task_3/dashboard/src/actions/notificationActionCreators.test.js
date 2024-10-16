import {
  markAsRead,
  setNotificationFilter,
  NotificationTypeFilters
} from './notificationActionCreators';

describe('notificationActionCreators', () => {
  it('markAsRead action creator', () => {
    const index = 1;
    const expectedAction = {
      type: 'MARK_AS_READ',
      index
    };
    expect(markAsRead(index)).toEqual(expectedAction);
  });

  it('setNotificationFilter action creator', () => {
    const filter = NotificationTypeFilters.DEFAULT;
    const expectedAction = {
      type: 'SET_TYPE_FILTER',
      filter
    };
    expect(setNotificationFilter(filter)).toEqual(expectedAction);
  });
});
