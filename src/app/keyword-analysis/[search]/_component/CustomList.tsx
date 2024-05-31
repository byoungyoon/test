'use client';

import { useQuery } from '@tanstack/react-query';
import cx from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import * as styles from './customList.css';

import { splitText } from '@/lib/utils';
import { KEYWORD_TYPE } from '@/hooks/general/interface';
import { FETCH_SCRAPED_DATA } from '@/hooks/general/query';

import { useStore } from '@/store/useStore';

import CustomImage from '@/app/_component/CustomImage';
import { getKeyword } from '@/app/keyword-analysis/[search]/_lib/getKeyword';
import { KeywordAirDataTypes, KeywordViewDataTypes } from '@/model/Keyword';

type AirProps = {
  data: KeywordAirDataTypes[];
};

function AirList({ data }: AirProps) {
  const [select, setSelect] = useState(-1);
  const { setKeyword } = useStore();

  const onClickCard = (index: number) => () => {
    setSelect(index);
    setKeyword(data[index].keyword);
  };

  return (
    <div className={styles.container.air}>
      {data.map((datum, index) => (
        <div
          key={index}
          className={cx(styles.card.air, select === index && 'select')}
          onClick={onClickCard(index)}
        >
          <CustomImage
            src={datum.article_data[0].image_url}
            alt='banner'
            width={160}
            height={160}
          />
          <div className={styles.layer.air}>
            <span className={styles.airLayerTitle}>{datum.keyword}</span>
            <div className={styles.articleImageGroup}>
              {datum.article_data.map(
                (articleDatum, index) =>
                  index < 3 && (
                    <CustomImage
                      src={articleDatum.image_url}
                      key={index}
                      alt='article'
                      width={30}
                      height={30}
                      className={styles.customImage}
                      isInner={articleDatum.image_url === ''}
                      innerClassName={styles.customNoImage}
                      outlineClassName={styles.customInnerImage}
                    />
                  )
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

type ViewProps = {
  data: KeywordViewDataTypes[];
};

function ViewList({ data }: ViewProps) {
  return (
    <div className={styles.container.view}>
      {data.map((datum, index) => (
        <div className={styles.card.view} key={index}>
          <span className={styles.viewLayerIndex}>{index + 1}</span>
          <Image src={datum.image_url} alt='thumbnail' width={80} height={80} />
          <div className={styles.layer.view}>
            <div className={styles.viewLayerTitle}>
              <span className='title'>{datum.blogger_name}</span>
              <span className='date'>{datum.date}</span>
            </div>
            <Link
              href={datum.blog_url ?? 'https://blog.naver.com'}
              target='_blank'
              className={styles.viewLayerSubTitle}
            >
              {splitText(datum.title, 25)}
            </Link>
            <span>{splitText(datum.description, 75)}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

type Props = {
  search: string;
};

export default function CustomList({ search }: Props) {
  const { data } = useQuery({
    queryKey: [
      FETCH_SCRAPED_DATA.FETCH_ALL_SCRAPED_POPULAR_TERM_IMAGES,
      search,
    ],
    queryFn: getKeyword,
    enabled: !!search,
    staleTime: 5 * 60 * 1000,
    gcTime: 5 * 60 * 1000 * 4,
  });

  if (!data) return <></>;

  if (data.keyword_type === KEYWORD_TYPE.AIR)
    return <AirList data={data.air_data} />;
  return <ViewList data={data.blog_data} />;
}
