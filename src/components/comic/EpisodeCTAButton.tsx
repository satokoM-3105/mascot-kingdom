"use client";

import Link from "next/link";
import { ReactNode } from "react";

/** ゲームの「クエスト開始」ではなく、物語の続きへそっと誘う導線。 */
export function EpisodeCTAButton({
  href,
  onNavigate,
  children,
}: {
  href: string;
  onNavigate?: () => void;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      onClick={onNavigate}
      className="inline-flex items-center gap-2 rounded-full border border-kingdom-green-deep/25 bg-gradient-to-r from-kingdom-green/60 to-kingdom-beige/50 px-7 py-3 text-sm font-semibold text-kingdom-navy shadow-sm transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-md active:scale-[0.98] sm:text-base"
    >
      {children}
      <span aria-hidden>→</span>
    </Link>
  );
}
