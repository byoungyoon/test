'use client';

import { useQuery } from '@tanstack/react-query';
import { Monitor, Smartphone } from 'lucide-react';
import React from 'react';

import { FETCH_SCRAPED_DATA } from '@/hooks/general/query';

import Slick from '@/components/slick';

import { postBlogSectionVolume } from '@/app/_lib/postBlogSectionVolume';
import { postBlogSection } from '@/app/blogs/_lib/postBlogSection';
import { convertSections } from '@/utils/transformData';

type Props = {
  search: string;
};

function Blog({ search }: Props) {
  const { data, isPending, isError } = useQuery({
    queryKey: [FETCH_SCRAPED_DATA.FETCH_ALL_BLOG_SECTIONS_INFORMATION, search],
    queryFn: postBlogSection,
    enabled: !!search,
  });

  if (isError) return <div>서버 오류 입니다.</div>;
  if (isPending) return <div>Loading ...</div>;

  const slickData = [
    {
      list: convertSections(data?.pc_sections),
      icon: <Monitor size={24} className='text-[#666]' />,
    },
    {
      list: convertSections(data?.mobile_sections),
      icon: <Smartphone size={24} className='text-[#666]' />,
    },
  ];

  return (
    <>
      {slickData[0].list.length !== 0 || slickData[1].list.length !== 0 ? (
        slickData.map((datum, index) => (
          <Slick key={index} list={datum.list} icon={datum.icon} />
        ))
      ) : (
        <p>No data available</p>
      )}
    </>
  );
}

function BlogVolume({ search }: Props) {
  const { data, isPending, isError } = useQuery({
    queryKey: [FETCH_SCRAPED_DATA.FETCH_ALL_BLOG_SEARCH_VOLUME_DATA, search],
    queryFn: postBlogSectionVolume,
    enabled: !!search,
  });

  if (isError) return <div>서버 오류 입니다.</div>;
  if (isPending) return <div>Loading ...</div>;

  const localData = [
    {
      label: '검색량(일)',
      value: data?.search_volume_days,
      isBlog: false,
    },
    {
      label: '검색량(월)',
      value: data?.search_volume_month,
      isBlog: false,
    },
    // {
    //   id: 3,
    //   label: 'PC 검색량',
    //   value: searchVolume.PC_search_volume,
    //   isBlog: false,
    // },
    // {
    //   id: 4,
    //   label: '모바일 검색량',
    //   value: searchVolume.Mobile_search_volume,
    //   isBlog: false,
    // },
  ];

  return (
    <>
      {localData.map((datum, index) => (
        <li key={index}>
          <span className='section_info_txt'>
            {datum.isBlog && <strong style={{ color: '#23d160' }}>blog</strong>}{' '}
            {datum.label}
          </span>
          <span className='section_info_count'>{datum.value}</span>
        </li>
      ))}
    </>
  );
}

export default function CustomBlogSection({ search }: Props) {
  return (
    <div className='topL_box'>
      <div className='box_stt'>섹션 정보</div>
      <div className='section_top'>
        <Blog search={search} />
      </div>
      <div className='section_btm'>
        <div className='section_btmInn'>
          <ul>
            <BlogVolume search={search} />
          </ul>
        </div>
      </div>
    </div>
  );
}
