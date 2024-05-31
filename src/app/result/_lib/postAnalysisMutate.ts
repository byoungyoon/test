import { MutationFunction } from '@tanstack/react-query';

import { AnalysisTypes } from '@/model/Analysis';
import { Post } from '@/utils/apiService';

export type AnalysisRequestTypes = {
  words_data: string[];
  keywords: Record<string, number>;
};

export const postAnalysisMutate: MutationFunction<
  AnalysisTypes,
  AnalysisRequestTypes
> = async (body) => {
  const data: AnalysisTypes = await Post({
    url: `/scrape/blog-manuscript-analysis-data`,
    body,
  });

  return data;
};
