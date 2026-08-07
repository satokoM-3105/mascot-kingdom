"use client";

import { Area } from "@/types/kingdom";

export function AreaPin({
  area,
  onSelect,
  showEventMark,
  onEventMarkClick,
}: {
  area: Area;
  onSelect: (id: Area["id"]) => void;
  showEventMark?: boolean;
  onEventMarkClick?: () => void;
}) {
  return (
    <div
      className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1"
      style={{ left: `${area.position.x}%`, top: `${area.position.y}%` }}
    >
      {showEventMark && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onEventMarkClick?.();
          }}
          aria-label="謎のできごと"
          className="absolute -right-2 -top-2 z-10 flex h-6 w-6 animate-pulse items-center justify-center rounded-full bg-white text-xs font-bold text-kingdom-navy shadow-md"
        >
          ？
        </button>
      )}
      <button
        onClick={() => onSelect(area.id)}
        className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-white shadow-md transition active:scale-95 sm:h-20 sm:w-20"
        style={{ backgroundColor: area.color }}
      >
        <span className="px-1 text-center text-[10px] font-bold leading-tight text-white drop-shadow sm:text-xs">
          {area.name}
        </span>
      </button>
    </div>
  );
}
