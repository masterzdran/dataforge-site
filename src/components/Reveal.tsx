"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

/** Scroll reveal wrapper. ponytail: one component covers every section */
export function Reveal({
  children,
  delay = 0,
  sx,
}: {
  children: ReactNode;
  delay?: number;
  sx?: object;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      style={sx}
    >
      {children}
    </motion.div>
  );
}
