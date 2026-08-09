"use client";

import { CSSProperties } from "react";
import { motion, useReducedMotion } from "framer-motion";

/** マロンの胸の星が、ふっと一瞬きらめく演出（控えめ）。 */
export function ChestSparkle({ style }: { style?: CSSProperties }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.svg
      viewBox="0 0 24 24"
      className="pointer-events-none absolute h-4 w-4 sm:h-5 sm:w-5"
      style={style}
      initial={{ opacity: 0.35, scale: 0.9 }}
      animate={
        reduceMotion
          ? { opacity: 0.6 }
          : { opacity: [0.35, 1, 0.35], scale: [0.9, 1.15, 0.9] }
      }
      transition={{ duration: 2.4, repeat: reduceMotion ? 0 : Infinity, ease: "easeInOut" }}
    >
      <path d="M12 0 L14 10 L24 12 L14 14 L12 24 L10 14 L0 12 L10 10 Z" fill="var(--kingdom-beige)" />
    </motion.svg>
  );
}
