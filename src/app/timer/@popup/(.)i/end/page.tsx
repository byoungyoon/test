import Bg from "@/app/icons/end/bg.svg";
import CustomContentAction from "@/app/timer/@popup/(.)i/end/_action/CustomContentAction";
import CustomIconAction from "@/app/timer/@popup/(.)i/end/_action/CustomIconAction";
import CustomResultButtonAction from "@/app/timer/@popup/(.)i/end/_action/CustomResultButtonAction";
import CustomTitleAction from "@/app/timer/@popup/(.)i/end/_action/CustomTitleAction";
import * as styles from "./page.css";

export default function Page() {
  return (
    <section className={styles.section()}>
      <article className={styles.imageLayer()}>
        <Bg />
        <CustomIconAction />
      </article>
      <article className={styles.contentLayer()}>
        <div className={styles.titleLayer()}>
          <CustomTitleAction />
        </div>
        <CustomContentAction />
      </article>
      <div className={styles.buttonLayer()}>
        <CustomResultButtonAction />
      </div>
    </section>
  );
}
