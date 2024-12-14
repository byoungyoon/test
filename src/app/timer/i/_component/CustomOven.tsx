import { ReactNode } from "react";
import Action from "@/app/icons/timer/oven-action.svg";
import Oven from "@/app/icons/timer/oven.svg";
import * as styles from "./customOven.css";

type Props = {
  children: ReactNode;
};

export default function CustomOven({ children }: Props) {
  return (
    <div className={styles.layer()}>
      <Oven />
      <div className={styles.action()}>
        <Action />
      </div>
      <div className={styles.icon()}>{children}</div>
    </div>
  );
}
