"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { areas, getAreaById } from "@/data/areas";
import { getCharacterById } from "@/data/characters";
import { episode1 } from "@/data/story";
import { AreaId, Character } from "@/types/kingdom";
import { AreaHotspot } from "@/components/AreaHotspot";
import { MarkIcon } from "@/components/MarkIcon";
import { AreaPanel } from "@/components/AreaPanel";
import { CharacterCard } from "@/components/CharacterCard";
import { StoryModal } from "@/components/StoryModal";

const MAP_IMAGE_WIDTH = 1672;
const MAP_IMAGE_HEIGHT = 941;

export default function KingdomPage() {
  const [selectedAreaId, setSelectedAreaId] = useState<AreaId | null>(null);
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(
    null
  );
  const [showStory, setShowStory] = useState(false);
  const [storySeen, setStorySeen] = useState(false);

  const selectedArea = selectedAreaId ? getAreaById(selectedAreaId) : null;

  return (
    <main className="relative min-h-screen bg-kingdom-cream">
      <header className="flex items-center justify-between px-5 py-4">
        <Link href="/" className="text-sm text-kingdom-navy/60">
          ← 王国の入口
        </Link>
        <p className="text-sm font-bold text-kingdom-navy">マスコット王国マップ</p>
        <span className="w-16" />
      </header>

      <div
        className="relative mx-auto w-full max-w-3xl overflow-hidden rounded-3xl border border-white/60 shadow-inner"
        style={{ aspectRatio: `${MAP_IMAGE_WIDTH} / ${MAP_IMAGE_HEIGHT}` }}
      >
        <Image
          src="/images/kingdom-map.png"
          alt="マスコット王国マップ"
          fill
          priority
          className="object-cover"
          sizes="(min-width: 768px) 768px, 100vw"
        />

        {areas.map((area) => (
          <AreaHotspot key={area.id} area={area} onSelect={setSelectedAreaId} />
        ))}

        {!storySeen && (
          <button
            onClick={() => setShowStory(true)}
            aria-label="古代の丘のしるしを確かめる"
            className="absolute flex -translate-y-1/2 items-center gap-1 rounded-full bg-white/95 px-2.5 py-1.5 text-[10px] font-bold text-kingdom-navy shadow-md transition active:scale-95 sm:gap-1.5 sm:px-3 sm:py-2 sm:text-xs"
            style={{ right: "3%", top: "8%" }}
          >
            <span className="relative flex h-3.5 w-3.5 items-center justify-center sm:h-4 sm:w-4">
              <MarkIcon className="h-full w-full" />
              <span className="absolute -right-0.5 -top-0.5 h-1.5 w-1.5 animate-pulse rounded-full bg-kingdom-ancient" />
            </span>
            しるし
          </button>
        )}
      </div>

      <p className="mx-auto max-w-2xl px-6 py-4 text-center text-xs text-kingdom-navy/50">
        エリアをタップすると、住んでいる住人がわかります。
      </p>

      {selectedArea && (
        <AreaPanel
          area={selectedArea}
          residents={selectedArea.residentIds
            .map(getCharacterById)
            .filter((c): c is Character => Boolean(c))}
          visitors={(selectedArea.visitorIds ?? [])
            .map(getCharacterById)
            .filter((c): c is Character => Boolean(c))}
          onSelectCharacter={setSelectedCharacter}
          onClose={() => setSelectedAreaId(null)}
        />
      )}

      {selectedCharacter && (
        <CharacterCard
          character={selectedCharacter}
          onClose={() => setSelectedCharacter(null)}
        />
      )}

      {showStory && (
        <StoryModal
          story={episode1}
          onClose={() => {
            setShowStory(false);
            setStorySeen(true);
          }}
        />
      )}
    </main>
  );
}
