import { ReactNode } from "react";

/** 上下パディングのバリエーション。上下一括指定と個別指定を同じ要素に
 * 混在させるとどちらが効くかがTailwindの生成順に依存してしまうため、
 * 排他的なセットとして用意し、常にどれか1つだけを適用する。 */
const PADDING = {
  normal: "py-14 sm:py-20",
  /** 冒頭（タイトル〜最初のキャラクター登場）用に上だけ詰めたもの */
  compact: "pt-7 pb-14 sm:pt-9 sm:pb-20",
} as const;

/** 1場面ぶんの余白とセンター配置をまとめたラッパー。
 * tone="soft" のときだけごくうっすら地色を変え、スクロールで場面の区切りが
 * ゆるやかに伝わるようにする（罫線やカードの枠は使わない）。 */
export function ComicScene({
  children,
  tone = "cream",
  className,
  padding = "normal",
}: {
  children: ReactNode;
  tone?: "cream" | "soft";
  className?: string;
  padding?: keyof typeof PADDING;
}) {
  return (
    <section className={tone === "soft" ? "bg-white/50" : undefined}>
      <div
        className={`mx-auto flex max-w-sm flex-col items-center gap-5 px-6 sm:max-w-lg sm:gap-6 ${PADDING[padding]} ${className ?? ""}`}
      >
        {children}
      </div>
    </section>
  );
}
