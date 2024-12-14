"use client";

import { useRouter } from "next/navigation";
import Back from "@/app/icons/timer/back.svg";
import * as styles from "./customBackAction.css";

export default function CustomBackAction() {
  const router = useRouter();

  const onClickBack = () => {
    router.back();
  };

  return (
    <div role="button" tabIndex={0} onClick={onClickBack} className={styles.layer()}>
      <Back />
    </div>
  );
}
