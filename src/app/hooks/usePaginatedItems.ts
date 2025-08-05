'use client';

import { useState, useTransition, useEffect } from 'react';
import { IApiResponse } from '../types';
import { ITEMS_PER_LOAD } from '../constants';

interface UsePaginatedItemsProps<T> {
  url?: string;
  filters?: Record<string, string | number | null | undefined>;
}

const usePaginatedItems = <T>({
  url = '/api/food-items',
  filters = {},
}: UsePaginatedItemsProps<T>) => {
  const [items, setItems] = useState<T[]>([]);
  const [offset, setOffset] = useState(0);
  const [total, setTotal] = useState<number | null>(null);
  const [hasMore, setHasMore] = useState(true);
  const [isPending, startTransition] = useTransition();

  // 🔧 Convert filters to query string
  const buildQueryParams = (offset: number, limit: number): string => {
    const params = new URLSearchParams();

    params.set('offset', offset.toString());
    params.set('limit', limit.toString());

    Object.entries(filters).forEach(([key, value]) => {
      if (value !== null && value !== undefined && value !== '') {
        params.set(key, value.toString());
      }
    });

    return params.toString();
  };

  const fetchItems = async (offset: number, limit: number): Promise<IApiResponse<T> | null> => {
    try {
      const query = buildQueryParams(offset, limit);
      const res = await fetch(`${url}?${query}`);
      if (!res.ok) {
        console.error('API error:', res.status);
        return null;
      }
      const data = await res.json();
      return data;
    } catch (error) {
      console.error('Fetch failed:', error);
      return null;
    }
  };

  // ✅ Refetch when filters change
  useEffect(() => {
    startTransition(async () => {
      const data = await fetchItems(0, ITEMS_PER_LOAD);
      if (!data) return;

      setItems(data.items);
      setOffset(data.items.length);
      setTotal(data.total);
      setHasMore(data.items.length < data.total);
    });
  }, [JSON.stringify(filters)]);

  const loadMore = () => {
    startTransition(async () => {
      const data = await fetchItems(offset, ITEMS_PER_LOAD);
      if (!data) return;

      setItems(prev => [...prev, ...data.items]);
      setOffset(prev => prev + data.items.length);
      setTotal(data.total);
      setHasMore(offset + data.items.length < data.total);
    });
  };

  const handleLoadMore = () => {
    if (isPending || !hasMore) return;
    loadMore();
  };

  return {
    items,
    isPending,
    hasMore,
    handleLoadMore,
    total,
  };
};

export default usePaginatedItems;
