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

      {/* 石が返事をする瞬間：星のまわりに淡い金色のグローが「ふわっ」と
          広がり、少し余韻を残して消える。星自体も一瞬だけ大きくなる。 */}
      {glow && (
        <motion.circle
          cx="43.8"
          cy="6.5"
          r="12"
          fill="var(--kingdom-beige)"
          style={{ filter: "blur(3.5px)" }}
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={
            reduceMotion
              ? { opacity: [0, 0.8, 0] }
              : { opacity: [0, 1, 0.6, 0], scale: [0.5, 1.2, 1.05, 0.85] }
          }
          viewport={{ once: true, amount: 0.6 }}
          transition={{
            duration: reduceMotion ? 1 : 2.2,
            times: reduceMotion ? [0, 0.5, 1] : [0, 0.5, 0.75, 1],
            ease: "easeOut",
          }}
        />
      )}

      {/* すきまからのぞく、小さな星のきざし（控えめな金） */}
      <motion.path
        d="M43.5 2.2 L44.6 5.1 L47.6 6.2 L44.6 7.3 L43.5 10.2 L42.4 7.3 L39.4 6.2 L42.4 5.1 Z"
        fill="var(--kingdom-beige)"
        opacity="0.95"
        initial={glow && !reduceMotion ? { scale: 1 } : undefined}
        whileInView={
          glow && !reduceMotion ? { scale: [1, 1.55, 1.05] } : undefined
        }
        viewport={glow ? { once: true, amount: 0.6 } : undefined}
        transition={
          glow ? { duration: 1.3, times: [0, 0.45, 1], ease: "easeOut" } : undefined
        }
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
