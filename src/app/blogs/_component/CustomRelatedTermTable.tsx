'use client';

import { useQuery } from '@tanstack/react-query';
import React from 'react';

import { FETCH_SCRAPED_DATA } from '@/hooks/general/query';

import RelatedTermTable from '@/components/tables/RelatedTermTable';

import { getRelated } from '@/app/blogs/_lib/getRelated';

type Props = {
  keyword: string;
};

export default function CustomRelatedTermTable({ keyword }: Props) {
  const { data, isError, isPending } = useQuery({
    queryKey: [FETCH_SCRAPED_DATA.FETCH_ALL_SCRAPED_RELATED_TERMS, keyword],
    queryFn: getRelated,
    enabled: !!keyword,
    staleTime: 5 * 60 * 1000,
    gcTime: 5 * 60 * 1000 * 4,
  });

  if (isError) return <div>서버 오류 입니다.</div>;
  if (isPending) return <div>Loading ...</div>;

  return <RelatedTermTable scrapedRelatedTerms={data} />;
}
