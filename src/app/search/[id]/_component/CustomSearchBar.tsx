'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

import SearchBar from '@/app/_component/SearchBar';

type Props = {
  id: string;
};

export default function CustomSearchBar({ id }: Props) {
  const router = useRouter();

  const onSubmit = (keyword: string) => {
    switch (id) {
      case 'blog':
        router.push(`/blogs/?search=${keyword}`);
        break;
      case 'analysis':
        router.push(`/keyword-analysis/${keyword}`);
        break;
      default:
        break;
    }
  };

  return <SearchBar onSubmit={onSubmit} />;
}
