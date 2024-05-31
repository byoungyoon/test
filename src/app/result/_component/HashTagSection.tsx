'use client';

import cx from 'classnames';
import { useEffect, useState } from 'react';

import * as styles from './hashTagSection.css';

import { useStore } from '@/store/useStore';

type Props = {
  classname: string;
};

type LocalHashTagTypes = {
  key: string;
  text: string;
  select: boolean;
};

export default function HashTagSection({ classname }: Props) {
  const { KeywordDetail, setAnalysisHashTag } = useStore();

  const [hashTag, setHashTag] = useState<LocalHashTagTypes[]>([]);

  const onClickHashTag = (key: string) => () => {
    const nHashTag = hashTag.map((data) => {
      if (data.key === key) {
        return {
          ...data,
          select: !data.select,
        };
      }
      return data;
    });

    setHashTag(nHashTag);
  };

  useEffect(() => {
    const current = hashTag.reduce((a, b) => {
      if (b.select) return a.concat(b.text);

      return a;
    }, [] as string[]);
    setAnalysisHashTag(current);
  }, [hashTag, setAnalysisHashTag]);

  useEffect(() => {
    let result: LocalHashTagTypes[] = [];

    KeywordDetail.forEach((data) => {
      if (!data.select) return;

      result = [
        ...result,
        ...data.blog.tag_data.map((datum, index) => {
          return {
            key: `${datum.tag_name}_${index}`,
            text: datum.tag_name,
            select: false,
          };
        }),
      ];
    });

    setHashTag(result);
  }, [KeywordDetail]);

  return (
    <section className={classname}>
      <div className={styles.box}>
        <div className={styles.titleLayer}>
          <div className={styles.titleLayerTop}>
            <span className={styles.title}>해시태그 선택</span>
            <div className={styles.subTitle}>
              <span>단어수</span>
              <div className={styles.subTitleCount}>{hashTag.length}</div>
            </div>
          </div>
          <div className={styles.titleLayerBottom}>
            <span className={styles.helper}>
              ※「키워드분석」단계에서 분석된 블로그들의 해시태그들이 표시됩니다.
              하단에 표기될 해시태그들을 선택해주세요.
            </span>
          </div>
        </div>
        <div className={styles.contentLayer}>
          {hashTag.map((data) => (
            <span
              key={data.key}
              className={cx(styles.contentLayerText, data.select && 'on')}
              onClick={onClickHashTag(data.key)}
            >
              {data.text}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
