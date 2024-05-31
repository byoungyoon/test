'use client';

import { useQuery } from '@tanstack/react-query';
import React, { KeyboardEventHandler, useCallback, useState } from 'react';

import * as styles from './searchBar.css';

import { FETCH_SCRAPED_DATA } from '@/hooks/general/query';

import SearchField from '@/components/inputs/SearchField';
import SuggestionsList from '@/components/list/SuggestionsList';

import { getSuggest } from '@/app/_lib/getSuggest';

type Props = {
  onSubmit: (keyword: string) => void;

  defaultValue?: string;
  variant?: 'small' | 'large' | 'new';
};

export default function SearchBar({
  defaultValue = '',
  onSubmit,
  variant = 'large',
}: Props) {
  const [searchTxt, setSearchTxt] = useState(defaultValue);
  const [isOver, setIsOver] = useState<boolean>(false);

  const { data: suggestData, isLoading: fetchingSuggestions } = useQuery({
    queryKey: [
      FETCH_SCRAPED_DATA.FETCH_ALL_SUGGESTED_BLOGS_FROM_KEYWORD,
      searchTxt,
    ],
    queryFn: getSuggest,
    enabled: !!searchTxt,
  });

  const handleInputFocus = () => {
    setIsOver(true);
  };

  const handleSearchTxtChange = (value: string) => {
    setSearchTxt(value);
    setIsOver(true);
  };

  const handleEnterSubmit: KeyboardEventHandler = (event) => {
    if (event.key === 'Enter') {
      onSubmit(searchTxt);
      setIsOver(false);
    }
  };

  const localSubmit = useCallback(() => {
    onSubmit(searchTxt);
  }, [onSubmit, searchTxt]);

  const handleSelectSuggestion = (keyword: string) => {
    setSearchTxt(keyword);
    setIsOver(false);
  };

  return (
    <div className={styles.container}>
      <SearchField
        variant={variant}
        value={searchTxt}
        handleFocus={handleInputFocus}
        // handleBlur={handleInputBlur}
        handleValueChange={handleSearchTxtChange}
        handleEnterSubmit={handleEnterSubmit}
        handleClickSubmit={localSubmit}
        isFetching={fetchingSuggestions}
      />
      {isOver && (
        <SuggestionsList
          height='max-h-[300px]'
          suggestions={suggestData as string[]}
          handleSelectionSuggestion={handleSelectSuggestion}
        />
      )}
    </div>
  );
}
