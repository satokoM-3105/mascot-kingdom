export function ComicCaption({ lines }: { lines: string | string[] }) {
  const items = Array.isArray(lines) ? lines : [lines];
  return (
    <div className="mx-auto max-w-sm space-y-1 px-4 text-center">
      {items.map((line, i) => (
        <p key={i} className="text-sm italic leading-relaxed text-kingdom-ink/80 sm:text-base">
          {line}
        </p>
      ))}
    </div>
  );
}
