"use client";

import { Area, Character } from "@/types/kingdom";
import { CharacterAvatar } from "./CharacterAvatar";

export function AreaPanel({
  area,
  residents,
  visitors,
  onSelectCharacter,
  onClose,
}: {
  area: Area;
  residents: Character[];
  visitors: Character[];
  onSelectCharacter: (c: Character) => void;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-40 flex items-end justify-center bg-kingdom-navy/30 sm:items-center"
      onClick={onClose}
    >
      <div
        className="w-full max-w-sm rounded-t-3xl bg-kingdom-cream p-6 shadow-xl sm:rounded-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-3 flex items-start justify-between">
          <div>
            <p className="text-lg font-bold text-kingdom-navy">{area.name}</p>
            <p className="text-xs text-kingdom-navy/60">{area.description}</p>
          </div>
          <button
            onClick={onClose}
            aria-label="閉じる"
            className="rounded-full bg-white/70 px-3 py-1 text-sm text-kingdom-navy shadow-sm"
          >
            閉じる
          </button>
        </div>

        {residents.length === 0 && visitors.length === 0 ? (
          <p className="py-4 text-sm text-kingdom-navy/60">
            ここには、まだ知られている住人がいないようです。
          </p>
        ) : (
          <div className="space-y-4">
            {residents.length > 0 && (
              <div className="flex flex-wrap gap-4">
                {residents.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => onSelectCharacter(c)}
                    className="flex flex-col items-center gap-1"
                  >
                    <CharacterAvatar character={c} size={56} />
                    <span className="text-xs text-kingdom-navy">{c.name}</span>
                  </button>
                ))}
              </div>
            )}

            {visitors.length > 0 && (
              <div>
                <p className="mb-2 text-xs text-kingdom-navy/50">
                  ときどき訪れる
                </p>
                <div className="flex flex-wrap gap-4">
                  {visitors.map((c) => (
                    <button
                      key={c.id}
                      onClick={() => onSelectCharacter(c)}
                      className="flex flex-col items-center gap-1"
                    >
                      <CharacterAvatar character={c} size={56} />
                      <span className="text-xs text-kingdom-navy">
                        {c.name}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
