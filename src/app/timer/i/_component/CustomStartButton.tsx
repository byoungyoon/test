import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import * as styles from "./customStartButton.css";

export default function CustomStartButton(
  props: DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
) {
  const { children, ...rest } = props;

  return (
    <button type="button" className={styles.button()} {...rest}>
      {children}
    </button>
  );
}
