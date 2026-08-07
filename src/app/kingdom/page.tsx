"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { areas, getAreaById } from "@/data/areas";
import { getCharacterById } from "@/data/characters";
import { episode1 } from "@/data/story";
import { AreaId, Character } from "@/types/kingdom";
import { AreaHotspot } from "@/components/AreaHotspot";
import { StoryEntryBadge } from "@/components/StoryEntryBadge";
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
          <StoryEntryBadge
            onClick={() => setShowStory(true)}
            style={{ left: "79%", top: "4%" }}
          />
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
