'use client';

import React, { ChangeEventHandler, useEffect, useState } from 'react';

import * as styles from './keywordAnalysisCard.css';

import { splitText } from '@/lib/utils';

type Props = {
  title: string;
  avg: number;
  max: number;

  onTrackable?: (value: number) => void;
};
export default function KeywordAnalysisCard({
  title,
  avg,
  max,
  onTrackable,
}: Props) {
  const [value, setValue] = useState(Math.round(avg));

  const onChangeInput: ChangeEventHandler<HTMLInputElement> = (event) => {
    const target = +event.target.value;

    if (target > max || target < 0) return;
    setValue(target);
    onTrackable && onTrackable(target);
  };

  useEffect(() => {
    setValue(Math.round(avg));
  }, [avg]);

  useEffect(() => {
    onTrackable && onTrackable(Math.round(avg));

    // eslint-disable-next-line
  }, []);

  return (
    <div className={styles.container}>
      <span className={styles.title}>{splitText(title, 30)}</span>
      <div className={styles.layer}>
        <div className={styles.group}>
          <span>Avg</span>
          <span>:</span>
          <input
            type='number'
            className={styles.input}
            value={value}
            onChange={onChangeInput}
          />
        </div>
        <div className={styles.group}>
          <span>max</span>
          <span>:</span>
          <span>{max}</span>
        </div>
      </div>
    </div>
  );
}
