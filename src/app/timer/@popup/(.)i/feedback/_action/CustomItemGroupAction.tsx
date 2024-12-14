"use client";

import CustomItem from "@/app/timer/@popup/(.)i/feedback/_component/CustomItem";
import { useFeedback } from "@/state/useTranslate";
import * as styles from "./customitemGroupAction.css";

export default function CustomItemGroupAction() {
  const { type, setType } = useFeedback();

  const onClickItem = (key: "g" | "m" | "b") => () => {
    setType(key);
  };

  return (
    <div className={styles.group()}>
      <CustomItem type="g" isSelect={type === "g"} onClick={onClickItem("g")} />
      <CustomItem type="m" isSelect={type === "m"} onClick={onClickItem("m")} />
      <CustomItem type="b" isSelect={type === "b"} onClick={onClickItem("b")} />
    </div>
  );
}
