import Image from "next/image";
import { Character } from "@/types/kingdom";

const PLACEHOLDER_COLORS = [
  "#B8C9A8",
  "#A7C4D9",
  "#E8C9A0",
  "#9C8FA6",
  "#D9A7A7",
  "#A7D9C9",
];

function colorForCharacter(id: string) {
  let hash = 0;
  for (let i = 0; i < id.length; i++) hash = (hash * 31 + id.charCodeAt(i)) >>> 0;
  return PLACEHOLDER_COLORS[hash % PLACEHOLDER_COLORS.length];
}

export function CharacterAvatar({
  character,
  size = 64,
}: {
  character: Character;
  size?: number;
}) {
  if (character.imageUrl) {
    return (
      <Image
        src={character.imageUrl}
        alt={character.name}
        width={size}
        height={size}
        className="rounded-full object-cover border-2 border-white shadow-sm"
      />
    );
  }

  return (
    <div
      className="flex items-center justify-center rounded-full border-2 border-white shadow-sm font-bold text-white select-none"
      style={{
        width: size,
        height: size,
        backgroundColor: character.theme?.accent ?? colorForCharacter(character.id),
        fontSize: size * 0.32,
      }}
    >
      {character.name.slice(0, 1)}
    </div>
  );
}
