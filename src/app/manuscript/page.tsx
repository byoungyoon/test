import React from 'react';

import * as styles from './manuscript.css';

import CardArticle from '@/app/manuscript/_component/CardArticle';
import CustomBlogGroup from '@/app/manuscript/_component/CustomBlogGroup';
import CustomManuscriptFooter from '@/app/manuscript/_component/CustomManuscriptFooter';
import ShuffleArticle from '@/app/manuscript/_component/ShuffleArticle';
import TextDuplicateSection from '@/app/manuscript/_component/TextDuplicateSection';

const ManuscriptPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.sectionGroup}>
        <section className={styles.section}>
          <TextDuplicateSection />
        </section>
        <section className={styles.section}>
          <article className={styles.titleArticle}>
            <span className={styles.title}>키워드분석 데이터</span>
            <CustomBlogGroup />
          </article>
          <CardArticle />
          <ShuffleArticle />
        </section>
      </div>

      <CustomManuscriptFooter />
    </div>
  );
};

export default ManuscriptPage;
