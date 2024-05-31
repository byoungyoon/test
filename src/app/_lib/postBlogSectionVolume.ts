import { QueryFunction } from '@tanstack/query-core';

import { Post } from '@/utils/apiService';

type IVolume = {
  Mobile_search_volume: number;
  PC_search_volume: number;
  search_volume_days: number;
  search_volume_month: number;
};

export const postBlogSectionVolume: QueryFunction<
  IVolume,
  [_1: string, _2: string]
> = async ({ queryKey }) => {
  const [_1, keyword] = queryKey;

  const data: IVolume = await Post({
    url: '/scrape/blogs-search-volume',
    body: { keyword },
  });

  return data;
};
