import React, { Suspense } from 'react';

import * as styles from './search.css';

import CustomBlogVolume from '@/app/keyword-analysis/[search]/_component/CustomBlogVolume';
import CustomKeywordFooter from '@/app/keyword-analysis/[search]/_component/CustomKeywordFooter';
import CustomKeywordType from '@/app/keyword-analysis/[search]/_component/CustomKeywordType';
import CustomList from '@/app/keyword-analysis/[search]/_component/CustomList';
import CustomSearchBar from '@/app/keyword-analysis/[search]/_component/CustomSearchBar';
import KeywordSuspense from '@/app/keyword-analysis/[search]/_component/KeywordSuspense';

type Props = {
  params: {
    search: string;
  };
};

export default function Page({ params }: Props) {
  const currParams = {
    search: decodeURI(params.search),
  };

  return (
    <div className={styles.container.root}>
      <Suspense fallback={<div>Loading...</div>}>
        <KeywordSuspense search={currParams.search}>
          <section className={styles.container.search}>
            <CustomSearchBar defaultValue={currParams.search} />
            <div className={styles.searchLayer}>
              <div className={styles.searchLayerGroup}>
                <span>키워드</span>
                <span>:</span>
                <span>{currParams.search}</span>
              </div>
              <div className={styles.searchLayerGroup}>
                <span>타입</span>
                <span>:</span>
                <CustomKeywordType search={currParams.search} />
              </div>
              <div className={styles.searchLayerGroup}>
                <span>조회수</span>
                <span>:</span>
                <CustomBlogVolume search={currParams.search} />
              </div>
            </div>
          </section>
          <section className={styles.container.list}>
            <CustomList search={currParams.search} />
          </section>
        </KeywordSuspense>
      </Suspense>
      <CustomKeywordFooter search={currParams.search} />
    </div>
  );
}
