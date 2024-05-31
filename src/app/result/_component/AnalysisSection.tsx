'use client';

import { useMutation } from '@tanstack/react-query';
import { useCallback, useEffect, useState } from 'react';

import * as styles from './analysisSection.css';
import { vars } from '@/styles/theme.css';

import { FETCH_SCRAPED_DATA } from '@/hooks/general/query';

import { useStore } from '@/store/useStore';

import { ShuffleDataTypes } from '@/app/manuscript/_component/ShuffleArticle';
import { postAnalysisMutate } from '@/app/result/_lib/postAnalysisMutate';

const ColorMatch = [
  vars.color.blue['200'],
  vars.color.slate['200'],
  vars.color.zinc['200'],
  vars.color.neutral['200'],
  vars.color.stone['200'],
  vars.color.red['200'],
  vars.color.orange['200'],
  vars.color.amber['200'],
  vars.color.yellow['200'],
];

type Props = {
  classname: string;
};

type LocalResultTypes = {
  base: string;
  filter: ShuffleDataTypes[];
  exclude: number;
  include: number;
};

export default function AnalysisSection({ classname }: Props) {
  const { shuffleResult, analysisKeyword, Shuffle, setAnalysisWord } =
    useStore();

  const [resultData, setResultData] = useState<LocalResultTypes>({
    base: '',
    filter: [],
    exclude: 0,
    include: 0,
  });

  const onFindKeyword = (
    keyword: string,
    color: string,
    target: ShuffleDataTypes[]
  ) => {
    const result: ShuffleDataTypes[] = [];

    target.forEach((data) => {
      if (!data.text.includes(keyword)) {
        result.push({
          text: data.text,
          color: data.color,
        });
        return;
      }

      const split = data.text.split(keyword);
      split.forEach((sText, index) => {
        if (sText !== '') {
          result.push({
            text: sText,
            color: data.color,
          });
        }
        if (index < split.length - 1) {
          result.push({
            text: keyword,
            color: color,
          });
        }
      });
    });
    return result;
  };

  const onSortKeyword = (target: string[]) => {
    return target.sort((a, b) => {
      if (b.length !== a.length) return b.length - a.length;

      return b.localeCompare(a);
    });
  };

  const onSplitKeyword = (keywords: string[], text: string) => {
    let filter: ShuffleDataTypes[] = [
      {
        text: text,
        color: '',
      },
    ];

    onSortKeyword(keywords).forEach((keyword, keywordIndex) => {
      filter = onFindKeyword(keyword, ColorMatch[keywordIndex], filter);
    });

    return filter;
  };

  const { mutate: onAction } = useMutation({
    mutationKey: [FETCH_SCRAPED_DATA.FETCH_ALL_MANUSCRIPT_ANALYSIS_PAGE_DATA],
    mutationFn: postAnalysisMutate,
    onSuccess: (response) => {
      setAnalysisWord(response.part4_data);
      setResultData({
        ...resultData,
        base: response.part4_data,
        include: response.char_count_including_spaces,
        exclude: response.char_count_excluding_spaces,
      });
    },
  });

  const onDefault = useCallback(() => {
    onAction({
      words_data: shuffleResult.reduce(
        (a, b) => a.concat(b.text),
        [] as string[]
      ),
      keywords: Shuffle.keywords,
    });
  }, [onAction, shuffleResult, Shuffle]);

  useEffect(() => {
    onDefault();
  }, [onDefault]);

  useEffect(() => {
    const onCopyAction = () => {
      navigator.clipboard.writeText(resultData.base);
    };
    const box = document.getElementById('box');
    box?.addEventListener('copy', onCopyAction);

    return () => box?.removeEventListener('copy', onCopyAction);
  }, [resultData.base]);

  useEffect(() => {
    const filter = onSplitKeyword(
      onSortKeyword(Object.keys(analysisKeyword)),
      resultData.base
    );

    setResultData({ ...resultData, filter });
    // eslint-disable-next-line
  }, [analysisKeyword, resultData.base]);

  return (
    <section className={classname}>
      <div className={styles.titleLayer}>
        <span className={styles.title}>원고 분석</span>
        <ul className={styles.wordLength}>
          <li>
            <span className={styles.wordLengthBlue}>공백 포함 </span>
            <span>{resultData.include} 자</span>
          </li>
          <li>
            <span className={styles.wordLengthRed}>공백 제외 </span>
            <span>{resultData.exclude} 자</span>
          </li>
        </ul>
      </div>
      <div id='box' className={styles.box}>
        {resultData.filter.map((datum, index) =>
          datum.color !== '' ? (
            <span key={index}>
              <span style={{ backgroundColor: datum.color }}>{datum.text}</span>
            </span>
          ) : (
            datum.text
              .split('')
              .map((sDatum, sIndex) => <span key={sIndex}>{sDatum}</span>)
          )
        )}
      </div>
    </section>
  );
}
