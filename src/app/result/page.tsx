import React from 'react';

import * as styles from './result.css';

import CustomFooter from '@/app/_component/CustomFooter';
import AnalysisSection from '@/app/result/_component/AnalysisSection';
import HashTagSection from '@/app/result/_component/HashTagSection';
import KeywordSection from '@/app/result/_component/KeywordSection';
import ResultButton from '@/app/result/_component/ResultButton';

export default function Page() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.sectionGroup}>
          {/* 좌측영역 */}
          <AnalysisSection classname={styles.analysisSection} />

          <div className={styles.right}>
            <KeywordSection classname={styles.keywordSection} />
            <HashTagSection classname={styles.hashTagSection} />

            <div className={styles.buttonLayer}>
              <ResultButton />
            </div>
          </div>
        </div>
      </div>

      <CustomFooter isPre>
        <></>
      </CustomFooter>
    </>
  );
}
