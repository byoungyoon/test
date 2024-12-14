import { motion } from "framer-motion";
import { ReactNode } from "react";
import FireL from "@/app/icons/timer/fire-on-l.svg";
import FireM from "@/app/icons/timer/fire-on-m.svg";
import FireH from "@/app/icons/timer/fire-on.svg";
import Pot from "@/app/icons/timer/pot-after.svg";
import * as styles from "./customPot.css";

type Props = {
  children: ReactNode;
  fire: "h" | "m" | "l";
};

export default function CustomPot({ children, fire }: Props) {
  return (
    <div className={styles.layer()}>
      <div className={styles.pot()}>
        <Pot />
      </div>
      <div className={styles.icon()}>{children}</div>
      <motion.div className={styles.fire()} layoutId="fire">
        {fire === "h" && <FireH />}
        {fire === "m" && <FireM />}
        {fire === "l" && <FireL />}
      </motion.div>
    </div>
  );
}
