"use client";

import { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

/** スクロールで画面に入ったら、ふわっと1回だけ現れる演出。
 * prefers-reduced-motion のときは動きなしで即表示する。 */
export function ScrollReveal({
  children,
  className,
  delay = 0,
  y = 22,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{
        duration: reduceMotion ? 0.01 : 0.7,
        delay: reduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
