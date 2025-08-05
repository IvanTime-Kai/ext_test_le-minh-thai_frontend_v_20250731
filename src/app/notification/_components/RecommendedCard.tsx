import React from 'react';

interface RecommendedCardProps {
  english: string;
  japanese: string;
}

const RecommendedCard: React.FC<RecommendedCardProps> = ({ english, japanese }) => {
  return (
    <div className="flex w-full col-span-4 md:col-span-1 py-10 flex-col items-center justify-center bg-black-500 text-center shadow-lg">
      <div className="text-[22px] leading-[27px] tracking-[0.11px] font-normal uppercase text-primary-300 whitespace-pre-line">
        {english}
      </div>
      <div className="my-2 w-12 border-b border-primary-foreground"></div>
      <div className="text-lg leading-[26px] text-primary-foreground font-family-jp">
        {japanese}
      </div>
    </div>
  );
};

export default RecommendedCard;
