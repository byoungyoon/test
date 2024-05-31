'use client';

import { useQuery } from '@tanstack/react-query';
import { MRT_RowSelectionState } from 'mantine-react-table';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import { FETCH_SCRAPED_DATA } from '@/hooks/general/query';

import KeywordAnalysisTable from '@/components/tables/KeywordAnalysisTable';

import { usePanel } from '@/store/usePanel';
import { useStore } from '@/store/useStore';

import { getKeywordDetail } from '@/app/keyword-analysis/[search]/[limit]/[...keyword]/_lib/getKeywordDetail';

type Props = {
  search: string;
  keyword: string[];
  limit: number;
};

export default function CustomKeywordTable({ search, keyword, limit }: Props) {
  const router = useRouter();
  const { setKeywordDetail: setPanel } = usePanel();
  const {
    setKeywordDetail: setStore,
    setKeywordDetailSelect: setStoreSelect,
    setSelectDetailKeyword: setStoreKeyword,
  } = useStore();

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

  const onClickTable = (row: number) => {
    router.push(`/keyword-analysis/panel/${row}`);
  };

  const onClickSeq = (rows: MRT_RowSelectionState) => {
    const array = Object.keys(rows);

    if (array.length === 0) return;

    const index = array.map((value) => +value);
    setStoreSelect(index);
  };

  useEffect(() => {
    setPanel(data?.keyword_type_data ?? []);

    const storeData =
      data?.keyword_type_data.map((value) => {
        return { ...value, select: false };
      }) ?? [];

    setStore(storeData);
    setStoreKeyword(keyword);
  }, [setStore, setPanel, setStoreKeyword, data, keyword]);

  if (!data) return <></>;
  return (
    <KeywordAnalysisTable
      ScrapedPopularKeywordDetailedData={data.keyword_type_data}
      handleSidePanelToggle={onClickTable}
      handleRowSelection={onClickSeq}
      keywordType={data.keyword_type}
    />
  );
}
