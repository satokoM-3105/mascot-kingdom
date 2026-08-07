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
      <circle cx="36" cy="36" r="26" stroke="var(--kingdom-ancient)" strokeWidth="2.5" />
      <path
        d="M22 36c4-10 10-14 14-10s2 12-4 14-12-2-8-8"
        stroke="var(--kingdom-ancient)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="26" cy="24" r="2" fill="var(--kingdom-ancient)" />
      <circle cx="46" cy="26" r="2" fill="var(--kingdom-ancient)" />
      <circle cx="36" cy="50" r="2" fill="var(--kingdom-ancient)" />
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
      <p className="text-xs text-kingdom-navy/70">{label}</p>
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
