import Image from "next/image";
import { SceneVisual } from "@/types/kingdom";

function MarkGlyphBefore() {
  return (
    <svg viewBox="0 0 72 72" className="h-12 w-12 sm:h-14 sm:w-14" fill="none">
      <circle cx="36" cy="36" r="26" stroke="var(--kingdom-ancient)" strokeWidth="2.5" />
      <path
        d="M22 36c4-10 10-14 14-10s2 12-4 14-12-2-8-8"
        stroke="var(--kingdom-ancient)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="26" cy="24" r="2" fill="var(--kingdom-ancient)" />
      <circle cx="46" cy="26" r="2" fill="var(--kingdom-ancient)" />
    </svg>
  );
}

function MarkGlyphAfter() {
  return (
    <svg viewBox="0 0 72 72" className="h-12 w-12 sm:h-14 sm:w-14" fill="none">
      {/* 開き始めた円。上部にはっきりしたすきまがある */}
      <circle
        cx="36"
        cy="36"
        r="26"
        stroke="var(--kingdom-ancient)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeDasharray="145 18"
        transform="rotate(-90 36 36)"
      />
      <path
        d="M22 36c4-10 10-14 14-10s2 12-4 14-12-2-8-8"
        stroke="var(--kingdom-ancient)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="26" cy="24" r="2" fill="var(--kingdom-ancient)" />
      <circle cx="46" cy="26" r="2" fill="var(--kingdom-ancient)" />
      {/* すきまからのぞく、小さな芽（控えめな緑） */}
      <path
        d="M30 3.2c2.6 1.6 2.8 5.3.4 7.8-2.6-1.6-2.8-5.3-.4-7.8z"
        fill="var(--kingdom-green)"
        stroke="var(--kingdom-green-deep)"
        strokeWidth="0.6"
        opacity="0.9"
      />
      {/* すきまからのぞく、小さな星のきざし（控えめな金） */}
      <path
        d="M43.5 2.2 L44.6 5.1 L47.6 6.2 L44.6 7.3 L43.5 10.2 L42.4 7.3 L39.4 6.2 L42.4 5.1 Z"
        fill="var(--kingdom-beige)"
        opacity="0.95"
      />
      <circle cx="48.5" cy="10.8" r="0.9" fill="var(--kingdom-beige)" opacity="0.85" />
    </svg>
  );
}

function MarkTile({
  label,
  imageUrl,
  glyph,
}: {
  label: string;
  imageUrl?: string;
  glyph: React.ReactNode;
}) {
  return (
    <div className="flex flex-1 flex-col items-center gap-2 rounded-2xl border border-white/70 bg-gradient-to-b from-white/70 to-kingdom-beige/40 px-4 py-4 shadow-sm">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/80 shadow-inner sm:h-20 sm:w-20">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={label}
            width={56}
            height={56}
            className="object-contain"
          />
        ) : (
          glyph
        )}
      </div>
      <p className="text-xs font-medium text-kingdom-ink/90">{label}</p>
    </div>
  );
}

export function AncientMarkCompare({
  visual,
}: {
  visual: Extract<SceneVisual, { type: "mark-comparison" }>;
}) {
  return (
    <div className="my-3 flex flex-col items-center gap-2 sm:flex-row sm:justify-center sm:gap-4">
      <MarkTile
        label={visual.before.label}
        imageUrl={visual.before.imageUrl}
        glyph={<MarkGlyphBefore />}
      />
      <span className="text-lg text-kingdom-navy/40 sm:mt-6">→</span>
      <MarkTile
        label={visual.after.label}
        imageUrl={visual.after.imageUrl}
        glyph={<MarkGlyphAfter />}
      />
    </div>
  );
}
