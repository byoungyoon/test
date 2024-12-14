import * as styles from "./customTitle.css";

type Props = {
  title: string;
};
export default function CustomTitle({ title }: Props) {
  return <h3 className={styles.title()}>{title}</h3>;
}
