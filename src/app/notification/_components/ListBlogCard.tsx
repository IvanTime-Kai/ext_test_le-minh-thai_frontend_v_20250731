'use client';

import Button from '@/app/_components/ui/Button';
import CardSkeleton from '@/app/_components/CardSkeleton';
import Spinner from '@/app/_components/ui/Spinner';
import { LOADING_MODE } from '@/app/enums';
import usePaginatedItems from '@/app/hooks/usePaginatedItems';
import LoadingWrapper from '@/app/layout/LoadingWrapper';
import { IBlog } from '@/app/types';
import { BlogCard } from './BlogCard';

const ListBlogCard = () => {
  const { items, isPending, hasMore, handleLoadMore } = usePaginatedItems<IBlog>({
    url: '/api/blogs',
  });

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <LoadingWrapper
          isLoading={isPending}
          SkeletonComponent={CardSkeleton}
          mode={LOADING_MODE.Append}
        >
          {items.map(item => (
            <BlogCard
              key={item.id}
              date={item.date}
              imageSrc={item.imageSrc}
              tags={item.tags}
              time={item.time}
              title={item.title}
            />
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

export default ListBlogCard;
