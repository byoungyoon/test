'use client';

import { useMutation } from '@tanstack/react-query';
import cx from 'classnames';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import React, { ChangeEventHandler, useEffect, useMemo, useState } from 'react';

import * as styles from './shuffleArticle.css';
import { vars } from '@/styles/theme.css';

import { FETCH_SCRAPED_DATA } from '@/hooks/general/query';

import { usePanel } from '@/store/usePanel';
import { useStore } from '@/store/useStore';

import { postShuffledMutate } from '@/app/manuscript/_lib/postShuffledMutate';

import Info from '~/images/ico/info_ico.png';

const colorMatch = [
  vars.color.blue['100'],
  vars.color.blue['200'],
  vars.color.slate['100'],
  vars.color.slate['200'],
  vars.color.zinc['100'],
  vars.color.zinc['200'],
  vars.color.neutral['100'],
  vars.color.neutral['200'],
  vars.color.stone['100'],
  vars.color.stone['200'],
  vars.color.red['100'],
  vars.color.red['200'],
  vars.color.orange['100'],
  vars.color.orange['200'],
  vars.color.amber['100'],
  vars.color.amber['200'],
  vars.color.yellow['100'],
  vars.color.yellow['200'],
];

export type ShuffleDataTypes = {
  color: string;
  text: string;
};

type LocalShuffleLenTypes = {
  exclude: number;
  include: number;
};

export default function ShuffleArticle() {
  const router = useRouter();
  const pathname = usePathname();

  const { Shuffle, setShuffleResult: setStore, shuffleResult } = useStore();
  const { setShuffleResult: setPanel } = usePanel();
  const [shuffleData, setShuffleData] =
    useState<ShuffleDataTypes[]>(shuffleResult);
  const [length, setLength] = useState<LocalShuffleLenTypes>({
    exclude: 0,
    include: 0,
  });

  const [limit, setLimit] = useState(1000);

  const color: Record<string, string> = useMemo(() => {
    return Object.keys(Shuffle.keywords).reduce((a, b, index) => {
      b = b.replaceAll(' ', '');

      const object: Record<string, string> = {};
      object[b] = colorMatch[index];
      return object;
    }, {});
  }, [Shuffle.keywords]);

  const { mutate: onAction, isPending } = useMutation({
    mutationKey: [FETCH_SCRAPED_DATA.FETCH_ALL_SCRAPED_BLOG_SHUFFLED_DATA],
    mutationFn: postShuffledMutate,
    onSuccess: (response) => {
      const result = response.part3_data.reduce(
        (a, b) => a.concat({ color: color[b[0]] ?? 'inherit', text: b[0] }),
        [] as ShuffleDataTypes[]
      );

      setStore(result);
      setPanel(result);

      setShuffleData(result);
      setLength({
        exclude: response.char_count_excluding_spaces,
        include: response.char_count_including_spaces,
      });
    },
  });

  const onChangeLimit: ChangeEventHandler<HTMLInputElement> = (event) => {
    const target = +event.target.value;

    if (target < 0) return;

    setLimit(+event.target.value);
  };

  const onClickShuffle = () => {
    if (Shuffle.wordData.length === 0) return;

    onAction({
      char_limit: limit,
      words_data: Shuffle.wordData,
      purified_data: Shuffle.wordData.join(' '),
      keywords: Shuffle.keywords,
    });
  };

  const onClickShuffleList = () => {
    router.push(`${pathname}/panel`);
  };

  const elementData = useMemo(() => {
    if (isPending) return <span>Loading...</span>;

    if (shuffleData.length === 0)
      return (
        <span className={styles.shuffleResultPlaceHolder}>
          <Image src={Info} alt='info' width={25} height={25} />
          글자수 제한 입력박스에 셔플 할 글자수를 입력 후 셔플 클릭해주세요!
        </span>
      );

    return shuffleData.map((datum, index) => (
      <span
        key={index}
        className={styles.wordBlock}
        style={{ background: datum.color }}
      >
        {datum.text}
      </span>
    ));
  }, [shuffleData, isPending]);

  useEffect(() => {
    const onCopyAction = () => {
      const array = shuffleData.reduce(
        (a, b) => a.concat(b.text),
        [] as string[]
      );

      navigator.clipboard.writeText(array.join(' '));
    };
    const result = document.getElementById('result');

    if (shuffleData.length !== 0) {
      result?.addEventListener('copy', onCopyAction);
    }

    return () => result?.removeEventListener('copy', onCopyAction);
  }, [shuffleData]);

  return (
    <article className={styles.shuffleArticle}>
      <div className={styles.shuffleGroup}>
        <div>
          <span className={styles.shuffleGroupTitle}>글자수제한</span>
          <input
            type='number'
            className={styles.shuffleGroupInput}
            value={limit}
            onChange={onChangeLimit}
          />
        </div>
        <div>
          <button
            className={cx(styles.shuffleGroupButton, 'btn_default')}
            onClick={onClickShuffle}
          >
            셔 플
          </button>
          <button
            className={cx(styles.shuffleGroupButton, 'btn_default')}
            onClick={onClickShuffleList}
          >
            셔플 내역
          </button>
        </div>
      </div>
      <div className={styles.wordGroup}>
        <div>
          <span>공백 포함</span>
          <input
            type='text'
            className={styles.shuffleGroupInput}
            value={length.include}
            readOnly
          />
          <span>자</span>
        </div>
        <div>
          <span>공백 제외</span>
          <input
            type='text'
            className={styles.shuffleGroupInput}
            value={length.exclude}
            readOnly
          />
          <span>자</span>
        </div>
      </div>
      <div id='result' className={styles.shuffleResult}>
        {elementData}
      </div>
    </article>
  );
}
