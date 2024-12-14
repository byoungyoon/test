import * as styles from "./customContent.css";

type Props = {
  content: string;
};

export default function CustomContent({ content }: Props) {
  return <p className={styles.content()}>{content}</p>;
}
