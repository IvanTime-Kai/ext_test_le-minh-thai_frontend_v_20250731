import { circumference, radius, strokeDashoffset } from '../constants';
import ImageCustom from './ui/ImageCustom';

export default function MealProgressCard() {
  return (
    <div className="col-span-7 md:col-span-3 relative w-full h-full overflow-hidden bg-background">
      <div className="relative w-full aspect-[45/26]">
        <ImageCustom
          src="/revenue.jpg"
          alt="Japanese meal on a wooden tray"
          fill
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          placeholder="blur"
        />
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center">
        <div className="relative aspect-square w-[100%] flex items-center justify-center">
          <svg className="w-full h-full" viewBox="0 0 120 120">
            <circle
              className="text-transparent"
              strokeWidth="1.5"
              stroke="currentColor"
              fill="transparent"
              r={radius}
              cx="60"
              cy="60"
            />

            <circle
              className="text-white transition-all duration-500 ease-out drop-shadow-[0_0_2px_#FC7400]"
              strokeWidth="1.5"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              stroke="currentColor"
              fill="transparent"
              r={radius}
              cx="60"
              cy="60"
              transform="rotate(-90 60 60)"
            />
          </svg>

          <div className="absolute text-white text-lg leading-[22px] drop-shadow-[0_0_2px_#FC7400]">
            05/21 <span className="text-[25px] leading-[30px] font-normal">75%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
