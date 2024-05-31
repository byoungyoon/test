import cx from 'classnames';
import * as React from 'react';
import '@/styles/globals.css.ts';

import '@/styles/style.css';
import * as styles from './root.css';
import { themeClass } from '@/styles/theme.css';

import CustomPanel from '@/app/_component/CustomPanel';
import NavBar from '@/app/_component/NavBar';
import SubNavBar from '@/app/_component/SubNavBar';
import { QCProvider } from '@/provider';

export default function RootLayout({
  children,
  panel,
}: {
  children: React.ReactNode;
  panel: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <QCProvider>
          <div className={styles.wrap}>
            <header className={styles.header}>
              <NavBar />
              <SubNavBar />
            </header>
            <main className={cx(styles.main, themeClass)}>
              {children}
              <CustomPanel>{panel}</CustomPanel>
            </main>
          </div>
        </QCProvider>
      </body>
    </html>
  );
}
