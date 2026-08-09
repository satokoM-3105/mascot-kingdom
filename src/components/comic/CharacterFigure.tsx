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

export type EmotionKind = "sparkle" | "question" | "exclaim" | "think";

export interface CharacterImageVariant {
  url: string;
  width: number;
  height: number;
}

/** 場面ごとに表情・ポーズ違いの実イラストへ差し替えられるようにする。
 * variantを渡さなければ、常用の基本画像（character.imageUrl）を使う。
 * 立ち絵そのもの（キャラクターデザイン）は一切変更しない。 */
export function CharacterFigure({
  character,
  size = "lg",
  className,
  priority,
  showName = true,
  variant,
  emote,
  emoteSide = "right",
}: {
  character: Character;
  size?: keyof typeof SIZE_CLASSES;
  className?: string;
  priority?: boolean;
  /** キャラクターの真下に名前の小さな名札を出す（初見でも誰か分かるように）。 */
  showName?: boolean;
  /** 場面用の表情・ポーズ差分画像。省略時は基本画像を使う */
  variant?: CharacterImageVariant;
  /** 表情を補う、控えめな感情アイコン */
  emote?: EmotionKind;
  /** 2匹並びのとき、もう1匹がいない側（外側）に出す。左に立つ子はleft */
  emoteSide?: "left" | "right";
}) {
  if (!character.imageUrl) return null;

  const src = variant?.url ?? character.imageUrl;
  const dims = variant
    ? { width: variant.width, height: variant.height }
    : (NATURAL_SIZE[character.id] ?? { width: 640, height: 640 });
  const bg = character.theme?.bg ?? DEFAULT_BG;
  const accent = character.theme?.accent ?? DEFAULT_ACCENT;

  return (
    <div className={`flex flex-col items-center ${className ?? ""}`}>
      <div className="relative">
        <div
          className={`relative ${SIZE_CLASSES[size]}`}
          style={{
            maskImage: EDGE_FADE_MASK,
            WebkitMaskImage: EDGE_FADE_MASK,
            filter: "drop-shadow(0 12px 16px rgba(59, 54, 42, 0.16))",
          }}
        >
          <Image
            src={src}
            alt={character.name}
            width={dims.width}
            height={dims.height}
            priority={priority}
            sizes="(min-width: 640px) 300px, 240px"
            className="h-auto w-full object-contain"
          />
        </div>
        {/* マスクの影響を受けないよう、キャラクター本体の外側に重ねる */}
        {emote && <EmotionAccent kind={emote} side={emoteSide} />}
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

function EmotionAccent({ kind, side }: { kind: EmotionKind; side: "left" | "right" }) {
  const sidePos = side === "left" ? "-left-1 sm:-left-2" : "-right-1 sm:-right-2";

  if (kind === "sparkle") {
    return (
      <svg
        viewBox="0 0 24 24"
        aria-hidden
        className={`absolute ${sidePos} top-1 h-6 w-6 drop-shadow-sm sm:top-2 sm:h-7 sm:w-7`}
      >
        <path
          d="M12 0 L14 10 L24 12 L14 14 L12 24 L10 14 L0 12 L10 10 Z"
          fill="var(--kingdom-beige)"
        />
        <circle cx="4" cy="4" r="1.4" fill="var(--kingdom-beige)" opacity="0.8" />
      </svg>
    );
  }

  if (kind === "think") {
    return (
      <svg
        viewBox="0 0 32 14"
        aria-hidden
        className={`absolute ${sidePos} top-2 h-3.5 w-9 sm:top-3`}
      >
        <circle cx="3" cy="11" r="1.6" fill="var(--kingdom-ancient)" opacity="0.5" />
        <circle cx="14" cy="7" r="2.1" fill="var(--kingdom-ancient)" opacity="0.65" />
        <circle cx="27" cy="3" r="2.7" fill="var(--kingdom-ancient)" opacity="0.8" />
      </svg>
    );
  }

  const label = kind === "question" ? "？" : "！";
  const color = kind === "question" ? "var(--kingdom-ancient)" : "var(--kingdom-green-deep)";

  return (
    <span
      aria-hidden
      className={`absolute ${sidePos} top-0 flex h-7 w-7 items-center justify-center rounded-full bg-white/90 text-base font-bold shadow-sm sm:h-8 sm:w-8 sm:text-lg`}
      style={{ color }}
    >
      {label}
    </span>
  );
}
