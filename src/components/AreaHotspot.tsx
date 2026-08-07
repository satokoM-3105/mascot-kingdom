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
  );
}
