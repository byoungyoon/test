import cx from 'classnames';
import { MRT_ColumnDef, MRT_RowSelectionState } from 'mantine-react-table';
import Image from 'next/image';
import React, { useMemo } from 'react';

import * as styles from './keywordAnalysisTable.css';
import * as themeStyles from '@/styles/theme.css';

import { BlogTagData, KEYWORD_TYPE } from '@/hooks/general/interface';

import CopyButton from '@/components/buttons/CopyButton';
import BaseTable from '@/components/tables/BaseTable';

import icoHashtag from '@/../public/images/ico/ico_hashtag.png';
import icoImage from '@/../public/images/ico/ico_image.png';
import icoVideo from '@/../public/images/ico/ico_video.png';
import { APP_IMAGES } from '@/constant/images';
import { KeywordDetailBlogTypes } from '@/model/KeywordDetail';
import { maintainKeywordAnalysisData } from '@/utils/transformData';

import icoBlogUrl from '~/images/ico/ico_blog_url.png';

function isValidBase64(str: string): boolean {
  try {
    return btoa(atob(str)) === str;
  } catch (err) {
    return false;
  }
}

interface Props {
  ScrapedPopularKeywordDetailedData: KeywordDetailBlogTypes[];
  handleSidePanelToggle: (index: number) => void;
  handleRowSelection: (rows: MRT_RowSelectionState) => void;
  keywordType: KEYWORD_TYPE.AIR | KEYWORD_TYPE.VIEW;
}

export default function KeywordAnalysisTable({
  ScrapedPopularKeywordDetailedData,
  handleSidePanelToggle,
  handleRowSelection,
}: Props) {
  const headerElement = (text: string) => {
    return <span className={styles.header}>{text}</span>;
  };

  const columns: MRT_ColumnDef<KeywordDetailBlogTypes>[] = useMemo(
    () => [
      {
        // accessorKey: 'ranking',
        header: '순위',
        Header: ({ column }) => headerElement(column.columnDef.header),
        Cell: ({ row }) => {
          return (
            <div className={styles.cellRank}>
              <span className={styles.cellRankIndex}>{row.index + 1}</span>
              {row.original.jisoo && (
                <span
                  className={
                    themeStyles.blogRankGrid[
                      row.original.jisoo.category.substring(0, 2)
                    ]
                  }
                >
                  {row.original.jisoo.category}
                </span>
              )}
            </div>
          );
        },
        size: 60,
      },
      {
        // accessorKey: 'blog_basic_info',
        header: '블로그 기본정보',
        Header: ({ column }) => headerElement(column.columnDef.header),
        Cell: ({ row }) => {
          const src =
            row.original.hostedImageUrl === ''
              ? APP_IMAGES.noImage
              : row.original.hostedImageUrl;

          const addSrc = isValidBase64(src) ? 'data:image/jpeg;base64,' : '';

          return (
            <div className={styles.callBasic}>
              <div className={styles.callBasicLayer.image}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={addSrc + src}
                  alt='blog_img'
                  width={70}
                  height={70}
                  onClick={() => handleSidePanelToggle(row.index)}
                />
              </div>
              <div className={styles.callBasicLayer.info}>
                <span className={styles.infoLayer.title}>
                  {row.original.blog.subject === '-'
                    ? 'N/A'
                    : row.original.blog.subject}
                </span>
                <div className={styles.infoLayer.count}>
                  <span>글자수</span>
                  <span className={styles.textGroup}>
                    <div className={cx(styles.textGrid, 'blue')} />
                    <span>
                      {row.original.blog.inner_data.char_count_including_spaces}
                    </span>
                  </span>
                  <span className={styles.textGroup}>
                    <div className={cx(styles.textGrid, 'red')} />
                    <span>
                      {row.original.blog.inner_data.char_count_excluding_spaces}
                    </span>
                  </span>
                </div>
                <div className={styles.infoLayer.subCount}>
                  <span className={styles.textGroup}>
                    <Image src={icoImage} alt='icon_image' />
                    <span>{row.original.blog.inner_data.no_of_images}</span>
                  </span>
                  <span className={styles.textGroup}>
                    <Image src={icoVideo} alt='icon_image' />
                    <span>{row.original.blog.inner_data.no_of_videos}</span>
                  </span>
                  <CopyButton
                    copy={row.original.blog.url}
                    icon={icoBlogUrl}
                    classname={styles.copyButton}
                  />
                </div>
              </div>
              <div className={styles.callBasicLayer.subInfo}>
                <span className={styles.subInfoLayer.date}>
                  {row.original.blog.inner_data.date}
                </span>
                <div className={styles.subInfoLayer.group}>
                  <div className={styles.textGroup}>
                    <div className={styles.subInfoLayer.grid}>ID</div>
                    <span>{row.original.blog.id}</span>
                  </div>
                  <div className={styles.textGroup}>
                    <div className={styles.subInfoLayer.grid}>방</div>
                    <span>{row.original.blog.visitants}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        },
        size: 120,
      },
      {
        // accessorKey: 'keyword_analysis',
        header: '키워드 분석',
        Header: ({ column }) => headerElement(column.columnDef.header),
        Cell: ({ row }) => {
          const keywordAnalysisKey =
            row.original.blog.inner_data.KeywordAnalysis;
          const newData = maintainKeywordAnalysisData(keywordAnalysisKey);

          return (
            <div className={styles.callAnalysis}>
              {newData &&
                newData.map((item, index) => (
                  <React.Fragment key={index}>
                    <div className={styles.callAnalysisLayer}>
                      <span>{item.label}</span>
                      <span>{item.count}</span>
                    </div>
                    <div className={styles.callAnalysisLayer}>
                      <span>{item.label}(붙)</span>
                      <span>{item.attached_count}</span>
                    </div>
                    <div className={styles.callAnalysisLayer}>
                      <span>{item.label}</span>
                      <span>{item.count}</span>
                    </div>
                    <div className={styles.callAnalysisLayer}>
                      <span>{item.label}(붙)</span>
                      <span>{item.attached_count}</span>
                    </div>
                  </React.Fragment>
                ))}
            </div>
          );
        },
        size: 500,
      },
      {
        // accessorKey: 'blog_hash',
        header: '하단 태그',
        Header: ({ column }) => headerElement(column.columnDef.header),
        Cell: ({ row }) => (
          <div className={styles.callHash}>
            <div className={styles.callHashLayer.title}>
              <Image src={icoHashtag} alt='hash' width={18} height={17} />
              <span>({row.original.blog.tag_data?.length || 0})</span>
            </div>
            <div className={styles.callHashLayer.list}>
              {row.original.blog.tag_data?.map(({ tag_name }: BlogTagData) => (
                <span key={tag_name}>{tag_name}</span>
              ))}
            </div>
          </div>
        ),
      },
    ],
    [handleSidePanelToggle]
  );

  return (
    <BaseTable
      columns={columns}
      rows={ScrapedPopularKeywordDetailedData}
      isRowSelectable={true}
      handleSelection={handleRowSelection}
    />
  );
}
