'use client';

import cx from 'classnames';
import React, { ChangeEvent, useEffect, useState } from 'react';

import * as styles from './keywordSection.css';

import { useStore } from '@/store/useStore';

import icoInputAdd from '@/../public/images/ico/ico_input_add.png';
import CustomImage from '@/app/_component/CustomImage';

type Props = {
  classname: string;
};

export default function KeywordSection({ classname }: Props) {
  const { Shuffle, setAnalysisKeyword, analysisResult } = useStore();

  const [localKeywords, setLocalKeywords] = useState(Shuffle.keywords);
  const [listData, setListData] = useState(Object.keys(Shuffle.keywords));

  const onFindWord = (wordData: string, keyword: string) => {
    const regex = new RegExp(keyword, 'g');
    const matches = wordData.match(regex);

    return matches ? matches.length : 0;
  };

  const onClickPlus = () => {
    setListData([...listData, '']);
  };

  const onChangeInput =
    (index: number) => (event: ChangeEvent<HTMLInputElement>) => {
      const nListData = listData.map((datum, sIndex) => {
        if (sIndex === index) return event.target.value;

        return datum;
      });

      setListData(nListData);
    };

  const onResult = () => {
    const cListData = listData.filter((datum) => datum !== '');

    const nLocalKeywords = cListData.reduce((a, b) => {
      a[b] = 0;
      return a;
    }, {} as Record<string, number>);

    Object.entries(Shuffle.keywords).forEach((keyword) => {
      if (nLocalKeywords[keyword[0]] === 0) {
        nLocalKeywords[keyword[0]] = keyword[1];
      }
    });

    setListData(cListData);
    setLocalKeywords(nLocalKeywords);
  };

  useEffect(() => {
    setAnalysisKeyword(localKeywords);
  }, [localKeywords, setAnalysisKeyword]);

  return (
    <section className={classname}>
      <div className={styles.title}>키워드 찾기</div>
      <div className={styles.box}>
        <table className={styles.table}>
          <colgroup>
            <col width='70%' />
            <col width='15%' />
            <col width='15%' />
          </colgroup>
          <thead>
            <tr>
              <th>키워드</th>
              <th>이전</th>
              <th>이후</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(localKeywords).map((keyword, index) => (
              <tr key={index}>
                <td>{keyword[0]}</td>
                <td>{keyword[1]}</td>
                <td>{onFindWord(analysisResult.word, keyword[0])}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className={styles.list}>
          {listData.map((keyword, index) => (
            <input
              key={index}
              className={styles.listItem}
              value={keyword}
              onChange={onChangeInput(index)}
            />
          ))}
          <div className={cx(styles.listItem, 'add')} onClick={onClickPlus}>
            <CustomImage src={icoInputAdd} alt='add' />
          </div>
        </div>
        <button type='button' className={styles.button} onClick={onResult}>
          분석하기
        </button>
      </div>
    </section>
  );
}
