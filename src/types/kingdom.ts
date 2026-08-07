export type AreaId =
  | "hajimari-no-oka"
  | "fukurou-no-mori"
  | "aoba-no-mori"
  | "gaogao-harappa"
  | "shizuku-ike"
  | "nigiwai-hiroba"
  | "kodai-no-oka";

export interface Area {
  id: AreaId;
  name: string;
  description: string;
  /** マップ画像上のクリック領域（%指定の矩形。0-100） */
  hitArea: { left: number; top: number; width: number; height: number };
  /** エリアのテーマカラー（ホバー時のヒント表示に使用） */
  color: string;
  /** 主な住人 */
  residentIds: string[];
  /** ときどき訪れるキャラクター */
  visitorIds?: string[];
  /** 第1話イベントの起点になるエリアか */
  hasEvent?: boolean;
}

export interface Character {
  id: string;
  name: string;
  species?: string;
  gender?: string;
  tagline: string;
  personality: string;
  likes?: string;
  home: string;
  areaId: AreaId | null;
  quote: string;
  note?: string;
  /** 差し替え用の画像パス。未設定ならプレースホルダー表示 */
  imageUrl?: string;
}

export interface StoryLine {
  speaker?: string;
  text: string;
}

export interface StoryScene {
  id: number;
  location: string;
  lines: StoryLine[];
  choiceLabel?: string;
}

export interface Story {
  id: string;
  title: string;
  triggerAreaId: AreaId;
  scenes: StoryScene[];
  endingText: string;
  teaser: string;
}
