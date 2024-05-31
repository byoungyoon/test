'use client';

import cx from 'classnames';
import Image, { StaticImageData } from 'next/image';
import React, { useCallback } from 'react';

import * as styles from './copyButton.css';

type Props = {
  copy: string;
  icon?: string | StaticImageData;
  classname?: string;
};

export default function CopyButton({ copy, icon, classname }: Props) {
  const copyUrl = useCallback(() => {
    navigator.clipboard.writeText(copy);
  }, [copy]);

  return (
    <button
      type='button'
      className={cx(classname, styles.copyButton)}
      onClick={copyUrl}
    >
      {icon && <Image src={icon} alt='copy_icon' width={14} height={14} />}
      <span>복사</span>
    </button>
  );
}
