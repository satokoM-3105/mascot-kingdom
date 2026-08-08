"use client";

import { CSSProperties } from "react";
import { BookIcon } from "./BookIcon";

export function StoryEntryBadge({
  onClick,
  style,
  className,
}: {
  onClick: () => void;
  style?: CSSProperties;
  className?: string;
}) {
  return (
    <button
      onClick={onClick}
      aria-label="王国のおはなしを読む"
      style={style}
      className={`group relative flex items-center justify-center gap-3 rounded-2xl border-2 border-kingdom-ancient/40 bg-gradient-to-r from-kingdom-blue/30 via-white/95 to-kingdom-beige/40 px-5 py-3 shadow-md transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[0_10px_26px_rgba(156,143,166,0.4)] hover:brightness-105 active:scale-[0.98] ${className ?? ""}`}
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-kingdom-beige/50">
        <BookIcon className="h-5 w-5" />
      </span>
      <span className="flex flex-col items-start text-left">
        <span className="text-sm font-bold text-kingdom-navy sm:text-base">
          王国のおはなし
        </span>
        <span className="text-[11px] text-kingdom-navy/55">物語を読む</span>
      </span>
      <svg
        viewBox="0 0 12 12"
        className="absolute -right-1.5 -top-1.5 h-3 w-3 animate-pulse"
        aria-hidden
      >
        <path
          d="M6 0 L7 5 L12 6 L7 7 L6 12 L5 7 L0 6 L5 5 Z"
          fill="var(--kingdom-ancient)"
        />
      </svg>
    </button>
  );
}
