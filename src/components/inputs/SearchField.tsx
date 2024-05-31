import cx from 'classnames';
import Image from 'next/image';
import React from 'react';

import * as styles from './searchField.css';

import icoSearchMain from '@/../public/images/ico/ico_search_main.png';

interface SearchFieldProps {
  variant?: 'small' | 'large' | 'new';
  value?: string;
  handleFocus?: () => void;
  handleBlur?: () => void;
  handleValueChange?: (value: string) => void;
  handleEnterSubmit?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  handleClickSubmit?: () => void;
  isFetching?: boolean;
}

const SearchField = ({
  variant = 'small',
  value = '',
  handleFocus,
  handleBlur,
  handleValueChange = (value: string) => {
    value;
  },
  handleEnterSubmit = (event: React.KeyboardEvent<HTMLInputElement>) => {
    event;
  },
  handleClickSubmit = () => {
    value;
  },
  isFetching,
}: SearchFieldProps) => {
  return (
    <div
      data-fade={1}
      className={cx(styles.search, styles.searchVariant[variant])}
    >
      <ul className={styles.searchItemGroup}>
        <li className={cx('mainL', styles.searchItem)}>
          <span>NAVER</span>
        </li>
        <li className={cx('mainC', styles.searchItem)}>
          <input
            type='text'
            className='inp_search'
            value={value}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={(e) => handleValueChange(e.target.value)}
            placeholder='분석하실 키워드를 입력하세요.'
            onKeyDown={(e) => handleEnterSubmit(e)}
          />
        </li>
        <li
          className={cx('mainR', styles.searchItem)}
          onClick={handleClickSubmit}
        >
          {isFetching ? (
            <Image src={icoSearchMain} alt='' />
          ) : (
            <Image src={icoSearchMain} alt='' />
          )}
        </li>
      </ul>
    </div>
  );
};

export default React.memo(SearchField);
