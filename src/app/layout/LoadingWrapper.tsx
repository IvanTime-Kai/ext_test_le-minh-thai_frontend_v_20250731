// components/LoadingWrapper.tsx

import React from 'react';
import { FOOD_ITEMS_PER_LOAD } from '../constants';
import { LOADING_MODE } from '../enums';

type LoadingWrapperProps = {
  isLoading: boolean;
  skeletonCount?: number;
  SkeletonComponent?: React.ElementType;
  mode?: LOADING_MODE;
  children: React.ReactNode;
};

const LoadingWrapper = ({
  isLoading,
  skeletonCount = FOOD_ITEMS_PER_LOAD,
  SkeletonComponent,
  mode = LOADING_MODE.Replace,
  children,
}: LoadingWrapperProps) => {
  const skeletons =
    SkeletonComponent && isLoading
      ? Array.from({ length: skeletonCount }).map((_, i) => (
          <SkeletonComponent key={`skeleton-${i}`} />
        ))
      : null;

  if (isLoading && mode === LOADING_MODE.Replace) {
    return <>{skeletons}</>;
  }

  return (
    <>
      {children}
      {mode === LOADING_MODE.Append && skeletons}
    </>
  );
};

export default LoadingWrapper;
