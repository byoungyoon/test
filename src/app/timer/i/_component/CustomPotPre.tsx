import { motion } from "framer-motion";
import { ReactNode } from "react";
import FireL from "@/app/icons/timer/fire-off-l.svg";
import FireM from "@/app/icons/timer/fire-off-m.svg";
import FireH from "@/app/icons/timer/fire-off.svg";
import Pot from "@/app/icons/timer/pot.svg";
import * as styles from "./customPotPre.css";

type Props = {
  children: ReactNode;
  fire: "h" | "m" | "l";
};

export default function CustomPotPre({ children, fire }: Props) {
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
