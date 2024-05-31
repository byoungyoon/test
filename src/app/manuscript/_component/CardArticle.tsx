'use client';

import { useMutation } from '@tanstack/react-query';
import React, { useCallback, useEffect, useMemo, useState } from 'react';

import * as styles from './cardArticle.css';

import { FETCH_SCRAPED_DATA } from '@/hooks/general/query';

import KeywordAnalysisCard from '@/components/cards/KeywordAnalysisCard';

import { useStore } from '@/store/useStore';

import { postBlogKeywordMutate } from '@/app/manuscript/_lib/postBlogKeywordMutate';

export default function CardArticle() {
  const { KeywordDetail, selectDetailKeyword, setShuffleKeywords } = useStore();
  const [cardData, setCardData] = useState<Record<string, number>[]>([]);
  const [resultData, setResultData] = useState<Record<string, number>>({});

  const max = useMemo(() => {
    const result: Record<string, number> = {};

    cardData.forEach((data, index) => {
      if (!KeywordDetail[index].select) return;

      Object.keys(data).map((value) => {
        result[value] = result[value]
          ? result[value] + data[value]
          : data[value];
      });
    });

    return result;
  }, [cardData, KeywordDetail]);

  const { mutate: onAction, isPending } = useMutation({
    mutationKey: [FETCH_SCRAPED_DATA.FETCH_ALL_SCRAPED_BLOG_KEYWORDS_ANALYSIS],
    mutationFn: postBlogKeywordMutate,
    onSuccess: (response) => {
      const base: Record<string, number>[] = [];

      Object.values(response.part2_data.blog_wise_keyword).forEach((data) => {
        base.push(data);
      });

      setCardData(base);
    },
  });

  const onTrackableSelect = (key: string) => (value: number) => {
    const object = resultData;

    object[key] = value;
    setResultData(object);
    setShuffleKeywords(object);
  };

  const onDefault = useCallback(() => {
    const blogData = KeywordDetail.reduce((a, b, index) => {
      const key = `blog${index + 1}_text`;

      a[key] = b.blog.inner_data.blog_text;
      return a;
    }, {} as Record<string, string>);

    onAction({
      blog_data: blogData,
      keywords: selectDetailKeyword.join(','),
    });
  }, [onAction, KeywordDetail, selectDetailKeyword]);

  useEffect(() => {
    onDefault();
  }, [onDefault]);

  return (
    <article className={styles.cardArticle}>
      {isPending
        ? 'Loading...'
        : selectDetailKeyword.map((keyword, index) => (
            <KeywordAnalysisCard
              key={index}
              title={keyword}
              avg={max[keyword] / 3 || 0}
              max={max[keyword]}
              onTrackable={onTrackableSelect(keyword)}
            />
          ))}
    </article>
  );
}
