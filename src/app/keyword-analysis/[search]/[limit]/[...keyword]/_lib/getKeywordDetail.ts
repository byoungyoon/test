import { QueryFunction } from '@tanstack/query-core';

import { KeywordDetailTypes } from '@/model/KeywordDetail';
import { Get } from '@/utils/apiService';
import { appendQueryParams } from '@/utils/urlUtils';

export const getKeywordDetail: QueryFunction<
  KeywordDetailTypes,
  [_1: string, _2: string, _3: string[], _4: number]
> = async ({ queryKey }) => {
  const [_1, keyword, detailKeyword, limit] = queryKey;

  const data: KeywordDetailTypes = await Get({
    url: appendQueryParams('/scrape/air-view-popular-keyword-detailed-data', {
      keyword: keyword,
      detailed_keywords: [keyword, detailKeyword.join(', ')],
      no_of_post: limit.toString(),
    }),
  });

  return data;
};
