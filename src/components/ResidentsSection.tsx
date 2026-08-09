"use client";

import Link from "next/link";
import { Area, AreaId, Character } from "@/types/kingdom";
import { CharacterAvatar } from "./CharacterAvatar";

/** エリアに紐づく物語。今は第1話「古代の丘のしるし」のみ。
 * 今後お話が増えたらここに追加する。 */
const AREA_STORIES: Partial<Record<AreaId, { title: string; href: string }>> = {
  "kodai-no-oka": { title: "第1話「古代の丘のしるし」", href: "/kingdom/episode-1" },
};

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
  const story = area ? AREA_STORIES[area.id] : undefined;

  return (
    <section className="mx-auto mt-2 w-full max-w-2xl px-6 pb-10 sm:max-w-3xl sm:pb-12">
      <div
        className={
          story
            ? "flex flex-col gap-8 sm:grid sm:grid-cols-2 sm:items-start sm:gap-6"
            : undefined
        }
      >
        <div>
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
        </div>

        {story && (
          <div>
            <h2 className="text-center text-sm font-bold text-kingdom-navy">
              この場所のお話
            </h2>
            <div className="mt-4 flex justify-center">
              <StoryLinkCard title={story.title} href={story.href} />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function StoryLinkCard({ title, href }: { title: string; href: string }) {
  return (
    <Link
      href={href}
      className="flex w-full max-w-xs items-center gap-3 rounded-3xl border border-kingdom-ancient/30 bg-gradient-to-r from-kingdom-blue/20 via-white/70 to-kingdom-beige/30 px-4 py-4 shadow-sm transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-md active:scale-[0.98]"
    >
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-kingdom-beige/50">
        <StoryBookIcon className="h-5 w-5" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-sm font-bold text-kingdom-navy">{title}</span>
        <span className="block text-xs text-kingdom-navy/55">タップして読む</span>
      </span>
      <span aria-hidden className="shrink-0 text-kingdom-navy/40">
        →
      </span>
    </Link>
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

export function StoryBookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <path
        d="M12 6.2c-1.9-1.5-4.3-2-6.5-1.7v13c2.2-0.3 4.6 0.2 6.5 1.7"
        stroke="var(--kingdom-ancient)"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 6.2c1.9-1.5 4.3-2 6.5-1.7v13c-2.2-0.3-4.6 0.2-6.5 1.7"
        stroke="var(--kingdom-ancient)"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M12 6.2v13" stroke="var(--kingdom-ancient)" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}
