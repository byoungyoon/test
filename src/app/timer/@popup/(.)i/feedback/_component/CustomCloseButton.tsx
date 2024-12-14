import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import * as styles from "./customCloseButton.css";

export default function CustomCloseButton(
  props: DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
) {
  const { children, ...rest } = props;

  return (
    <button type="button" className={styles.button()} {...rest}>
      {children}
    </button>
  );
}
