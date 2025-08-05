'use client';

import Button from '@/app/_components/ui/Button';
import CardSkeleton from '@/app/_components/CardSkeleton';
import Spinner from '@/app/_components/ui/Spinner';
import { LOADING_MODE } from '@/app/enums';
import usePaginatedItems from '@/app/hooks/usePaginatedItems';
import LoadingWrapper from '@/app/layout/LoadingWrapper';
import { IDiary } from '@/app/types';
import DiaryCard from './DiaryCard';

const MyDiary = () => {
  const { items, isPending, hasMore, handleLoadMore } = usePaginatedItems<IDiary>({
    url: '/api/diarys',
  });

  return (
    <div className="container mx-auto">
      <h2 className="text-[22px] leading-[27px] tracking-[0.15px] mb-2 font-normal text-accent-foreground ">
        MY DIARY
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <LoadingWrapper
          isLoading={isPending}
          SkeletonComponent={CardSkeleton}
          mode={LOADING_MODE.Append}
        >
          {items.map(item => (
            <DiaryCard
              key={item.id}
              date={item.date}
              time={item.time}
              title={item.title}
              content={item.content}
            />
          ))}
        </LoadingWrapper>
      </div>

      {hasMore && (
        <div className="flex justify-center mt-8">
          <Button
            onClick={handleLoadMore}
            disabled={isPending}
            className="w-[288px] font-family-jp h-[56px] text-lg cursor-pointer leading-[26px] font-light rounded-lg bg-gradient-primary text-primary-foreground hover:bg-gradient-primary-dark transition-all duration-200"
          >
            {isPending ? <Spinner /> : '記録をもっと見る'}
          </Button>
        </div>
      )}
    </div>
  );
};

export default MyDiary;
