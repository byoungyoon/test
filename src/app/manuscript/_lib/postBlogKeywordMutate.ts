import { MutationFunction } from '@tanstack/react-query';

import { KeywordDetailAnalysisTypes } from '@/model/KeywordDetail';
import { Post } from '@/utils/apiService';

export type BlogKeywordRequestTypes = {
  blog_data: Record<string, string>;
  keywords: string;
};

export const postBlogKeywordMutate: MutationFunction<
  KeywordDetailAnalysisTypes,
  BlogKeywordRequestTypes
> = async (body) => {
  const data: KeywordDetailAnalysisTypes = await Post({
    url: `/scrape/blog-keyword-analysis-data`,
    body,
  });

  return data;
};
