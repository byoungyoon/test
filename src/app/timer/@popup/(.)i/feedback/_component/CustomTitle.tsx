import * as styles from "./customTitle.css";

type Props = {
  name: string;
};

export default function CustomTitle({ name }: Props) {
  return (
    <h3 className={styles.title()}>
      {name}의 '익힘정도'는 <br /> 어떠셨나요?
    </h3>
  );
}
