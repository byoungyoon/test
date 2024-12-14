import { motion } from "framer-motion";
import { ReactNode } from "react";
import FireL from "@/app/icons/timer/fire-on-l.svg";
import FireM from "@/app/icons/timer/fire-on-m.svg";
import FireH from "@/app/icons/timer/fire-on.svg";
import Action from "@/app/icons/timer/steamy-action.svg";
import Steamy from "@/app/icons/timer/steamy.svg";
import * as styles from "./customSteamy.css";

type Props = {
  children: ReactNode;
  fire: "h" | "m" | "l";
};

export default function CustomSteamy({ children, fire }: Props) {
  return (
    <div className={styles.layer()}>
      <div className={styles.steamy()}>
        <Steamy />
      </div>
      <div className={styles.icon()}>{children}</div>
      <div className={styles.action()}>
        <Action />
      </div>
      <motion.div className={styles.fire()} layoutId="fire">
        {fire === "h" && <FireH />}
        {fire === "m" && <FireM />}
        {fire === "l" && <FireL />}
      </motion.div>
    </div>
  );
}
