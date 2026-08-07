export function MarkIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <rect
        x="4"
        y="3"
        width="16"
        height="18"
        rx="3"
        stroke="var(--kingdom-ancient)"
        strokeWidth="1.8"
      />
      <path
        d="M9 9c1-2 3-2 4-1s0 3-2 3.5-3-1-1-2"
        stroke="var(--kingdom-ancient)"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle cx="15" cy="8" r="0.9" fill="var(--kingdom-ancient)" />
    </svg>
  );
}
