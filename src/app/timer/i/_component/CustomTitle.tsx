import * as styles from "./customTitle.css";

type Props = {
  name: string;
};

export default function CustomTitle({ name }: Props) {
  return <h4 className={styles.title()}>{name}</h4>;
}
