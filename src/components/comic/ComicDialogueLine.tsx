import { Character } from "@/types/kingdom";

const DEFAULT_BG = "#F1ECE0";
const DEFAULT_ACCENT = "#B0A88F";

/** キャラクターがすでに大きく表示されている前提の、控えめな会話ふきだし。
 * 小さな丸アイコンは付けない（絵とUIが競合しないように）。 */
export function ComicDialogueLine({
  character,
  text,
  align = "left",
}: {
  character?: Character;
  text: string;
  align?: "left" | "right";
}) {
  const bg = character?.theme?.bg ?? DEFAULT_BG;
  const accent = character?.theme?.accent ?? DEFAULT_ACCENT;
  const isRight = align === "right";

  return (
    <div className={`flex flex-col gap-1 ${isRight ? "items-end text-right" : "items-start text-left"}`}>
      {character && (
        <span className="px-1 text-xs font-bold tracking-wide" style={{ color: accent }}>
          {character.name}
        </span>
      )}
      <p
        className={`max-w-[19rem] text-base font-medium leading-relaxed text-kingdom-ink shadow-sm ${
          isRight ? "rounded-2xl rounded-tr-sm" : "rounded-2xl rounded-tl-sm"
        } px-4 py-2.5 sm:text-lg`}
        style={{ backgroundColor: bg }}
      >
        {text}
      </p>
    </div>
  );
}
