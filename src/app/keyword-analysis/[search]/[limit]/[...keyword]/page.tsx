import cx from 'classnames';
import React, { Suspense } from 'react';

import * as styles from './keyword.css';

import CustomKeywordDetailFooter from '@/app/keyword-analysis/[search]/[limit]/[...keyword]/_component/CustomKeywordDetailFooter';
import CustomKeywordTable from '@/app/keyword-analysis/[search]/[limit]/[...keyword]/_component/CustomKeywordTable';
import CustomKeywordTitleType from '@/app/keyword-analysis/[search]/[limit]/[...keyword]/_component/CustomKeywordTitleType';
import KeywordDetailSuspense from '@/app/keyword-analysis/[search]/[limit]/[...keyword]/_component/KeywordDetailSuspense';

type Props = {
  params: {
    search: string;
    limit: number;
    keyword: string[];
  };
};

export default function Page({ params }: Props) {
  const currParams = {
    search: decodeURI(params.search),
    keyword: [...params.keyword].map((datum) => decodeURI(datum)),
    limit: +params.limit,
  };

  return (
    <div className={styles.container}>
      <Suspense fallback={<div>Loading...</div>}>
        <KeywordDetailSuspense {...currParams}>
          <div className={styles.section}>
            <section className={styles.titleContainer}>
              <div className={styles.titleGroup}>
                <span>키워드</span>
                <span>:</span>
                <span className='value'>{currParams.search}</span>
              </div>
              <div className={styles.titleGroup}>
                <span>타입</span>
                <span>:</span>
                <CustomKeywordTitleType {...currParams} />
              </div>
              <div className={styles.titleGroup}>
                <span>주제</span>
                <span>:</span>
                <span className='value'>{currParams.keyword.join(', ')}</span>
              </div>
            </section>
            <section className={styles.tableContainer}>
              <aside className={styles.aside}>
                <div className={styles.asideLayer}>
                  <span className={cx(styles.asideGrid, 'blue')} />
                  <span className={styles.asideText}>공백 포함</span>
                </div>
                <div className={styles.asideLayer}>
                  <span className={cx(styles.asideGrid, 'red')} />
                  <span className={styles.asideText}>공백 제외</span>
                </div>
              </aside>
              <CustomKeywordTable {...currParams} />
            </section>
          </div>
        </KeywordDetailSuspense>
      </Suspense>
      <CustomKeywordDetailFooter {...currParams} />
    </div>
  );
}
