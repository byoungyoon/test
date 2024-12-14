import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import styles from "./customResultButton.module.css";

export default function CustomResultButton(
  props: DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
) {
  const { children, ...rest } = props;

  return (
    <button type="button" className={styles.result} {...rest}>
      {children}
    </button>
  );
}
