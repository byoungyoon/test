import * as styles from './keywordPanel.css';

import CustomInfo from '@/app/@panel/(.)keyword-analysis/panel/[index]/_component/CustomInfo';
import CustomKeywordIframe from '@/app/@panel/(.)keyword-analysis/panel/[index]/_component/CustomKeywordIframe';

type Props = {
  params: {
    index: number;
  };
};

export default function Page({ params }: Props) {
  return (
    <section className={styles.section}>
      <article className={styles.infoArticle}>
        <div className={styles.infoArticleOverflow}>
          <CustomInfo index={params.index} />
        </div>
      </article>
      <CustomKeywordIframe index={params.index} />
    </section>
  );
}
