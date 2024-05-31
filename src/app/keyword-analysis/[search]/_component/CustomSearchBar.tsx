'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

import SearchBar from '@/app/_component/SearchBar';

type Props = {
  defaultValue: string;
};

export default function CustomSearchBar({ defaultValue }: Props) {
  const router = useRouter();

  const onSubmit = (keyword: string) => {
    router.push(`/keyword-analysis/${keyword}`);
  };

  return (
    <SearchBar
      defaultValue={defaultValue}
      onSubmit={onSubmit}
      variant='large'
    />
  );
}
