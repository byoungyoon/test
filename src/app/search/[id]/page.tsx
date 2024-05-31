import React from 'react';

import * as styles from './searchId.css';

import CustomSearchBar from '@/app/search/[id]/_component/CustomSearchBar';

type Props = {
  params: { id: string };
};

const SearchPage = ({ params }: Props) => {
  const id = params.id;

  return (
    <div className={styles.container}>
      <CustomSearchBar id={id} />
    </div>
  );
};

export default SearchPage;
