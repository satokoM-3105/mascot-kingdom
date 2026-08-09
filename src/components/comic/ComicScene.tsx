import { ReactNode } from "react";

/** 1場面ぶんの余白とセンター配置をまとめたラッパー。
 * tone="soft" のときだけごくうっすら地色を変え、スクロールで場面の区切りが
 * ゆるやかに伝わるようにする（罫線やカードの枠は使わない）。 */
export function ComicScene({
  children,
  tone = "cream",
  className,
}: {
  children: ReactNode;
  tone?: "cream" | "soft";
  className?: string;
}) {
  return (
    <section className={tone === "soft" ? "bg-white/50" : undefined}>
      <div
        className={`mx-auto flex max-w-sm flex-col items-center gap-5 px-6 py-14 sm:max-w-lg sm:gap-6 sm:py-20 ${className ?? ""}`}
      >
        {children}
      </div>
    </section>
  );
}
