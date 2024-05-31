'use client';

import cx from 'classnames';
import { MRT_ColumnDef } from 'mantine-react-table';
import Image from 'next/image';
import React, { useMemo } from 'react';

import * as styles from './blogTable.css';

import BaseTable from '@/components/tables/BaseTable';

import icoInfluencer from '@/../public/images/ico/ico_influencer.png';
import { AREA, BlogTypes, JISOO } from '@/model/Blog';

interface Props {
  scrapedBlogs: BlogTypes[];
  handleSidePanelToggle: (currentIndex: number) => void;
}

const BlogTable = ({ scrapedBlogs, handleSidePanelToggle }: Props) => {
  const headerElement = (text: string) => {
    return <span className={styles.header}>{text}</span>;
  };

  const columns: MRT_ColumnDef<BlogTypes>[] = useMemo(
    () => [
      {
        accessorKey: 'rank',
        header: '순위',
        Header: ({ column }) => headerElement(column.columnDef.header),
        Cell: ({ renderedCellValue }) => <>{renderedCellValue}</>,
        size: 40,
      },
      {
        accessorKey: 'area',
        header: '영역',
        enableSorting: false,
        Header: ({ column }) => headerElement(column.columnDef.header),
        Cell: ({ renderedCellValue }) => (
          <span
            className={cx('type', [
              renderedCellValue === AREA.POST && 'post',
              renderedCellValue === AREA.BLOG && '',
              renderedCellValue === AREA.CAFE && 'cafe',
            ])}
          >
            {renderedCellValue}
          </span>
        ),
        size: 40,
      },
      {
        accessorKey: 'title',
        header: '제목',
        Header: ({ column }) => headerElement(column.columnDef.header),
        Cell: ({ row, renderedCellValue }) => (
          // Cell: ({ row, renderedCellValue }) => (
          <span
            className={cx('txt_tt')}
            onClick={() => handleSidePanelToggle(row.index)} // Pass index along with hre
          >
            {renderedCellValue}
          </span>
        ),
        mantineTableBodyCellProps: {
          align: 'left',
        },
        size: 350,
      },
      {
        accessorKey: 'subject',
        header: '주제',
        Header: ({ column }) => headerElement(column.columnDef.header),
        Cell: ({ renderedCellValue }) => <>{renderedCellValue}</>,
        size: 50,
      },
      {
        accessorKey: 'id',
        header: 'ID/블로그명',
        Header: ({ column }) => headerElement(column.columnDef.header),
        Cell: ({ renderedCellValue, row }) => (
          <>
            <span className='blog_id'>{renderedCellValue}</span>
            <span className='blog_tt'>{row.original.blog_name}</span>
          </>
        ),
        size: 50,
      },
      {
        name: 'infl',
        header: '인플',
        Header: ({ column }) => headerElement(column.columnDef.header),
        Cell: ({ row }) => (
          <>
            {row.original.is_influencer && (
              <Image src={icoInfluencer} alt='influencer' />
            )}
          </>
        ),
        size: 50,
      },
      {
        accessorKey: 'visitants',
        header: '방문자',
        Header: ({ column }) => headerElement(column.columnDef.header),
        Cell: ({ renderedCellValue }) => <>{renderedCellValue}</>,
        size: 50,
      },
      {
        header: '지수',
        Header: ({ column }) => headerElement(column.columnDef.header),
        Cell: ({ row }) =>
          row.original.jisoo ? (
            <span
              className={cx(
                'blog_rbox',
                row.original.jisoo.category.slice(0, -1) === JISOO.HIGH
                  ? 'ql_high'
                  : row.original.jisoo.category.slice(0, -1) === JISOO.BEST
                  ? 'ql_best'
                  : ''
              )}
            >
              {row.original.jisoo?.category}
            </span>
          ) : (
            <></>
          ),
        size: 50,
      },
      {
        accessorKey: 'date',
        header: '작성일',
        Header: ({ column }) => headerElement(column.columnDef.header),
        Cell: ({ renderedCellValue }) => <>{renderedCellValue}</>,
        size: 50,
      },
    ],
    [handleSidePanelToggle]
  );

  return (
    <BaseTable columns={columns} rows={scrapedBlogs} isRowSelectable={false} />
  );
};

export default React.memo(BlogTable);
