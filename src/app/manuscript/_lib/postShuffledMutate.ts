// eslint-disable-next-line simple-import-sort/imports
import { MutationFunction } from '@tanstack/react-query';

import { Post } from '@/utils/apiService';
import { ShuffleTypes } from '@/model/Shuffle';

export type BlogShuffledRequestTypes = {
  /**
   * 합친 데이터를 무작위로 셔플한 데이터
   */
  words_data: string[];
  /**
   * 부족한 글자수를 채울 데이터
   */
  purified_data: string;
  /**
   * 셔플 시 필수로 들어가야하는 데이터
   */
  keywords: Record<string, number>;
  /**
   * 글자수 제한
   */
  char_limit: number;
};

export const postShuffledMutate: MutationFunction<
  ShuffleTypes,
  BlogShuffledRequestTypes
> = async (body) => {
  const data: ShuffleTypes = await Post({
    url: `/scrape/blog-keyword-analysis-shuffle`,
    body,
  });

  return data;
};
