'use client';

import cx from 'classnames';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';

import * as styles from './navBar.css';

import { topNavTabList } from '@/constant/list';

import logoutIcon from '~/images/ico/logout.png';

export default function NavBar() {
  const pathname = usePathname();
  const router = useRouter();

  const isOn = (target: string[]) => {
    return target.some((value) => pathname.includes(value));
  };

  const handleMainTabClick = (id: number, path: string) => () => {
    // 막혀있는 작업관리 메뉴
    if (id === 1) return;

    router.push(path);
  };

  return (
    <ul className={styles.menu}>
      {topNavTabList.map((tab) => (
        <li
          key={tab.id}
          className={cx(isOn(tab.target) && styles.on, styles.menuItem)}
          onClick={handleMainTabClick(tab.id, tab.path)}
        >
          {tab.name}
        </li>
      ))}
      <li className={styles.logout}>
        <span>로그아웃</span>
        <Image className={styles.logoutImage} src={logoutIcon} alt='logout' />
      </li>
    </ul>
  );
}
