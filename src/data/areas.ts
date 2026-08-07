import { Area } from "@/types/kingdom";

export const areas: Area[] = [
  {
    id: "fukurou-no-mori",
    name: "ふくろうの森",
    description: "夕方から夜が似合う森。",
    hitArea: { left: 0, top: 0, width: 33.5, height: 41.4 },
    color: "#8E9FB0",
    residentIds: ["fukumaron"],
  },
  {
    id: "aoba-no-mori",
    name: "あおばの森",
    description: "明るい昼の森。",
    hitArea: { left: 0, top: 42, width: 28.7, height: 58 },
    color: "#A9C2A0",
    residentIds: ["aoba"],
  },
  {
    id: "hajimari-no-oka",
    name: "はじまりの丘",
    description: "王国の中心近く。",
    hitArea: { left: 33.5, top: 24.4, width: 20.3, height: 35.1 },
    color: "#B8C9A8",
    residentIds: ["nunuko", "tamao"],
  },
  {
    id: "shizuku-ike",
    name: "しずく池",
    description: "池と小川のある水辺。",
    hitArea: { left: 53.8, top: 25, width: 25.7, height: 21.8 },
    color: "#A7C4D9",
    residentIds: [],
  },
  {
    id: "kodai-no-oka",
    name: "古代の丘",
    description: "王国の少し外れにある謎の場所。",
    hitArea: { left: 53.8, top: 0, width: 46.2, height: 25 },
    color: "#9C8FA6",
    residentIds: ["dogu-1", "dogu-2"],
    visitorIds: ["maron"],
    hasEvent: true,
  },
  {
    id: "nigiwai-hiroba",
    name: "にぎわい広場",
    description: "王国の日常の中心。",
    hitArea: { left: 28.7, top: 59.5, width: 38.3, height: 40.5 },
    color: "#E8C9A0",
    residentIds: ["nekobu"],
    visitorIds: ["tamao"],
  },
  {
    id: "gaogao-harappa",
    name: "ガオガオ原っぱ",
    description: "広くて明るい草原。",
    hitArea: { left: 67, top: 43.6, width: 33, height: 56.4 },
    color: "#E3D9A8",
    residentIds: ["akkey", "tira-4"],
  },
];

export function getAreaById(id: string) {
  return areas.find((a) => a.id === id);
}
