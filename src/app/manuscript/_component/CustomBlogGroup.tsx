'use client';

import cx from 'classnames';
import React, { useState } from 'react';

import * as styles from './customBlogGroup.css';

import { useStore } from '@/store/useStore';

export default function CustomBlogGroup() {
  const { KeywordDetail, setKeywordDetailSelect } = useStore();
  const [currSelect, setCurrSelect] = useState(
    KeywordDetail.filter((data) => data.select).map((_, index) => index)
  );

  const onClickIndex = (index: number) => () => {
    const nCurrSelect = currSelect.includes(index)
      ? currSelect.filter((value) => value !== index)
      : currSelect.concat(index);

    if (nCurrSelect.length > 5 || nCurrSelect.length < 2) return;

    setKeywordDetailSelect(nCurrSelect);
    setCurrSelect(nCurrSelect);
  };

  return (
    <div className={styles.blogGroup}>
      <span className={styles.blogItemTitle}>선택된 블로그</span>

      {KeywordDetail.map((_, index) => (
        <span
          key={index}
          className={cx(styles.blogItem, currSelect.includes(index) && 'on')}
          onClick={onClickIndex(index)}
        >
          {index + 1}번
        </span>
      ))}
    </div>
  );
}
