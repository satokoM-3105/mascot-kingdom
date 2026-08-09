"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { areas, getAreaById } from "@/data/areas";
import { getCharacterById } from "@/data/characters";
import { AreaId, Character } from "@/types/kingdom";
import { AreaHotspot } from "@/components/AreaHotspot";
import { AreaPanel } from "@/components/AreaPanel";
import { CharacterCard } from "@/components/CharacterCard";
import { ResidentsSection } from "@/components/ResidentsSection";

const MAP_IMAGE_WIDTH = 1672;
const MAP_IMAGE_HEIGHT = 941;

export default function KingdomPage() {
  const [selectedAreaId, setSelectedAreaId] = useState<AreaId | null>(null);
  // 「この場所の住人」欄はタップしたエリアの情報を表示し続ける。
  // モーダル（AreaPanel）を閉じても消えないよう、開閉は別状態で管理する。
  const [isAreaPanelOpen, setIsAreaPanelOpen] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(
    null
  );

  const selectedArea = selectedAreaId ? getAreaById(selectedAreaId) : null;
  const selectedResidents = selectedArea
    ? selectedArea.residentIds
        .map(getCharacterById)
        .filter((c): c is Character => Boolean(c))
    : [];
  const selectedVisitors = selectedArea
    ? (selectedArea.visitorIds ?? [])
        .map(getCharacterById)
        .filter((c): c is Character => Boolean(c))
    : [];

  return (
    <main className="relative bg-kingdom-cream sm:min-h-screen">
      <header className="flex items-center justify-between px-5 py-4">
        <Link href="/" className="text-sm text-kingdom-navy/60">
          ← 王国の入口
        </Link>
        <p className="text-sm font-bold text-kingdom-navy">マスコット王国マップ</p>
        <span className="w-16" />
      </header>

      {/* タイトル直下から自然に続く配置（画面内で縦中央寄せにはしない）。
          スマホはタイトル→マップの間隔を詰め、PCは元の余白のまま。 */}
      <div className="mt-2 sm:mt-0">
        <div className="relative mx-auto aspect-[3/2] w-full max-w-3xl overflow-hidden rounded-3xl border border-white/60 shadow-inner sm:aspect-[1672/941]">
          {/* 画像とタップ領域は常にマップ画像本来の縦横比を保ったまま中央配置する。
              スマホ（aspect-[3/2]）は左右がoverflow-hiddenで切れることで縦の
              表示領域を稼ぐが、PC（sm:aspect-[1672/941]）は内側要素の比率が
              外側と完全に一致するため切れる余地がなく、object-containも
              あわせて指定し画像全体が必ず収まるようにしている。
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
              className="object-cover sm:object-contain"
              sizes="(min-width: 768px) 768px, 100vw"
            />

            {areas.map((area) => (
              <AreaHotspot
                key={area.id}
                area={area}
                onSelect={(id) => {
                  setSelectedAreaId(id);
                  setIsAreaPanelOpen(true);
                }}
              />
            ))}
          </div>
        </div>

        <p className="mx-auto max-w-2xl px-6 pt-3 text-center text-xs text-kingdom-navy/50 sm:pt-4">
          エリアをタップすると、住んでいる住人や、その場所のお話がわかります。
        </p>

        <ResidentsSection
          area={selectedArea ?? null}
          residents={selectedResidents}
          visitors={selectedVisitors}
          onSelectCharacter={setSelectedCharacter}
        />
      </div>

      {isAreaPanelOpen && selectedArea && (
        <AreaPanel
          area={selectedArea}
          residents={selectedResidents}
          visitors={selectedVisitors}
          onSelectCharacter={setSelectedCharacter}
          onClose={() => setIsAreaPanelOpen(false)}
        />
      )}

      {selectedCharacter && (
        <CharacterCard
          character={selectedCharacter}
          onClose={() => setSelectedCharacter(null)}
        />
      )}
    </main>
  );
}
