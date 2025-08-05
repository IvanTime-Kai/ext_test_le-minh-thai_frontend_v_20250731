import { IFoodItem } from '../types';
import ImageCustom from './ui/ImageCustom';

interface FoodCardProps {
  item: IFoodItem;
}

export default function FoodCard({ item }: FoodCardProps) {
  return (
    <div className="relative w-full aspect-square overflow-hidden group shadow-none hover:shadow-lg transition-shadow duration-300 cursor-pointer">
      <div className="relative aspect-square w-full">
        <ImageCustom
          src={item.imageSrc || ''}
          alt={`${item.date} ${item.mealType}`}
          fill
          className="object-cover transform transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          placeholder="blur"
        />
      </div>

      <div className="absolute bottom-0 left-0 bg-primary-300 text-primary-foreground px-4 py-2 text-[15px] leading-[18px] tracking-[0.15px] font-normal">
        {item.date}.<span className="capitalize">{item.mealType}</span>
      </div>
    </div>
  );
}
