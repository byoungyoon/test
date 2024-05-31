'use client';

import { useMutation } from '@tanstack/react-query';
import Image from 'next/image';
import React, { useMemo, useRef } from 'react';

import { FETCH_SCRAPED_DATA } from '@/hooks/general/query';

import { useStore } from '@/store/useStore';

import CustomFooter from '@/app/_component/CustomFooter';
import { getBlogUrlMutate } from '@/app/keyword-analysis/[search]/_lib/getBlogUrlMutate';

import icoBlogAdd from '~/images/ico/ico_blog_add.png';

type Props = {
  search: string;
  keyword: string[];
};

export default function CustomKeywordDetailFooter({ search, keyword }: Props) {
  const { KeywordDetail } = useStore();
  const inputRef = useRef<HTMLInputElement>(null);

  const isNextDisabled = useMemo(() => {
    let result = 0;

    KeywordDetail.forEach((value) => {
      value.select && result++;
    });

    return result >= 2;
  }, [KeywordDetail]);

  const { mutate: onAction } = useMutation({
    mutationKey: [
      FETCH_SCRAPED_DATA.FETCH_ALL_SCRAPED_POPULAR_KEYWORDS_DETAILED_DATA_BY_BLOG_URL,
    ],
    mutationFn: getBlogUrlMutate,
    onSuccess: () => {
      return;
    },
  });

  const onClickAdd = () => {
    onAction({
      detailed_keywords: [search, keyword.join(', ')],
      blogUrl: inputRef.current?.value ?? '',
    });
  };

  return (
    <CustomFooter
      isPre
      isNext
      isNextDisabled={isNextDisabled}
      nextUrl='/manuscript'
    >
      <div className='blogAdd_box'>
        <ul>
          <li className='search_mainL'>
            <span>블로그 추가</span>
          </li>
          <li className='search_mainC'>
            <input
              type='text'
              ref={inputRef}
              placeholder='직접 추가 할 URL을 입력해주세요.'
              className='inp_detail'
            />
          </li>
          <li className='search_mainR'>
            <button
              type='button'
              className='btn_default btn_blog_add'
              onClick={onClickAdd}
            >
              추가
              <span>
                <Image src={icoBlogAdd} alt='add' />
              </span>
            </button>
          </li>
        </ul>
      </div>
    </CustomFooter>
  );
}
