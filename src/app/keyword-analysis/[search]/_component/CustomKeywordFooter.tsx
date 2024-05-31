'use client';

import { useQuery } from '@tanstack/react-query';
import React, { ChangeEventHandler, useMemo, useState } from 'react';

import { KEYWORD_TYPE } from '@/hooks/general/interface';
import { FETCH_SCRAPED_DATA } from '@/hooks/general/query';

import Select from '@/components/inputs/Select';

import { useStore } from '@/store/useStore';

import CustomFooter from '@/app/_component/CustomFooter';
import { getKeyword } from '@/app/keyword-analysis/[search]/_lib/getKeyword';

const selectOptions = [
  {
    key: '10',
    value: '10개',
  },
  {
    key: '20',
    value: '20개',
  },
  {
    key: '30',
    value: '30개',
  },
  {
    key: '40',
    value: '40개',
  },
  {
    key: '50',
    value: '50개',
  },
];

type Props = {
  search: string;
};

export default function CustomKeywordFooter({ search }: Props) {
  const { selectKeyword } = useStore();

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

  const [localData, setLocalData] = useState({
    select: '10',
    keywordDetail: [] as string[],
  });

  const isNextDisabled = useMemo(() => {
    let result = localData.keywordDetail.length !== 0;

    if (data?.keyword_type === KEYWORD_TYPE.AIR) {
      result = selectKeyword !== '' && result;
    }

    return result;
  }, [data?.keyword_type, localData.keywordDetail.length, selectKeyword]);

  const onTrackableSelect = (key: string) => {
    const select =
      selectOptions.find((option) => option.key === key)?.key ?? '10';

    setLocalData({ ...localData, select });
  };

  const onChangeInput: ChangeEventHandler<HTMLInputElement> = (event) => {
    const value = event.target.value;
    const keywordDetail = value
      .split(',')
      .map((keyword) => keyword.trim())
      .filter((keyword) => keyword !== '');

    setLocalData({ ...localData, keywordDetail });
  };

  return (
    <CustomFooter
      isPre
      isNext
      isNextDisabled={isNextDisabled}
      nextUrl={`/keyword-analysis/${search}/${
        localData.select
      }/${localData.keywordDetail.join('/')}${
        selectKeyword !== '' && '/' + selectKeyword
      }`}
    >
      <div className='blogAdd_box'>
        <ul>
          <li className='search_mainL'>
            <span>키워드 주제</span>
          </li>
          <li className='search_mainC'>
            <input
              type='text'
              placeholder='(예시) 대치동수학학원,대치동,수학학원'
              className='inp_detail'
              onChange={onChangeInput}
            />
          </li>
          <li className='search_mainR'>
            <Select
              defaultValue={localData.select}
              options={selectOptions}
              onTrackableSelect={onTrackableSelect}
            />
          </li>
        </ul>
      </div>
    </CustomFooter>
  );
}
