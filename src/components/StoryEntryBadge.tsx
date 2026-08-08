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
      aria-label="古代の丘のおはなしを見る"
      className={`group flex flex-col items-center ${className ?? ""}`}
      style={style}
    >
      <span className="relative flex items-center gap-1.5 rounded-2xl border border-kingdom-ancient/30 bg-white/95 px-3.5 py-2 shadow-md transition-all duration-200 ease-out group-hover:-translate-y-0.5 group-hover:scale-105 group-hover:shadow-[0_6px_18px_rgba(156,143,166,0.4)] sm:gap-2 sm:px-4 sm:py-2.5">
        <BookIcon className="h-4 w-4 shrink-0 sm:h-5 sm:w-5" />
        <span className="text-xs font-bold text-kingdom-navy sm:text-sm">
          おはなし
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
      </span>
      <span
        className="-mt-1.5 h-3 w-3 rotate-45 border-b border-r border-kingdom-ancient/30 bg-white/95"
        aria-hidden
      />
    </button>
  );
}
