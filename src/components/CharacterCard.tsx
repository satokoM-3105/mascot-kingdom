"use client";

import { Character } from "@/types/kingdom";
import { CharacterAvatar } from "./CharacterAvatar";

export function CharacterCard({
  character,
  onClose,
}: {
  character: Character;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-kingdom-navy/40 sm:items-center"
      onClick={onClose}
    >
      <div
        className="w-full max-w-sm rounded-t-3xl bg-kingdom-cream p-6 shadow-xl sm:rounded-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-4 flex items-start justify-between">
          <div className="flex items-center gap-3">
            <CharacterAvatar character={character} size={64} />
            <div>
              <p className="text-lg font-bold text-kingdom-navy">
                {character.name}
              </p>
              {character.species && (
                <p className="text-xs text-kingdom-navy/60">
                  {character.species}
                </p>
              )}
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="閉じる"
            className="rounded-full bg-white/70 px-3 py-1 text-sm text-kingdom-navy shadow-sm"
          >
            閉じる
          </button>
        </div>

        <p className="mb-3 text-sm font-medium text-kingdom-green-deep">
          {character.tagline}
        </p>

        <dl className="space-y-2 text-sm text-foreground">
          <Row label="性格" value={character.personality} />
          {character.likes && <Row label="好きなもの" value={character.likes} />}
          <Row label="住んでいる場所" value={character.home} />
        </dl>

        <blockquote className="mt-4 rounded-2xl bg-white/60 px-4 py-3 text-sm italic text-kingdom-navy">
          {character.quote}
        </blockquote>

        {character.note && (
          <p className="mt-3 text-xs leading-relaxed text-foreground/70">
            {character.note}
          </p>
        )}
      </div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex gap-2">
      <dt className="w-24 shrink-0 text-kingdom-navy/60">{label}</dt>
      <dd>{value}</dd>
    </div>
  );
}
