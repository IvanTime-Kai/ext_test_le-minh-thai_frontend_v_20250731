'use client';

import ExerciseItem from './ExerciseItem';
import { exerciseData } from '@/app/constants';

export default function MyExercise() {
  return (
    <div className="bg-accent-foreground text-primary-foreground p-6 flex flex-col gap-4">
      <div className="flex items-center gap-8">
        <div>
          <h2 className="text-[15px] leading-[18px] font-normal text-primary-foreground">
            MY <br /> EXERCISE
          </h2>
        </div>
        <div className="text-[22px] leading-[27px] font-normal">2021.05.21</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 overflow-y-auto max-h-[300px] pr-6 md:pr-12 custom-scrollbar">
        <style jsx>{`
          .custom-scrollbar::-webkit-scrollbar {
            width: 8px;
          }
          .custom-scrollbar::-webkit-scrollbar-track {
            background: #777777;
            border-radius: 4px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background: #ffcc21; /* Gold-like color for thumb */
            border-radius: 4px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: #ffcc21; /* Darker gold on hover */
          }
        `}</style>

        {exerciseData.map((item, index) => (
          <ExerciseItem
            key={index}
            calories={item.calories}
            duration={item.duration}
            title={item.title}
          />
        ))}
      </div>
    </div>
  );
}
