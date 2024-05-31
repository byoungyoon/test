import cx from 'classnames';
import { MRT_ColumnDef } from 'mantine-react-table';
import React, { useMemo } from 'react';

import * as styles from './relatedTermTable.css';

import BaseTable from '@/components/tables/BaseTable';

import { TYPE } from '@/model/Blog';
import { RelatedTypes } from '@/model/Related';

const tableStyles = {
  header:
    'th_txt text-[#fff] font-bold text-[15px] whitespace-nowrap text-ellipsis',
  cell: 'text-[#333]  font-normal text-[13px] leading-[18px] whitespace-nowrap text-ellipsis',
};

interface Props {
  scrapedRelatedTerms: RelatedTypes[];
}

export default function RelatedTermTable({ scrapedRelatedTerms }: Props) {
  const headerElement = (text: string) => {
    return <span className={styles.header}>{text}</span>;
  };

  const columns: MRT_ColumnDef<RelatedTypes>[] = useMemo(
    () => [
      {
        accessorKey: 'keyword',
        header: '키워드',
        Header: ({ column }) => headerElement(column.columnDef.header),
        Cell: ({ row, renderedCellValue }) => (
          <span
            className={cx(
              tableStyles.cell,
              'cursor-pointer pl-2.5 text-[#0064e0]',
              'txt_tt'
            )}
          >
            <a
              target='_blank'
              href={`https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=${row.original.keyword}`}
            >
              {renderedCellValue}
            </a>
          </span>
        ),
        size: 200,
        mantineTableBodyCellProps: {
          align: 'left',
        },
      },
      {
        accessorKey: 'type',
        header: '종류',
        Header: ({ column }) => headerElement(column.columnDef.header),
        Cell: ({ renderedCellValue }) => (
          <div className='flex items-center justify-center'>
            <span
              className={cx(
                tableStyles.cell,
                'type_keyword min-w-16 mx-auto rounded-md px-2 py-1 text-white',
                [
                  renderedCellValue === TYPE.ELSE && '',
                  renderedCellValue === TYPE.SEARCH && 'bgcol1',
                  renderedCellValue === TYPE.POPULAR && 'bgcol2',
                ]
              )}
            >
              {renderedCellValue}
            </span>
          </div>
        ),
        size: 50,
      },
      {
        accessorKey: 'search_intensity_pc',
        header: 'PC 검색량',
        Header: ({ column }) => headerElement(column.columnDef.header),
        Cell: ({ renderedCellValue }) => (
          <span className={tableStyles.cell}>
            {renderedCellValue?.toLocaleString()}
          </span>
        ),
        size: 50,
      },
      {
        accessorKey: 'search_intensity_mobile',
        header: 'Mobile 검색량',
        Header: ({ column }) => headerElement(column.columnDef.header),
        Cell: ({ renderedCellValue }) => (
          <span className={tableStyles.cell}>
            {renderedCellValue?.toLocaleString()}
          </span>
        ),
        size: 50,
      },
      {
        accessorKey: 'search_intensity_all',
        header: '총 검색량',
        Header: ({ column }) => headerElement(column.columnDef.header),
        Cell: ({ renderedCellValue }) => (
          <span className={tableStyles.cell}>
            {renderedCellValue?.toLocaleString()}
          </span>
        ),
        size: 50,
      },
    ],
    []
  );

  return (
    <BaseTable
      columns={columns}
      rows={scrapedRelatedTerms}
      isRowSelectable={false}
    />
  );
}
