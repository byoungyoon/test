import { MutationFunction } from '@tanstack/react-query';

import { KeywordDetailAddUrlTypes } from '@/model/KeywordDetail';
import { Get } from '@/utils/apiService';
import { appendQueryParams } from '@/utils/urlUtils';

export type BlogUrlRequestTypes = {
  blogUrl: string;
  /**
   * index 0 : keyword
   * index 1 : keyword detail
   */
  detailed_keywords: string[];
};

export const getBlogUrlMutate: MutationFunction<
  KeywordDetailAddUrlTypes,
  BlogUrlRequestTypes
> = async (body) => {
  const data: KeywordDetailAddUrlTypes = await Get({
    url: appendQueryParams('/scrape/custom-popular-keyword-detailed-data', {
      blogUrl: body.blogUrl,
      detailed_keywords: body.detailed_keywords,
    }),
  });

  return data;
};
