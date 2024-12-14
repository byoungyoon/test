import CustomBackAction from "@/app/timer/i/_action/CustomBackAction";
import CustomMakeAction from "@/app/timer/i/_action/CustomMakeAction";
import CustomResetButtonAction from "@/app/timer/i/_action/CustomResetButtonAction";
import CustomStartButtonAction from "@/app/timer/i/_action/CustomStartButtonAction";
import CustomTimerAction from "@/app/timer/i/_action/CustomTimerAction";
import CustomTitleAction from "@/app/timer/i/_action/CustomTitleAction";
import * as styles from "./page.css";

export default function Page() {
  return (
    <section className={styles.section()}>
      <hgroup className={styles.hgroup()}>
        <div className={styles.backLayer()}>
          <CustomBackAction />
        </div>
        <CustomTitleAction />
      </hgroup>
      <article className={styles.tipLayer()}>tip</article>
      <article className={styles.timerLayer()}>
        <CustomTimerAction />
      </article>
      <article className={styles.makeLayer()}>
        <CustomMakeAction />
      </article>
      <article>불 tip</article>
      <div className={styles.buttonLayer()}>
        <CustomStartButtonAction />
        <CustomResetButtonAction />
      </div>
    </section>
  );
}
