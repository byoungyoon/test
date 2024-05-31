import { QueryFunction } from '@tanstack/query-core';

import { BlogTypes, JisooTypes } from '@/model/Blog';
import { Get } from '@/utils/apiService';

type BlogResponseTypes = {
  blogData: BlogTypes[];
  jisooData: JisooTypes[];
};

export const getBlogs: QueryFunction<
  BlogResponseTypes,
  [_1: string, _2: string]
> = async ({ queryKey }) => {
  const [_1, keyword] = queryKey;

  const data: BlogResponseTypes = await Get({
    url: `/scrape/blogs?keyword=${keyword}`,
  });

  return data;
};
