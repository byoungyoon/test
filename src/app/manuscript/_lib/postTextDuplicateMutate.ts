import { MutationFunction } from '@tanstack/react-query';

import { TextDuplicateTypes } from '@/model/TextDuplicate';
import { Post } from '@/utils/apiService';

export type TextDuplicateRequestTypes = {
  data: Record<string, string>;
};

export const postTextDuplicateMutate: MutationFunction<
  TextDuplicateTypes,
  TextDuplicateRequestTypes
> = async (body) => {
  const data: TextDuplicateTypes = await Post({
    url: `/scrape/blog-text-duplicated-words`,
    body,
  });

  return data;
};
