'use client';

import { useQuery } from '@tanstack/react-query';

import * as styles from './customKeywordType.css';

import { KEYWORD_TYPE } from '@/hooks/general/interface';
import { FETCH_SCRAPED_DATA } from '@/hooks/general/query';

import { getKeyword } from '@/app/keyword-analysis/[search]/_lib/getKeyword';

type Props = {
  search: string;
};

export default function CustomKeywordType({ search }: Props) {
  const { data } = useQuery({
    queryKey: [
      FETCH_SCRAPED_DATA.FETCH_ALL_SCRAPED_POPULAR_TERM_IMAGES,
      search,
    ],
    queryFn: getKeyword,
    enabled: !!search,
    staleTime: 5 * 60 * 1000,
    gcTime: 5 * 60 * 1000 * 4,
  });

  if (!data) return <></>;

  return (
    <span className={styles.keywordType[data.keyword_type]}>
      {data.keyword_type === KEYWORD_TYPE.AIR ? '에어' : 'View'}
    </span>
  );
}
