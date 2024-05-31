import * as styles from './manuScriptPanel.css';

import CustomBoxGroupList from '@/app/@panel/(.)manuscript/panel/_component/CustomBoxGroupList';

export default function Page() {
  return (
    <section className={styles.container}>
      <div className={styles.overflow}>
        <CustomBoxGroupList />
      </div>
    </section>
  );
}
