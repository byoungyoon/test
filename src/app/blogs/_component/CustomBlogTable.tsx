'use client';

import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

import { FETCH_SCRAPED_DATA } from '@/hooks/general/query';

import BlogTable from '@/components/tables/BlogTable';

import { usePanel } from '@/store/usePanel';

import { getBlogs } from '@/app/blogs/_lib/getBlogs';

type Props = {
  keyword: string;
};

export default function CustomBlogTable({ keyword }: Props) {
  const { data, isError, isPending } = useQuery({
    queryKey: [FETCH_SCRAPED_DATA.FETCH_ALL_SCRAPED_BLOGS, keyword],
    queryFn: getBlogs,
    enabled: !!keyword,
    staleTime: 5 * 60 * 1000,
    gcTime: 5 * 60 * 1000 * 4,
  });

  const router = useRouter();
  const { setBlog } = usePanel();

  const onClickTable = (currentIndex: number) => {
    router.push(`/blogs/panel/${currentIndex}`);
  };

  useEffect(() => {
    if (data) setBlog(data.blogData);
  }, [data, setBlog]);

  if (isError) return <div>서버 오류 입니다.</div>;
  if (isPending) return <div>Loading ...</div>;

  return (
    <BlogTable
      scrapedBlogs={data?.blogData}
      handleSidePanelToggle={onClickTable}
    />
  );
}
