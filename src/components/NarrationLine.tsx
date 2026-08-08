export function NarrationLine({ text }: { text: string }) {
  return (
    <p className="my-1 px-2 text-center text-xs italic leading-relaxed text-kingdom-ink">
      {text}
    </p>
  );
}
