import React from 'react';
import HomeLayout from '../layout/HomeLayout';
import MySelfPage from './page';
import NotificationPage from './page';

const NotificationLayout = () => {
  return (
    <HomeLayout>
      <NotificationPage />
    </HomeLayout>
  );
};

export default NotificationLayout;
