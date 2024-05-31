import { QueryFunction } from '@tanstack/query-core';

import { Post } from '@/utils/apiService';

type IBlog = {
  pc_sections: {
    [key: string]: {
      isActive: number;
      activeUrl: string;
    };
  };
  mobile_sections: {
    [key: string]: {
      isActive: number;
      activeUrl: string;
    };
  };
};

export const postBlogSection: QueryFunction<
  IBlog,
  [_1: string, _2: string]
> = async ({ queryKey }) => {
  const [_1, keyword] = queryKey;

  const data: IBlog = await Post({
    url: '/scrape/blog-section-information',
    body: { keyword },
  });

  return data;
};
