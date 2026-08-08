"use client";

import { Area } from "@/types/kingdom";

export function AreaHotspot({
  area,
  onSelect,
}: {
  area: Area;
  onSelect: (id: Area["id"]) => void;
}) {
  return (
    <>
      <button
        onClick={() => onSelect(area.id)}
        aria-label={area.name}
        className="group absolute rounded-2xl transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        style={{
          left: `${area.hitArea.left}%`,
          top: `${area.hitArea.top}%`,
          width: `${area.hitArea.width}%`,
          height: `${area.hitArea.height}%`,
        }}
      >
        <span
          className="block h-full w-full rounded-2xl opacity-0 transition group-hover:opacity-25 group-active:opacity-35"
          style={{ backgroundColor: area.color }}
        />
      </button>

      {/* マップ画像に描き込まれたラベル文字はスマホでは小さく読みづらいため、
          その位置に読みやすいラベルを重ねて表示する（スマホのみ）。
          タップ判定には影響しないようpointer-events-noneにしている。 */}
      {area.labelPosition && (
        <span
          aria-hidden
          className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-kingdom-navy/75 px-2.5 py-1 text-[11px] font-bold text-white shadow-sm sm:hidden"
          style={{
            left: `${area.labelPosition.left}%`,
            top: `${area.labelPosition.top}%`,
          }}
        >
          {area.name}
        </span>
      )}
    </>
  );
}
