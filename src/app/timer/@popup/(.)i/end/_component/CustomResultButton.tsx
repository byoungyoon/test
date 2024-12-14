import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import * as styles from "./customResultButton.css";

export default function CustomResultButton(
  props: DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
) {
  const { children, ...rest } = props;

  return (
    <button type="button" className={styles.button()} {...rest}>
      {children}
    </button>
  );
}
