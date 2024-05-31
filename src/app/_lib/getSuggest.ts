import { QueryFunction } from '@tanstack/query-core';

import { Get } from '@/utils/apiService';

export const getSuggest: QueryFunction<
  string[],
  [_1: string, _2: string]
> = async ({ queryKey }) => {
  const [_1, keyword] = queryKey;

  const data: string[] = await Get({
    url: `/scrape/suggestions?keyword=${keyword}`,
  });

  return data;
};
