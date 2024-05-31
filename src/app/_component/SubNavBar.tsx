'use client';

import cx from 'classnames';
import { usePathname, useRouter } from 'next/navigation';

import * as styles from './subNavBar.css';

import { subNavTabList } from '@/constant/list';
import { SUB_MENU_STATUS } from '@/constant/status';

export default function SubNavBar() {
  const router = useRouter();
  const pathname = usePathname();

  const isOn = (target: string[]) => {
    return target.some((value) => pathname.includes(value));
  };

  const handleSubTabClick = (id: string, path: string) => () => {
    // 막혀있는 원고생성, 원고분석
    if (
      id === SUB_MENU_STATUS.MANUSCRIPT ||
      id === SUB_MENU_STATUS.MANUSCRIPT_ANALYSIS
    )
      return;

    router.push(path);
  };

  return (
    <ul className={styles.menu}>
      <li className={styles.menuItem}>
        {subNavTabList.map((tab) => (
          <span
            key={tab.id}
            className={cx(isOn(tab.target) && styles.on, styles.menuItemText)}
            onClick={handleSubTabClick(tab.id, tab.path)}
          >
            {tab.name}
          </span>
        ))}
      </li>
    </ul>
  );
}
