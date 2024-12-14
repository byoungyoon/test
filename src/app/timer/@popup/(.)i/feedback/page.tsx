import CustomCloseButtonAction from "@/app/timer/@popup/(.)i/feedback/_action/CustomCloseButtonAction";
import CustomItemGroupAction from "@/app/timer/@popup/(.)i/feedback/_action/CustomItemGroupAction";
import CustomResultButtonAction from "@/app/timer/@popup/(.)i/feedback/_action/CustomResultButtonAction";
import CustomTitleAction from "@/app/timer/@popup/(.)i/feedback/_action/CustomTitleAction";
import * as styles from "./page.css";

export default function Page() {
  return (
    <section className={styles.section()}>
      <CustomTitleAction />
      <article className={styles.itemLayer()}>
        <CustomItemGroupAction />
      </article>
      <article className={styles.buttonLayer()}>
        <CustomCloseButtonAction />
        <CustomResultButtonAction />
      </article>
    </section>
  );
}
