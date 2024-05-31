import { QueryFunction } from '@tanstack/query-core';

import { KeywordTypes } from '@/model/Keyword';
import { Get } from '@/utils/apiService';

export const getKeyword: QueryFunction<
  KeywordTypes,
  [_1: string, _2: string]
> = async ({ queryKey }) => {
  const [_1, keyword] = queryKey;

  const data: KeywordTypes = await Get({
    url: `/scrape/air-view-popular-terms-images?keyword=${keyword}`,
  });

  return data;
};
