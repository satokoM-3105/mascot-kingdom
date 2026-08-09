import Image from "next/image";
import { Character } from "@/types/kingdom";

/** 元画像は縁が暗く/濃くぼかされた背景で描かれているため、そのまま大きく
 * 四角い枠で出すと絵本の余白から浮いて見える。楕円のマスクで縁をページの
 * 生成り色へゆるやかに溶け込ませ、輪郭のない挿絵のように見せる。 */
const EDGE_FADE_MASK =
  "radial-gradient(ellipse 58% 64% at 50% 42%, black 58%, transparent 88%)";

const NATURAL_SIZE: Record<string, { width: number; height: number }> = {
  fukumaron: { width: 640, height: 960 },
  nunuko: { width: 640, height: 960 },
  maron: { width: 640, height: 640 },
};

const SIZE_CLASSES = {
  md: "w-36 sm:w-44",
  lg: "w-52 sm:w-64",
  xl: "w-64 sm:w-[19rem]",
} as const;

const DEFAULT_BG = "#F1ECE0";
const DEFAULT_ACCENT = "#B0A88F";

export function CharacterFigure({
  character,
  size = "lg",
  className,
  priority,
  showName = true,
}: {
  character: Character;
  size?: keyof typeof SIZE_CLASSES;
  className?: string;
  priority?: boolean;
  /** キャラクターの真下に名前の小さな名札を出す（初見でも誰か分かるように）。 */
  showName?: boolean;
}) {
  if (!character.imageUrl) return null;

  const dims = NATURAL_SIZE[character.id] ?? { width: 640, height: 640 };
  const bg = character.theme?.bg ?? DEFAULT_BG;
  const accent = character.theme?.accent ?? DEFAULT_ACCENT;

  return (
    <div className={`flex flex-col items-center ${className ?? ""}`}>
      <div
        className={`relative ${SIZE_CLASSES[size]}`}
        style={{
          maskImage: EDGE_FADE_MASK,
          WebkitMaskImage: EDGE_FADE_MASK,
          filter: "drop-shadow(0 12px 16px rgba(59, 54, 42, 0.16))",
        }}
      >
        <Image
          src={character.imageUrl}
          alt={character.name}
          width={dims.width}
          height={dims.height}
          priority={priority}
          sizes="(min-width: 640px) 300px, 240px"
          className="h-auto w-full object-contain"
        />
      </div>
      {showName && (
        <span
          className="mt-1 rounded-full px-3 py-0.5 text-[11px] font-bold tracking-wide shadow-sm sm:mt-1.5 sm:text-xs"
          style={{ backgroundColor: bg, color: accent }}
        >
          {character.name}
        </span>
      )}
    </div>
  );
}
