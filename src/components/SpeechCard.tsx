import { getCharacterByName } from "@/data/characters";
import { CharacterAvatar } from "./CharacterAvatar";

const DEFAULT_BG = "#F1ECE0";
const DEFAULT_ACCENT = "#B0A88F";

export function SpeechCard({
  speakerName,
  text,
}: {
  speakerName: string;
  text: string;
}) {
  const character = getCharacterByName(speakerName);
  const bg = character?.theme?.bg ?? DEFAULT_BG;
  const accent = character?.theme?.accent ?? DEFAULT_ACCENT;

  return (
    <div className="flex items-start gap-2.5">
      <div className="mt-0.5 shrink-0">
        {character ? (
          <CharacterAvatar character={character} size={36} />
        ) : (
          <div
            className="h-9 w-9 rounded-full border-2 border-white shadow-sm"
            style={{ backgroundColor: accent }}
          />
        )}
      </div>
      <div className="min-w-0 flex-1">
        <p className="mb-0.5 text-xs font-bold" style={{ color: accent }}>
          {speakerName}
        </p>
        <div
          className="rounded-2xl rounded-tl-sm px-3 py-2 text-sm leading-relaxed text-foreground"
          style={{ backgroundColor: bg }}
        >
          {text}
        </div>
      </div>
    </div>
  );
}
