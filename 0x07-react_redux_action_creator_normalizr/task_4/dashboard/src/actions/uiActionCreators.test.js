import { login, logout, displayNotificationDrawer, hideNotificationDrawer } from './uiActionCreators';

describe('uiActionCreators', () => {
  it('login action creator', () => {
    const email = 'test@example.com';
    const password = 'password';
    const expectedAction = {
      type: 'LOGIN',
      user: { email, password }
    };
    expect(login(email, password)).toEqual(expectedAction);
  });

  it('logout action creator', () => {
    const expectedAction = {
      type: 'LOGOUT'
    };
    expect(logout()).toEqual(expectedAction);
  });

  it('displayNotificationDrawer action creator', () => {
    const expectedAction = {
      type: 'DISPLAY_NOTIFICATION_DRAWER'
    };
    expect(displayNotificationDrawer()).toEqual(expectedAction);
  });

  it('hideNotificationDrawer action creator', () => {
    const expectedAction = {
      type: 'HIDE_NOTIFICATION_DRAWER'
    };
    expect(hideNotificationDrawer()).toEqual(expectedAction);
  });
});
