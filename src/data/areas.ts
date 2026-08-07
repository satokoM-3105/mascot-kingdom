import { Area } from "@/types/kingdom";

export const areas: Area[] = [
  {
    id: "hajimari-no-oka",
    name: "はじまりの丘",
    description: "王国の中心近く。",
    position: { x: 48, y: 52 },
    color: "#B8C9A8",
    residentIds: ["nunuko", "tamao"],
  },
  {
    id: "fukurou-no-mori",
    name: "ふくろうの森",
    description: "夕方から夜が似合う森。",
    position: { x: 18, y: 26 },
    color: "#8E9FB0",
    residentIds: ["fukumaron"],
  },
  {
    id: "aoba-no-mori",
    name: "あおばの森",
    description: "明るい昼の森。",
    position: { x: 18, y: 68 },
    color: "#A9C2A0",
    residentIds: ["aoba"],
  },
  {
    id: "gaogao-harappa",
    name: "ガオガオ原っぱ",
    description: "広くて明るい草原。",
    position: { x: 76, y: 72 },
    color: "#E3D9A8",
    residentIds: ["akkey", "tira-4"],
  },
  {
    id: "shizuku-ike",
    name: "しずく池",
    description: "池と小川のある水辺。",
    position: { x: 74, y: 32 },
    color: "#A7C4D9",
    residentIds: [],
  },
  {
    id: "nigiwai-hiroba",
    name: "にぎわい広場",
    description: "王国の日常の中心。",
    position: { x: 48, y: 84 },
    color: "#E8C9A0",
    residentIds: ["nekobu"],
    visitorIds: ["tamao"],
  },
  {
    id: "kodai-no-oka",
    name: "古代の丘",
    description: "王国の少し外れにある謎の場所。",
    position: { x: 88, y: 14 },
    color: "#9C8FA6",
    residentIds: ["dogu-1", "dogu-2"],
    visitorIds: ["maron"],
    hasEvent: true,
  },
];

export function getAreaById(id: string) {
  return areas.find((a) => a.id === id);
}
