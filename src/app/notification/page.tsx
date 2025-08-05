import React from 'react';
import ListRecommended from './_components/ListRecommended';
import ListBlogCard from './_components/ListBlogCard';

const NotificationPage = () => {
  return (
    <div className="container max-w-screen-lg mx-auto flex flex-col gap-10 md:gap-20 my-10 md:my-20 px-4 md:px-0">
      <ListRecommended />
      <ListBlogCard />
    </div>
  );
};

export default NotificationPage;
