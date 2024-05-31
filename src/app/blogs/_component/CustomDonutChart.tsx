'use client';

import { useQuery } from '@tanstack/react-query';
import React from 'react';

import { FETCH_SCRAPED_DATA } from '@/hooks/general/query';

import DonutChart from '@/components/charts/Donut';

import { getBlogs } from '@/app/blogs/_lib/getBlogs';

type Props = {
  keyword: string;
};

export default function CustomDonutChart({ keyword }: Props) {
  const { data, isError, isPending } = useQuery({
    queryKey: [FETCH_SCRAPED_DATA.FETCH_ALL_SCRAPED_BLOGS, keyword],
    queryFn: getBlogs,
    enabled: !!keyword,
  });

  if (isError) return <div>서버 오류 입니다.</div>;
  if (isPending) return <div>Loading ...</div>;

  return <DonutChart jisooData={data.jisooData} />;
}
