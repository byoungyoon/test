'use client';

import { useQuery } from '@tanstack/react-query';
import { Monitor, Smartphone } from 'lucide-react';
import React from 'react';

import * as styles from './customBlogVolume.css';

import { FETCH_SCRAPED_DATA } from '@/hooks/general/query';

import { postBlogSectionVolume } from '@/app/_lib/postBlogSectionVolume';

type Props = {
  search: string;
};

export default function CustomBlogVolume({ search }: Props) {
  const { data } = useQuery({
    queryKey: [FETCH_SCRAPED_DATA.FETCH_ALL_BLOG_SEARCH_VOLUME_DATA, search],
    queryFn: postBlogSectionVolume,
    enabled: !!search,
    staleTime: 5 * 4 * 60 * 1000,
    gcTime: 5 * 4 * 60 * 1000 * 4,
  });

  if (!data) return <></>;

  return (
    <span className={styles.container}>
      <Monitor size={15} />
      <span>{data.PC_search_volume}</span>
      <span>+</span>
      <Smartphone size={15} />
      <span>{data.Mobile_search_volume}</span>
      <span>=</span>
      <span>
        {(data.Mobile_search_volume + data.PC_search_volume).toFixed(3)}
      </span>
    </span>
  );
}
