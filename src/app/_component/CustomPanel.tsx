'use client';

import { usePathname, useRouter } from 'next/navigation';
import { MouseEventHandler, ReactNode, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

import * as styles from './customPanel.css';

import { usePanel } from '@/store/usePanel';

import CustomPanelHeader from '@/app/_component/CustomPanelHeader';

type Props = {
  children: ReactNode;
};

export default function CustomPanel({ children }: Props) {
  const pathname = usePathname();
  const nodeRef = useRef(null);
  const router = useRouter();
  const { Icons } = usePanel();

  const onClickContainer = () => {
    router.back();
  };

  const onClickPanel: MouseEventHandler<HTMLElement> = (event) => {
    event.stopPropagation();
  };

  return (
    <CSSTransition
      in={pathname.includes('panel')}
      nodeRef={nodeRef}
      timeout={150}
      classNames={{
        enter: styles.PanelAnimation.enter,
        enterDone: styles.PanelAnimation.enterDone,
        exit: styles.PanelAnimation.exit,
      }}
      mountOnEnter
      unmountOnExit
    >
      <section className={styles.container} onClick={onClickContainer}>
        <article ref={nodeRef} className={styles.panel} onClick={onClickPanel}>
          <CustomPanelHeader
            onTrackableClose={onClickContainer}
            subIcons={Icons}
          />
          <div className={styles.panelBody}>{children}</div>
        </article>
      </section>
    </CSSTransition>
  );
}
