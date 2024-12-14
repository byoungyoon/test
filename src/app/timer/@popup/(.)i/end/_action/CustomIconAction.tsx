"use client";

import Sample from "@/app/icons/sample/sample1.svg";
import { useSelect } from "@/state/useTranslate";
import * as styles from "./customIconAction.css";

export default function CustomIconAction() {
  const { icon } = useSelect();

  return (
    <div className={styles.layer()}>
      <Sample />
    </div>
  );
}
