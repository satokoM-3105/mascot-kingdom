"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ScrollReveal } from "./ScrollReveal";

function MarkGlyphBefore() {
  return (
    <svg viewBox="0 0 72 72" className="h-20 w-20 sm:h-24 sm:w-24" fill="none">
      <circle cx="36" cy="36" r="26" stroke="var(--kingdom-ancient)" strokeWidth="2.5" />
      <path
        d="M22 36c4-10 10-14 14-10s2 12-4 14-12-2-8-8"
        stroke="var(--kingdom-ancient)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="26" cy="24" r="2" fill="var(--kingdom-ancient)" />
      <circle cx="46" cy="26" r="2" fill="var(--kingdom-ancient)" />
    </svg>
  );
}

export function MarkGlyphAfter({ glow = false }: { glow?: boolean }) {
  const reduceMotion = useReducedMotion();

  return (
    <svg viewBox="0 0 72 72" className="h-20 w-20 sm:h-24 sm:w-24 overflow-visible" fill="none">
      {/* 開き始めた円。上部にはっきりしたすきまがある */}
      <circle
        cx="36"
        cy="36"
        r="26"
        stroke="var(--kingdom-ancient)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeDasharray="145 18"
        transform="rotate(-90 36 36)"
      />
      <path
        d="M22 36c4-10 10-14 14-10s2 12-4 14-12-2-8-8"
        stroke="var(--kingdom-ancient)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="26" cy="24" r="2" fill="var(--kingdom-ancient)" />
      <circle cx="46" cy="26" r="2" fill="var(--kingdom-ancient)" />
      {/* すきまからのぞく、小さな芽（控えめな緑） */}
      <path
        d="M30 3.2c2.6 1.6 2.8 5.3.4 7.8-2.6-1.6-2.8-5.3-.4-7.8z"
        fill="var(--kingdom-green)"
        stroke="var(--kingdom-green-deep)"
        strokeWidth="0.6"
        opacity="0.9"
      />

      {/* 石が返事をする瞬間：星が「パッ→ふわっ→消える」と発光する。
          拡大・バウンドはさせず、明るさ（不透明度）の変化だけで見せる。 */}
      {glow && (
        <>
          {/* ごく薄く広がる、周辺への反射光 */}
          <motion.circle
            cx="43.8"
            cy="6.5"
            r="22"
            fill="var(--kingdom-beige)"
            style={{ filter: "blur(8px)" }}
            initial={{ opacity: 0 }}
            whileInView={
              reduceMotion ? { opacity: 0.14 } : { opacity: [0, 0.2, 0.12, 0] }
            }
            viewport={{ once: true, amount: 0.6 }}
            transition={
              reduceMotion
                ? { duration: 0.3 }
                : { duration: 0.85, times: [0, 0.18, 0.55, 1], ease: "easeOut" }
            }
          />
          {/* 星のまわりに広がる、やわらかい金色のグロー */}
          <motion.circle
            cx="43.8"
            cy="6.5"
            r="10"
            fill="var(--kingdom-beige)"
            style={{ filter: "blur(3px)" }}
            initial={{ opacity: 0 }}
            whileInView={
              reduceMotion ? { opacity: 0.75 } : { opacity: [0, 1, 0.55, 0] }
            }
            viewport={{ once: true, amount: 0.6 }}
            transition={
              reduceMotion
                ? { duration: 0.3 }
                : { duration: 0.85, times: [0, 0.15, 0.55, 1], ease: "easeOut" }
            }
          />
          {/* 星の中心そのものが、やや強めの淡い金色で発光する */}
          <motion.circle
            cx="43.8"
            cy="6.5"
            r="4.2"
            fill="#FFE3A6"
            style={{ filter: "blur(1px)" }}
            initial={{ opacity: 0 }}
            whileInView={
              reduceMotion ? { opacity: 0.9 } : { opacity: [0, 1, 0.65, 0] }
            }
            viewport={{ once: true, amount: 0.6 }}
            transition={
              reduceMotion
                ? { duration: 0.3 }
                : { duration: 0.75, times: [0, 0.13, 0.5, 1], ease: "easeOut" }
            }
          />
        </>
      )}

      {/* すきまからのぞく、小さな星のきざし（控えめな金） */}
      <path
        d="M43.5 2.2 L44.6 5.1 L47.6 6.2 L44.6 7.3 L43.5 10.2 L42.4 7.3 L39.4 6.2 L42.4 5.1 Z"
        fill="var(--kingdom-beige)"
        opacity="0.95"
      />
      <circle cx="48.5" cy="10.8" r="0.9" fill="var(--kingdom-beige)" opacity="0.85" />
    </svg>
  );
}

function MarkTile({ label, glyph, delay = 0 }: { label: string; glyph: React.ReactNode; delay?: number }) {
  return (
    <ScrollReveal delay={delay} className="flex flex-1 flex-col items-center gap-3">
      <div className="flex h-28 w-28 items-center justify-center rounded-full border border-white/70 bg-gradient-to-b from-white/80 to-kingdom-beige/40 shadow-sm sm:h-32 sm:w-32">
        {glyph}
      </div>
      <p className="text-sm font-medium text-kingdom-ink/90 sm:text-base">{label}</p>
    </ScrollReveal>
  );
}

/** 「昨日の模様」と「今日の模様」を、これまでより大きく・比較しやすく見せる。 */
export function MarkComparisonBig({
  beforeLabel,
  afterLabel,
}: {
  beforeLabel: string;
  afterLabel: string;
}) {
  return (
    <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-6">
      <MarkTile label={beforeLabel} glyph={<MarkGlyphBefore />} />
      <span className="text-xl text-kingdom-navy/40 sm:mt-8">→</span>
      <MarkTile label={afterLabel} glyph={<MarkGlyphAfter />} delay={0.15} />
    </div>
  );
}
