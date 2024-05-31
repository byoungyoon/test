'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import * as styles from './customInfo.css';
import * as themeStyles from '@/styles/theme.css';

import { splitText, textExcludingSpaces } from '@/lib/utils';
import { INFLUENCER_TAG } from '@/hooks/general/interface';

import CopyButton from '@/components/buttons/CopyButton';

import { usePanel } from '@/store/usePanel';

import { APP_IMAGES } from '@/constant/images';
import { maintainKeywordAnalysisData } from '@/utils/transformData';

import icoBlogUrl from '~/images/ico/ico_blog_url.png';
import icoImage from '~/images/ico/ico_image.png';
import icoVideo from '~/images/ico/ico_video.png';

type Props = {
  index: number;
};

export default function CustomInfo({ index }: Props) {
  const { KeywordDetail } = usePanel();
  const data = KeywordDetail[index];

  const localData = {
    href: data.blog.url,
    url: data.blog.url,
    v_id: data.blog.id,
    v_count: data.blog?.visitants,
    subject: data.blog.subject,
    image_count: data.blog.inner_data.no_of_images,
    video_count: data.blog.inner_data.no_of_videos,
    // TODO 들어오는 날짜 형식이 달라서 format 지정 필요
    date: data.blog.inner_data.date,
    // TODO 해당하는 공백제거에서 오차가 발생함 (js로 임시로 해경)
    excluded_spaces: textExcludingSpaces(data.blog.inner_data.blog_text),
    included_spaces: data.blog.inner_data.char_count_including_spaces,
    keyword_analysis:
      maintainKeywordAnalysisData(data.blog.inner_data.KeywordAnalysis) || [],
    blog_text: data.blog.inner_data.blog_text,
    purified_data: data.blog.inner_data.purified_data,
    tag_data: data.blog.tag_data,
    jisoo: data.jisoo ? data.jisoo.category : '',
    isInfluencer: data.jisoo
      ? INFLUENCER_TAG[data.jisoo.influencer_tag as keyof typeof INFLUENCER_TAG]
      : undefined,
  };

  return (
    <>
      <div className={styles.layer.top}>
        <Link className={styles.text.url} href={localData.url} target='_blank'>
          {localData.url}
        </Link>
        {localData.isInfluencer === INFLUENCER_TAG.YES && (
          <Image
            width={22}
            height={16}
            src={APP_IMAGES.influencer}
            alt='influ'
          />
        )}
        <span
          className={themeStyles.blogRankGrid[localData.jisoo.substring(0, 2)]}
        >
          {localData.jisoo}
        </span>
      </div>
      <div className={styles.layer.info}>
        <div className={styles.infoGroup}>
          <span>ID</span>
          <span>:</span>
          <span>{localData.v_id === 'N/A' ? ' - ' : localData.v_id}</span>
        </div>
        <div className={styles.infoGroup}>
          <span>주제</span>
          <span>:</span>
          <span>{localData.subject}</span>
        </div>
        <div className={styles.infoImageGroup}>
          <div className={styles.infoSubImageGroup}>
            <Image src={icoImage} alt='image_icon' />
            <span>{localData.image_count}</span>
          </div>
          <div className={styles.infoSubImageGroup}>
            <Image src={icoVideo} alt='video_icon' />
            <span>{localData.video_count}</span>
          </div>
        </div>
        <div className={styles.infoGroup}>
          <span>작성일</span>
          <span>:</span>
          <span>{localData.date}</span>
        </div>
        <div className={styles.infoGroup}>
          <span>글자수</span>
          <span>:</span>
          <span>{`${localData.included_spaces}(공백포함) / ${localData.excluded_spaces}(공백제외)`}</span>
        </div>
        <div className={styles.infoGroup}>
          <span>방문자</span>
          <span>:</span>
          <span>{`${localData.v_count}명`}</span>
        </div>
      </div>
      <div className={styles.layer.tagKeyword}>
        <div>
          <div className={styles.text.title}>하단 태그</div>
          <div className={styles.listBox}>
            {localData.tag_data?.map(({ tag_name }, index) => (
              <span className={styles.tagInner} key={index}>
                {tag_name}
              </span>
            ))}
            {localData.tag_data.length === 0 && (
              <span className={styles.text.none}>
                하단 태그가 존재하지 않습니다.
              </span>
            )}
          </div>
        </div>
        <div>
          <div className={styles.text.title}>키워드 분석</div>
          <div className={styles.listBox}>
            {localData.keyword_analysis.map(
              ({ label, count, attached_count, sub_labels }, index) => (
                <div className={styles.keywordInner} key={index}>
                  <div className={styles.keywordInnerGroup}>
                    <span>{splitText(label, 16)}</span>
                    <span className={styles.keywordInnerGroupCount}>
                      {count}
                    </span>
                  </div>
                  <div className={styles.keywordInnerSubGroup}>
                    <div className={styles.keywordInnerGroup}>
                      <span>{splitText(label, 16)}(붙)</span>
                      <span className={styles.keywordInnerGroupCount}>
                        {attached_count}
                      </span>
                    </div>
                    {sub_labels.map((sub_label, index) => (
                      <span
                        key={index}
                        className={styles.keywordInnerSubGroupText}
                      >
                        {sub_label}
                      </span>
                    ))}
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
      <div className={styles.layer.posting}>
        <div className={styles.copyTitle}>
          가져온 포스팅 데이터
          <CopyButton
            copy={localData.blog_text}
            icon={icoBlogUrl}
            classname={styles.copyButton}
          />
        </div>
        <div className={styles.listBox}>{localData.blog_text}</div>
      </div>
      <div className={styles.layer.posting}>
        <div className={styles.copyTitle}>
          정제 된 데이터
          <CopyButton
            copy={localData.blog_text}
            icon={icoBlogUrl}
            classname={styles.copyButton}
          />
        </div>
        <div className={styles.listBox}>{localData.purified_data}</div>
      </div>
    </>
  );
}
