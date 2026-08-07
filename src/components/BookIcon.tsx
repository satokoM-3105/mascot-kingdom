export function BookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <path
        d="M12 6.2c-1.9-1.5-4.3-2-6.5-1.7v13c2.2-0.3 4.6 0.2 6.5 1.7"
        stroke="var(--kingdom-ancient)"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 6.2c1.9-1.5 4.3-2 6.5-1.7v13c-2.2-0.3-4.6 0.2-6.5 1.7"
        stroke="var(--kingdom-ancient)"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 6.2v13"
        stroke="var(--kingdom-ancient)"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}
