"use client";

import { useState } from "react";
import { Story } from "@/types/kingdom";
import { SpeechCard } from "./SpeechCard";
import { NarrationLine } from "./NarrationLine";
import { AncientMarkCompare } from "./AncientMarkCompare";

export function StoryModal({
  story,
  onClose,
}: {
  story: Story;
  onClose: () => void;
}) {
  const [sceneIndex, setSceneIndex] = useState(0);
  const [finished, setFinished] = useState(false);
  const scene = story.scenes[sceneIndex];
  const isLastScene = sceneIndex === story.scenes.length - 1;

  const advance = () => {
    if (isLastScene) {
      setFinished(true);
      return;
    }
    setSceneIndex((i) => i + 1);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-kingdom-navy/60 px-4">
      <div className="w-full max-w-lg max-h-[85vh] overflow-y-auto rounded-3xl bg-kingdom-cream p-6 shadow-xl">
        {!finished ? (
          <>
            <p className="mb-1 text-xs tracking-wide text-kingdom-green-deep">
              {story.title}
            </p>
            <p className="mb-4 text-sm text-kingdom-navy/60">
              {scene.location}
            </p>

            <div className="space-y-3">
              {scene.lines.map((line, i) =>
                line.speaker ? (
                  <SpeechCard key={i} speakerName={line.speaker} text={line.text} />
                ) : (
                  <NarrationLine key={i} text={line.text} />
                )
              )}
            </div>

            {scene.visual?.type === "mark-comparison" && (
              <AncientMarkCompare visual={scene.visual} />
            )}

            <button
              onClick={advance}
              className="mt-6 w-full rounded-full bg-kingdom-green-deep px-6 py-3 text-sm text-white shadow-md transition active:scale-95"
            >
              {scene.choiceLabel ?? "つづきを見る"}
            </button>
          </>
        ) : (
          <>
            <p className="mb-4 text-sm leading-relaxed text-foreground">
              {story.endingText}
            </p>
            <p className="mb-6 text-center text-sm font-bold text-kingdom-navy">
              {story.title.replace(/「.*」/, "").trim()} おわり
            </p>
            <p className="mb-6 text-center text-xs text-kingdom-navy/60">
              {story.teaser}
            </p>
            <button
              onClick={onClose}
              className="w-full rounded-full bg-kingdom-green-deep px-6 py-3 text-sm text-white shadow-md transition active:scale-95"
            >
              マップに戻る
            </button>
          </>
        )}
      </div>
    </div>
  );
}
