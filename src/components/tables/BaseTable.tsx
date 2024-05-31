import {
  MantineReactTable,
  MRT_ColumnDef,
  MRT_RowSelectionState,
} from 'mantine-react-table';
import React, { useEffect, useState } from 'react';

interface IBaseTable<T extends object> {
  columns: MRT_ColumnDef<T>[];
  rows: T[];
  isRowSelectable: boolean;
}

interface IBaseTableRowTrue<T extends object> extends IBaseTable<T> {
  columns: MRT_ColumnDef<T>[];
  rows: T[];
  isRowSelectable: true;
  handleSelection: (data: MRT_RowSelectionState) => void;
}

interface IBaseTableRowFalse<T extends object> extends IBaseTable<T> {
  columns: MRT_ColumnDef<T>[];
  rows: T[];
  isRowSelectable: false;
}

export type BaseTableTypes<T extends object> =
  | IBaseTableRowTrue<T>
  | IBaseTableRowFalse<T>;

const BaseTable = <T extends object = object>(props: BaseTableTypes<T>) => {
  const { rows, columns, isRowSelectable } = props;

  const [rowSelection, setRowSelection] = useState<MRT_RowSelectionState>({});

  useEffect(() => {
    isRowSelectable && props.handleSelection(rowSelection);

    // eslint-disable-next-line
  }, [isRowSelectable, rowSelection]);

  return (
    <>
      <MantineReactTable
        columns={columns}
        data={rows}
        enableTopToolbar={false}
        enableColumnActions={false}
        enableSorting={false}
        enablePagination={false}
        enableRowSelection={isRowSelectable}
        enableSelectAll={false}
        displayColumnDefOptions={{
          'mrt-row-select': {
            header: '',
          },
        }}
        mantineSelectCheckboxProps={{
          color: '#229afc',
          sx: {
            width: '20px',
            cursor: 'pointer',
          },
          size: 'sm',
        }}
        mantinePaperProps={{
          shadow: 'lg',
          sx: {
            borderRadius: '8px',
            border: 'none !important',
            backgroundColor: '#fff',
            svg: {
              display: 'none',
            },
          },
        }}
        mantineTableHeadCellProps={{ align: 'center' }}
        mantineTableBodyCellProps={{ align: 'center' }}
        renderBottomToolbar={() => null}
        mantineTableProps={{
          className: 'tbl_viewList',
          highlightOnHover: true,
          sx: {
            'thead > tr': {
              backgroundColor: '#74889c',
            },
            'thead > tr > th': {
              padding: '12px 5px',
            },
            '.mantine-TableHeadCell-Content': {
              height: '100%',
              alignItems: 'center',
            },
          },
        }}
        onRowSelectionChange={setRowSelection}
        state={{ rowSelection: rowSelection }}
      />
    </>
  );
};

export default BaseTable;
