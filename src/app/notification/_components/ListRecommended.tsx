import React from 'react';
import RecommendedCard from './RecommendedCard';
import { recommendedData } from '@/app/constants';

const ListRecommended = () => {
  return (
    <div className="grid grid-cols-4 gap-4 md:gap-10 w-full">
      {recommendedData.map((recommended, index) => (
        <RecommendedCard
          key={index}
          english={recommended.english}
          japanese={recommended.japanese}
        />
      ))}
    </div>
  );
};

export default ListRecommended;
