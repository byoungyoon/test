'use client';

import cx from 'classnames';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ReactNode } from 'react';

import * as styles from './customFooter.css';

import icoKeywordNext from '@/../public/images/ico/ico_keyword_next.png';
import icoKeywordPrev from '@/../public/images/ico/ico_keyword_prev.png';

type Props = {
  children: ReactNode;

  isNext?: boolean;
  isNextDisabled?: boolean;
  nextUrl?: string;

  isPre?: boolean;
};

export default function CustomFooter({
  children,
  isNext,
  isNextDisabled = true,
  nextUrl = '',
  isPre,
}: Props) {
  const router = useRouter();

  const onClickBack = () => {
    router.back();
  };

  const onClickNext = () => {
    router.push(nextUrl);
  };

  return (
    <footer className={cx(styles.container, 'keyword')}>
      <button
        type='button'
        className={cx(styles.customButton, !isPre && 'open')}
        onClick={onClickBack}
        disabled={!isPre}
      >
        <Image src={icoKeywordPrev} alt='prev' />이 전
      </button>
      <div />
      {children}
      <button
        type='button'
        className={cx(
          styles.customButton,
          !isNext && 'open',
          !isNextDisabled && 'disabled'
        )}
        onClick={onClickNext}
        disabled={!isNextDisabled}
      >
        다 음
        <Image src={icoKeywordNext} alt='next' />
      </button>
    </footer>
  );
}
