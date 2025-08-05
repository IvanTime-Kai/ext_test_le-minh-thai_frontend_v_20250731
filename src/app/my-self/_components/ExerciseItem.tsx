import React from 'react';

interface ExerciseItemProps {
  title: string;
  calories: number;
  duration: string;
}

const ExerciseItem: React.FC<ExerciseItemProps> = ({ title, calories, duration }) => {
  return (
    <div className="flex justify-between items-start py-2 border-b border-muted-foreground last:border-b-0">
      <div className="flex flex-col">
        <span className="text-[15px] leading-[22px] tracking-[0.08px] font-family-jp">
          • {title}
        </span>
        <span className="text-[15px] leading-[18px] tracking-[0.08px] text-accent ml-3">
          {calories}kcal
        </span>
      </div>
      <span className="text-lg leading-[22px] tracking-[0.09px] text-accent">{duration}</span>
    </div>
  );
};

export default ExerciseItem;
