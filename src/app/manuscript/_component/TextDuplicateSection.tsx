'use client';

import { useMutation } from '@tanstack/react-query';
import cx from 'classnames';
import React, { useCallback, useEffect, useMemo, useState } from 'react';

import * as styles from './textDuplicateSection.css';

import { FETCH_SCRAPED_DATA } from '@/hooks/general/query';

import CopyButton from '@/components/buttons/CopyButton';
import Select from '@/components/inputs/Select';

import { useStore } from '@/store/useStore';

import {
  postTextDuplicateMutate,
  TextDuplicateRequestTypes,
} from '@/app/manuscript/_lib/postTextDuplicateMutate';

import CopyImage from '~/images/ico/copy.png';

type LocalTextDuplicateTypes = {
  /**
   * 중복되는 단어 배열
   * 배열길이 4로 1개 중복에서 4개 중복까지 존재
   */
  target: string[][];

  /**
   * 블로그의 1개 중복시의 데이터
   */
  base: Record<string, string[]>;

  /**
   * base에서 target를 소거한 데이터
   */
  filter: Record<string, string[]>;
};

export default function TextDuplicateSection() {
  const { KeywordDetail, setShuffleWordData } = useStore();
  const [duplicatedData, setDuplicatedData] = useState<LocalTextDuplicateTypes>(
    {
      target: [],
      base: {},
      filter: {},
    }
  );
  const [select, setSelect] = useState('0');

  const selectOptions = useMemo(
    () =>
      duplicatedData.target.map((value, index) => {
        return {
          key: `${index}`,
          value: `${index + 1}개 중복 (${value.length}단어)`,
        };
      }),
    [duplicatedData.target]
  );

  /**
   * 현재 해당하는 데이터를 filter 한 후 string[]로 저장
   */
  const duplicatedCombine = useMemo(() => {
    const result = new Set<string>();

    Object.values(duplicatedData.filter).forEach((array) => {
      array.forEach((value) => result.add(value));
    });

    return Array.from(result);
  }, [duplicatedData.filter]);

  /**
   * base에서 target을 filter
   * @param base filter를 할 데이터
   * @param target filter를 시키는 데이터
   * return string[]
   */
  const onDuplicatedFilter = (base: string[], target: string[]) => {
    return base.filter((value) => target.includes(value));
  };

  /**
   * string 배열안의 데이터 길이
   * @param filter
   * return number
   */
  const onDuplicatedLength = (filter: string[]) => {
    return filter.reduce((a, b) => a + b.length, 0);
  };

  const onDuplicatedJoin = (
    index: number,
    filter: Record<string, string[]>
  ) => {
    const key = `Post${index} 1 duplicated words`;

    return filter[key] ? filter[key].join(', ') : '없음';
  };

  const { mutate: onAction, isPending } = useMutation({
    mutationKey: [FETCH_SCRAPED_DATA.FETCH_ALL_SCRAPED_DUPLICATED_BLOGS],
    mutationFn: postTextDuplicateMutate,
    onSuccess: (response) => {
      const target = Object.values(response.duplicated_words);
      const base = response.post_specific_duplicated;

      const filter = Object.keys(base).reduce((a, b) => {
        const arr: Record<string, string[]> = a;
        arr[b] = onDuplicatedFilter(base[b], target[+select]);

        return arr;
      }, {});

      setDuplicatedData({ target, base, filter });
    },
  });

  /**
   * select change action
   * @param key select option key
   */
  const onTrackableSelect = (key: string) => {
    const filter = Object.keys(duplicatedData.base).reduce((a, b) => {
      const arr: Record<string, string[]> = a;
      arr[b] = onDuplicatedFilter(
        duplicatedData.base[b],
        duplicatedData.target[+key]
      );

      return arr;
    }, {});

    setSelect(key);
    setDuplicatedData({ ...duplicatedData, filter: filter });
  };

  const onDefault = useCallback(() => {
    const request: TextDuplicateRequestTypes = { data: {} };

    KeywordDetail.forEach((value, index) => {
      if (value.select) {
        const key = `blog${index + 1}_text`;
        request.data[key] = KeywordDetail[index].blog.inner_data.blog_text;
      }
    });

    onAction(request);
  }, [onAction, KeywordDetail]);

  /**
   * KeywordDetail 변할 때 마다 API 호출
   */
  useEffect(() => {
    onDefault();
  }, [onDefault]);

  /**
   * 단어 셔플 영역이 변할 때 마다 useStore 저장
   */
  useEffect(() => {
    setShuffleWordData(duplicatedCombine);
  }, [setShuffleWordData, duplicatedCombine]);

  const elementData = useMemo(() => {
    return duplicatedCombine.map((text) => (
      <span key={text} className={styles.wordBlock}>
        {text}
      </span>
    ));
  }, [duplicatedCombine]);

  return (
    <>
      <article className={styles.blogArticle}>
        {KeywordDetail.map((data, index) => {
          if (!data.select) return;

          return (
            <ul className={styles.blogGroup.root} key={index}>
              <li className={styles.blogGroup.title}>{index + 1}번 블로그</li>
              <li className={styles.blogGroup.content}>
                {isPending
                  ? 'Loading...'
                  : onDuplicatedJoin(index + 1, duplicatedData.filter)}
              </li>
            </ul>
          );
        })}
      </article>

      <article className={styles.shuffleArticle}>
        <div className={styles.shuffleArticleTitle}>단어 셔플</div>
        <div className={styles.shuffleArticleContent}>
          <div className={styles.menuGroup}>
            <ul>
              <li>
                {/* 단어추출 선택 버튼 */}
                <div className={styles.selectGroup}>
                  <Select
                    defaultValue={select}
                    options={selectOptions}
                    onTrackableSelect={onTrackableSelect}
                  />
                </div>
                {/* /단어추출 선택 버튼 */}
              </li>
              <li>
                <div className={styles.wordGroup}>
                  <span>단어 글자수</span>
                  <span>:</span>
                  <div>
                    <div className={styles.wordGroup}>
                      <span className={styles.wordGroupMargin}>
                        {onDuplicatedLength(duplicatedCombine)}자
                      </span>
                      <span className={cx(styles.bulletGrid, 'blue')} />
                      <span>공백포함</span>
                    </div>
                    <div className={styles.wordGroup}>
                      <span className={styles.wordGroupMargin}>
                        {onDuplicatedLength(duplicatedCombine)}자
                      </span>
                      <span className={cx(styles.bulletGrid, 'red')} />
                      <span>공백제외</span>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <CopyButton
              copy={duplicatedCombine.join(', ')}
              icon={CopyImage}
              classname={styles.copyButton}
            />
          </div>
          <div className={styles.shuffleBox}>{elementData}</div>
        </div>
      </article>
    </>
  );
}
