// task_5/dashboard/src/App/App.js
import React from 'react';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';
import Header from '../Header/Header';
import Login from '../Login/Login';
import './App.css';
import { getLatestNotification } from '../utils/utils';

const listCourses = [
  { id: 1, name: 'ES6', credit: 60 },
  { id: 2, name: 'Webpack', credit: 20 },
  { id: 3, name: 'React', credit: 40 },
];

const listNotifications = [
  { id: 1, html: { __html: 'New course available' }, type: 'default' },
  {
    id: 2,
    html: { __html: 'New resume available' },
    type: 'urgent',
    value: 'urgent',
  },
  { id: 3, html: { __html: 'Urgent requirement - complete by EOD' }, type: 'urgent' },
];

function App() {
  return (
    <>
      <Notifications listNotifications={listNotifications} />
      <div className="App">
        <Header />
        <div className="App-body">
          {getLatestNotification() && (
            <div className="App-Notifications">
              <p>{getLatestNotification()}</p>
            </div>
          )}
          <Login />
          <CourseList listCourses={listCourses} />
        </div>
      </div>
    </>
  );
}

export default App;
