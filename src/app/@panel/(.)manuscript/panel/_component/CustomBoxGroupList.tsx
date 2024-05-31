'use client';

import { use } from 'ast-types';

import * as styles from './customBoxGroupList.css';

import CopyButton from '@/components/buttons/CopyButton';

import { usePanel } from '@/store/usePanel';

import { ShuffleDataTypes } from '@/app/manuscript/_component/ShuffleArticle';

import CopyImage from '~/images/ico/copy.png';

export default function CustomBoxGroupList() {
  const { shuffleResult } = usePanel();

  const copyData = (shuffle: ShuffleDataTypes[]) =>
    use(() => {
      return shuffle
        .reduce((a, b) => a.concat(b.text), [] as string[])
        .join(' ');
    });

  const elementData = (shuffle: ShuffleDataTypes[]) =>
    use(() => {
      return shuffle.map((data, index) => (
        <span
          key={index}
          className={styles.wordBlock}
          style={{ backgroundColor: data.color }}
        >
          {data.text}
        </span>
      ));
    });

  return (
    <>
      {shuffleResult.length === 0
        ? '데이터가 없습니다'
        : shuffleResult.map((shuffle, index) => (
            <article key={index} className={styles.shuffleArticle}>
              <div className={styles.titleLayer}>
                <span className={styles.title}>셔플된 데이터{index + 1}</span>
                <CopyButton
                  classname={styles.copyButton}
                  copy={copyData(shuffle)}
                  icon={CopyImage}
                />
              </div>
              <div className={styles.shuffleBox}>{elementData(shuffle)}</div>
            </article>
          ))}
    </>
  );
}
