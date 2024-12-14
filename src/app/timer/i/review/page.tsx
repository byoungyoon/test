import CustomCloseButtonAction from "@/app/timer/i/review/_action/CustomCloseButtonAction";
import CustomResultButtonAction from "@/app/timer/i/review/_action/CustomResultButtonAction";
import styles from "./page.module.css";

export default function Page() {
  return (
    <section className={styles.section}>
      <hgroup>
        <CustomCloseButtonAction />
        <p>리뷰 쓰기</p>
      </hgroup>
      <h3>사용 경험에 대해 알려주세요</h3>
      <article>
        <h4>편리성</h4>
      </article>
      <article>
        <h4>타이머 기능</h4>
      </article>
      <article>
        <h4>음성 가이드</h4>
      </article>
      <article>
        <h4>더 남기고 싶은 말이 있나요?</h4>
        <div></div>
      </article>
      <div className={styles.resultLayer}>
        <CustomResultButtonAction>작성 완료</CustomResultButtonAction>
      </div>
    </section>
  );
}
