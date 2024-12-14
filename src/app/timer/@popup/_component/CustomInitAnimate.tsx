"use client";

import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode, useMemo } from "react";

const variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

type Props = {
  children: ReactNode;
};

export default function CustomInitAnimate({ children }: Props) {
  const pathname = usePathname();
  const endPoint = useMemo(() => pathname.endsWith("end") || pathname.endsWith("feedback"), [pathname]);

  return (
    <AnimatePresence>
      {endPoint && (
        <motion.div
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.3)",
            zIndex: 99,
          }}
        >
          <motion.div
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
