'use client';

import cx from 'classnames';
import React from 'react';

import * as styles from './resultButton.css';

import { useStore } from '@/store/useStore';

export default function ResultButton() {
  const { analysisResult } = useStore();

  const onCopyText = () => {
    const text = `${analysisResult.word}\n\n${analysisResult.hashTags.join(
      ' '
    )}`;

    navigator.clipboard.writeText(text);
  };

  return (
    <button
      type='button'
      className={cx(styles.button, 'btn_default')}
      onClick={onCopyText}
    >
      최종 원고 복사
    </button>
  );
}
