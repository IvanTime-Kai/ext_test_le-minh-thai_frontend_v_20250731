'use client';

import { LOADING_MODE } from '../enums';
import usePaginatedItems from '../hooks/usePaginatedItems';

import LoadingWrapper from '../layout/LoadingWrapper';
import { IFoodItem } from '../types';
import Button from './ui/Button';
import FoodCard from './FoodCard';
import CardSkeleton from './CardSkeleton';
import Spinner from './ui/Spinner';
import { useSearchParams } from 'next/navigation';

const ListFoodItem = () => {
  const searchParams = useSearchParams();

  const mealType = searchParams.get('serviceType');

  const { items, isPending, hasMore, handleLoadMore } = usePaginatedItems<IFoodItem>({
    filters: {
      mealType,
    },
  });

  return (
    <div className="container max-w-screen-lg mx-auto mb-20 px-4 md:px-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <LoadingWrapper
          isLoading={isPending}
          SkeletonComponent={CardSkeleton}
          mode={LOADING_MODE.Append}
        >
          {items.map(item => (
            <FoodCard key={item.id} item={item} />
          ))}
        </LoadingWrapper>
      </div>

      {hasMore && (
        <div className="flex justify-center mt-8">
          <Button
            onClick={handleLoadMore}
            disabled={isPending}
            className="w-[288px] h-[56px] font-family-jp text-lg cursor-pointer leading-[26px] font-light rounded-lg bg-gradient-primary text-primary-foreground hover:bg-gradient-primary-dark transition-all duration-200"
          >
            {isPending ? <Spinner /> : '記録をもっと見る'}
          </Button>
        </div>
      )}
    </div>
  );
};

export default ListFoodItem;
