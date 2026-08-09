"use client";

import Link from "next/link";
import { getCharacterById } from "@/data/characters";
import { episode1Comic } from "@/data/episode1Comic";
import { ComicScene } from "@/components/comic/ComicScene";
import { ScrollReveal } from "@/components/comic/ScrollReveal";
import { Float } from "@/components/comic/Float";
import { CharacterFigure } from "@/components/comic/CharacterFigure";
import { ComicDialogueLine } from "@/components/comic/ComicDialogueLine";
import { ComicCaption } from "@/components/comic/ComicCaption";
import { MarkComparisonBig, MarkGlyphAfter } from "@/components/comic/MarkComparisonBig";
import { StoneGlow } from "@/components/comic/StoneGlow";
import { ChestSparkle } from "@/components/comic/ChestSparkle";
import { EpisodeCTAButton } from "@/components/comic/EpisodeCTAButton";

const EPISODE_SEEN_KEY = "mascot-kingdom:episode1-seen";

export default function Episode1Page() {
  const fukumaron = getCharacterById("fukumaron")!;
  const maron = getCharacterById("maron")!;

  const markSeen = () => {
    try {
      window.localStorage.setItem(EPISODE_SEEN_KEY, "1");
    } catch {
      // ローカルストレージが使えなくても読み進めには影響しない
    }
  };

  return (
    <main className="bg-kingdom-cream">
      <header className="flex items-center px-5 py-4">
        <Link href="/kingdom" className="text-sm text-kingdom-navy/60">
          ← 王国マップに戻る
        </Link>
      </header>

      {/* 扉：タイトルのみ、静かに */}
      <ComicScene className="gap-2 pb-6 pt-4 sm:pb-8">
        <ScrollReveal>
          <p className="text-center text-sm font-bold tracking-wide text-kingdom-ink/80 sm:text-base">
            {episode1Comic.title}
          </p>
        </ScrollReveal>
      </ComicScene>

      {/* 場面1：マロンとふくまろんをまず大きく見せる */}
      <ComicScene>
        <ScrollReveal>
          <p className="text-xs text-kingdom-ink/60 sm:text-sm">古代の丘</p>
        </ScrollReveal>

        <ScrollReveal delay={0.05} className="flex items-end justify-center gap-1">
          <Float range={5} duration={4} delay={0}>
            <CharacterFigure character={maron} size="xl" priority />
          </Float>
          <Float range={5} duration={4.6} delay={0.5}>
            <CharacterFigure character={fukumaron} size="xl" priority />
          </Float>
        </ScrollReveal>

        <div className="flex w-full flex-col gap-3">
          <ScrollReveal delay={0.15}>
            <ComicDialogueLine character={maron} text={episode1Comic.scene1.lines[0].text} align="left" />
          </ScrollReveal>
          <ScrollReveal delay={0.25}>
            <ComicDialogueLine character={fukumaron} text={episode1Comic.scene1.lines[1].text} align="right" />
          </ScrollReveal>
        </div>
      </ComicScene>

      {/* 場面2：昨日と違う模様 */}
      <ComicScene tone="soft">
        <ScrollReveal className="flex items-end justify-center gap-2">
          <Float range={4} duration={4.2}>
            <CharacterFigure character={maron} size="md" />
          </Float>
          <Float range={4} duration={4.8} delay={0.3}>
            <CharacterFigure character={fukumaron} size="md" />
          </Float>
        </ScrollReveal>

        <div className="flex w-full flex-col gap-3">
          <ScrollReveal delay={0.1}>
            <ComicDialogueLine character={maron} text={episode1Comic.scene2.lines[0].text} align="left" />
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <ComicDialogueLine character={fukumaron} text={episode1Comic.scene2.lines[1].text} align="right" />
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.3} className="w-full">
          <MarkComparisonBig
            beforeLabel={episode1Comic.scene2.before.label}
            afterLabel={episode1Comic.scene2.after.label}
          />
        </ScrollReveal>
      </ComicScene>

      {/* 場面3：マロンとのつながり（今日の模様のアップ＋胸の星） */}
      <ComicScene>
        <ScrollReveal className="flex justify-center">
          <div className="flex h-28 w-28 items-center justify-center rounded-full border border-white/70 bg-gradient-to-b from-white/80 to-kingdom-beige/40 shadow-sm sm:h-36 sm:w-36">
            <div className="scale-125 sm:scale-150">
              <MarkGlyphAfter />
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1} className="w-full space-y-2">
          <ComicDialogueLine character={fukumaron} text={episode1Comic.scene3.lines[0].text} align="right" />
          <ComicDialogueLine character={maron} text={episode1Comic.scene3.lines[1].text} align="left" />
        </ScrollReveal>

        <ScrollReveal delay={0.2} className="relative">
          <CharacterFigure character={maron} size="xl" />
          <ChestSparkle style={{ left: "44%", top: "54%" }} />
        </ScrollReveal>

        <ScrollReveal delay={0.3} className="w-full space-y-2">
          <ComicDialogueLine character={maron} text={episode1Comic.scene3.lines[2].text} align="left" />
          <ComicDialogueLine character={fukumaron} text={episode1Comic.scene3.lines[3].text} align="right" />
        </ScrollReveal>
      </ComicScene>

      {/* 場面4：クスッとする会話 */}
      <ComicScene tone="soft">
        <ScrollReveal className="flex items-end justify-center gap-1">
          <Float range={5} duration={4.1}>
            <CharacterFigure character={maron} size="xl" />
          </Float>
          <Float range={5} duration={4.7} delay={0.4}>
            <CharacterFigure character={fukumaron} size="xl" />
          </Float>
        </ScrollReveal>

        <div className="flex w-full flex-col gap-3">
          <ScrollReveal delay={0.15}>
            <ComicDialogueLine character={maron} text={episode1Comic.scene4.lines[0].text} align="left" />
          </ScrollReveal>
          <ScrollReveal delay={0.25}>
            <ComicDialogueLine character={fukumaron} text={episode1Comic.scene4.lines[1].text} align="right" />
          </ScrollReveal>
          <ScrollReveal delay={0.35}>
            <ComicDialogueLine character={maron} text={episode1Comic.scene4.lines[2].text} align="left" />
          </ScrollReveal>
        </div>
      </ComicScene>

      {/* 場面5：石が返事をする（いちばんの見せ場） */}
      <ComicScene>
        <ScrollReveal className="relative flex justify-center py-2">
          <StoneGlow className="scale-150" />
          <div className="relative flex h-32 w-32 items-center justify-center rounded-full border border-white/70 bg-gradient-to-b from-white/80 to-kingdom-beige/40 shadow-sm sm:h-40 sm:w-40">
            <div className="scale-125 sm:scale-150">
              <MarkGlyphAfter />
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15} className="flex items-end justify-center gap-2">
          <CharacterFigure character={maron} size="md" />
          <CharacterFigure character={fukumaron} size="md" />
        </ScrollReveal>

        <div className="flex w-full flex-col gap-3">
          <ScrollReveal delay={0.25}>
            <ComicDialogueLine character={fukumaron} text={episode1Comic.scene5.lines[0].text} align="right" />
          </ScrollReveal>
          <ScrollReveal delay={0.35}>
            <ComicDialogueLine character={maron} text={episode1Comic.scene5.lines[1].text} align="left" />
          </ScrollReveal>
        </div>
      </ComicScene>

      {/* 場面6：余韻と次への引き */}
      <ComicScene tone="soft" className="pb-20">
        <ScrollReveal className="flex items-end justify-center gap-1">
          <Float range={4} duration={4.3}>
            <CharacterFigure character={maron} size="lg" />
          </Float>
          <Float range={4} duration={4.9} delay={0.3}>
            <CharacterFigure character={fukumaron} size="lg" />
          </Float>
        </ScrollReveal>

        <div className="flex w-full flex-col gap-3">
          <ScrollReveal delay={0.15}>
            <ComicDialogueLine character={fukumaron} text={episode1Comic.scene6.lines[0].text} align="right" />
          </ScrollReveal>
          <ScrollReveal delay={0.25}>
            <ComicDialogueLine character={maron} text={episode1Comic.scene6.lines[1].text} align="left" />
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.35}>
          <ComicCaption lines={episode1Comic.scene6.caption} />
        </ScrollReveal>

        <ScrollReveal delay={0.45} className="flex flex-col items-center gap-3 pt-2">
          <EpisodeCTAButton href="/kingdom" onNavigate={markSeen}>
            {episode1Comic.scene6.ctaLabel}
          </EpisodeCTAButton>
          <p className="text-xs text-kingdom-navy/45">{episode1Comic.teaser}</p>
        </ScrollReveal>
      </ComicScene>
    </main>
  );
}
