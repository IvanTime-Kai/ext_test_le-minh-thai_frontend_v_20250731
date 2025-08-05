import React from 'react';

interface IDiaryCardProps {
  date: string;
  time: string;
  title: string;
  content: string;
}

const DiaryCard = ({ date, time, title, content }: IDiaryCardProps) => {
  return (
    <div className="border-2 border-[#707070] px-4 pt-4 pb-10">
      <p className="text-lg leading-[22px] font-normal tracking-[0.09px] mb-4">
        {date} <br />
        {time}
      </p>
      <p className="text-xs leading-[17px] tracking-[0.06px] font-light font-family-jp">{title}</p>
      <p className="line-clamp-5 text-xs leading-[17px] tracking-[0.06px] font-light font-family-jp">{content}</p>
    </div>
  );
};

export default DiaryCard;
