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
    <main className="relative flex min-h-[100dvh] flex-col bg-kingdom-cream sm:block sm:min-h-screen">
      <header className="flex items-center justify-between px-5 py-4">
        <Link href="/" className="text-sm text-kingdom-navy/60">
          ← 王国の入口
        </Link>
        <p className="text-sm font-bold text-kingdom-navy">マスコット王国マップ</p>
        <span className="w-16" />
      </header>

      {/* ヘッダーは常に最上部に固定し、マップ以下だけを残り領域の中で
          縦方向に中央寄せする（スマホで内容が画面上部に偏るのを防ぐ）。 */}
      <div className="flex flex-1 flex-col justify-center sm:block">
        {/* PCでは地図の外・右上に独立したCTAとして配置する。
            エリアのタップ領域が地図全体をほぼ覆っているため、
            地図の中に置くとどこでも地名やクリック領域と重なってしまうため。 */}
        {!storySeen && (
          <div className="mx-auto hidden w-full max-w-3xl justify-end pb-3 sm:flex">
            <StoryEntryBadge onClick={() => setShowStory(true)} />
          </div>
        )}

        <div className="relative mx-auto aspect-[3/2] w-full max-w-3xl overflow-hidden rounded-3xl border border-white/60 shadow-inner sm:aspect-[1672/941]">
          {/* 画像とタップ領域は常にマップ画像本来の縦横比を保ったまま中央配置し、
              スマホでは左右がoverflow-hiddenで切れることで縦の表示領域を稼ぐ。
              areaのhitAreaはこの内側要素基準の%のため、切れてもタップ位置はズレない。 */}
          <div
            className="absolute left-1/2 top-0 h-full -translate-x-1/2"
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
          </div>
        </div>

        {!storySeen && (
          <div className="mx-auto mt-4 flex w-full max-w-2xl justify-center px-6 sm:hidden">
            <StoryEntryBadge
              onClick={() => setShowStory(true)}
              className="w-[85%] max-w-sm"
            />
          </div>
        )}

        <p className="mx-auto max-w-2xl px-6 pb-8 pt-3 text-center text-xs text-kingdom-navy/50 sm:pb-4 sm:pt-4">
          エリアをタップすると、住んでいる住人がわかります。
        </p>
      </div>

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
