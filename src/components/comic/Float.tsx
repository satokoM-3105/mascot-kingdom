"use client";

import { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

/** ぬいぐるみがゆっくり呼吸しているような、ごくわずかな上下の揺れ。
 * prefers-reduced-motion のときは揺らさない。 */
export function Float({
  children,
  className,
  range = 6,
  duration = 4.2,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  range?: number;
  duration?: number;
  delay?: number;
}) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      animate={{ y: [0, -range, 0] }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut", delay }}
    >
      {children}
    </motion.div>
  );
}
