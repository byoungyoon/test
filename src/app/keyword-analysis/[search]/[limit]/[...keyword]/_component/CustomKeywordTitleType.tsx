'use client';

import { useQuery } from '@tanstack/react-query';

import * as styles from './customKeywordTitleType.css';

import { KEYWORD_TYPE } from '@/hooks/general/interface';
import { FETCH_SCRAPED_DATA } from '@/hooks/general/query';

import { getKeywordDetail } from '@/app/keyword-analysis/[search]/[limit]/[...keyword]/_lib/getKeywordDetail';

type Props = {
  search: string;
  keyword: string[];
  limit: number;
};

export default function CustomKeywordTitleType({
  search,
  keyword,
  limit,
}: Props) {
  const { data } = useQuery({
    queryKey: [
      FETCH_SCRAPED_DATA.FETCH_ALL_SCRAPED_POPULAR_KEYWORDS_DETAILED_DATA,
      search,
      keyword,
      limit,
    ],
    queryFn: getKeywordDetail,
    enabled: !!search || !!keyword || !!limit,
  });

  if (!data) return <></>;
  return (
    <span className={styles.keywordType[data.keyword_type]}>
      {data.keyword_type === KEYWORD_TYPE.AIR ? '에어' : 'View'}
    </span>
  );
}
