"use client";

import { Area, Character } from "@/types/kingdom";
import { CharacterAvatar } from "./CharacterAvatar";

export function ResidentsSection({
  area,
  residents,
  visitors,
  onSelectCharacter,
}: {
  area: Area | null;
  residents: Character[];
  visitors: Character[];
  onSelectCharacter: (c: Character) => void;
}) {
  const characters = [...residents, ...visitors];

  return (
    <section className="mx-auto mt-2 w-full max-w-2xl px-6 pb-10 sm:max-w-3xl sm:pb-12">
      <h2 className="text-center text-sm font-bold text-kingdom-navy">
        この場所の住人
      </h2>

      {characters.length === 0 ? (
        <EmptyState
          hint={
            area
              ? "ここには、まだ知られている住人がいないようです。"
              : undefined
          }
        />
      ) : (
        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
          {characters.map((c) => (
            <ResidentCard
              key={c.id}
              character={c}
              onSelect={() => onSelectCharacter(c)}
            />
          ))}
        </div>
      )}
    </section>
  );
}

function EmptyState({ hint }: { hint?: string }) {
  return (
    <div className="relative mt-4 overflow-hidden rounded-3xl border border-white/60 bg-white/40 px-6 py-9 text-center">
      <LeafIcon className="absolute left-5 top-4 h-4 w-4 text-kingdom-green-deep/25" />
      <SparkleIcon className="absolute right-6 top-5 h-3 w-3 text-kingdom-ancient/30" />
      <PawIcon className="absolute bottom-5 left-10 h-4 w-4 text-kingdom-beige/50" />
      <SparkleIcon className="absolute bottom-6 right-9 h-2.5 w-2.5 text-kingdom-blue/35" />

      <p className="relative text-sm text-kingdom-navy/55">
        {hint ?? "気になる場所をタップすると、住人がここに現れます。"}
      </p>
    </div>
  );
}

function ResidentCard({
  character,
  onSelect,
}: {
  character: Character;
  onSelect: () => void;
}) {
  return (
    <div className="flex items-center gap-4 rounded-3xl border border-white/60 bg-white/50 px-4 py-4 shadow-sm sm:w-72 sm:flex-col sm:text-center">
      <CharacterAvatar character={character} size={64} />
      <div className="min-w-0 flex-1 sm:flex-none">
        <p className="text-sm font-bold text-kingdom-navy">{character.name}</p>
        <p className="mt-0.5 text-xs leading-relaxed text-kingdom-navy/60">
          {character.tagline}
        </p>
        <button
          onClick={onSelect}
          className="mt-2 rounded-full bg-kingdom-beige/40 px-3 py-1 text-xs font-bold text-kingdom-green-deep transition hover:bg-kingdom-beige/60"
        >
          詳しく見る
        </button>
      </div>
    </div>
  );
}

function LeafIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={className} aria-hidden fill="none">
      <path d="M2 14C2 7 7 2 14 2C14 9 9 14 2 14Z" fill="currentColor" />
      <path
        d="M3.5 12.5C6.5 9.5 9.5 6.5 12.5 3.5"
        stroke="white"
        strokeOpacity="0.35"
        strokeWidth="1"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SparkleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 12 12" className={className} aria-hidden>
      <path
        d="M6 0 L7 5 L12 6 L7 7 L6 12 L5 7 L0 6 L5 5 Z"
        fill="currentColor"
      />
    </svg>
  );
}

function PawIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={className} aria-hidden fill="currentColor">
      <ellipse cx="8" cy="11" rx="4" ry="3.2" />
      <circle cx="3.2" cy="6" r="1.6" />
      <circle cx="7" cy="4" r="1.6" />
      <circle cx="11" cy="4" r="1.6" />
      <circle cx="14" cy="6.2" r="1.4" />
    </svg>
  );
}
