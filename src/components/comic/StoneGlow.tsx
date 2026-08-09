"use client";

import { motion, useReducedMotion } from "framer-motion";

/** 石が返事をする瞬間の、淡い金色の光。画面に入ったら1回だけ
 * やわらかく広がって、1〜2秒ほどで自然に消える。 */
export function StoneGlow({ className }: { className?: string }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      aria-hidden
      className={`pointer-events-none absolute inset-0 rounded-full ${className ?? ""}`}
      style={{
        background:
          "radial-gradient(circle, rgba(232,201,160,0.85) 0%, rgba(184,201,168,0.45) 40%, rgba(184,201,168,0) 72%)",
      }}
      initial={{ opacity: 0, scale: 0.75 }}
      whileInView={
        reduceMotion
          ? { opacity: [0, 0.5, 0] }
          : { opacity: [0, 1, 0], scale: [0.75, 1.2, 1.35] }
      }
      viewport={{ once: true, amount: 0.6 }}
      transition={{
        duration: reduceMotion ? 1 : 1.9,
        times: [0, 0.3, 1],
        ease: "easeOut",
      }}
    />
  );
}
