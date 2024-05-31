import Image from 'next/image';
import React from 'react';

import * as styles from './customPanel.css';

import { Icon } from '@/store/usePanel';

import { APP_IMAGES } from '@/constant/images';

type Props = {
  onTrackableClose: () => void;
  subIcons?: Icon[];
};

export default function CustomPanelHeader({
  onTrackableClose,
  subIcons = [],
}: Props) {
  return (
    <div className={styles.panelHeader}>
      <Image
        src={APP_IMAGES.blogClose}
        onClick={onTrackableClose}
        alt='close'
        width='16'
        height='16'
      />
      {subIcons.map((Icon, index) => (
        <Image
          key={index}
          src={Icon.icon}
          alt='subIcons'
          onClick={Icon.onTrackable}
          width={Icon.width ?? 16}
          height={Icon.height ?? 16}
        />
      ))}
    </div>
  );
}
