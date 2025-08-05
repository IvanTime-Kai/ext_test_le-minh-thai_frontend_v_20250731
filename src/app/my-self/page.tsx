import React from 'react';
import ListBodyRecord from './_components/ListBodyRecord';
import BodyRecordChart from './_components/BodyRecordChart';
import MyExercise from './_components/MyExercise';
import MyDiary from './_components/MyDiary';

const MySelfPage = () => {
  return (
    <div className="container max-w-screen-lg mx-auto flex flex-col gap-10 md:gap-20 my-10 md:my-20 px-4 md:px-0">
      <ListBodyRecord />
      <BodyRecordChart />
      <MyExercise />
      <MyDiary />
    </div>
  );
};

export default MySelfPage;
