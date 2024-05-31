import { QueryFunction } from '@tanstack/query-core';

import { RelatedTypes } from '@/model/Related';
import { Get } from '@/utils/apiService';

export const getRelated: QueryFunction<
  RelatedTypes[],
  [_1: string, _2: string]
> = async ({ queryKey }) => {
  const [_1, keyword] = queryKey;

  const data: RelatedTypes[] = await Get({
    url: `/scrape/related-terms?keyword=${keyword}`,
  });

  return data;
};
