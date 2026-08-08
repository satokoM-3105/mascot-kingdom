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
  /** マップ画像に描き込まれたラベル文字の中心位置（%指定）。
   * スマホ表示で読みやすいラベルを重ねて表示する際に使用 */
  labelPosition?: { left: number; top: number };
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
  /** 会話カード・アバターの配色。未設定なら共通のプレースホルダー配色を使う */
  theme?: {
    bg: string;
    accent: string;
  };
}

export interface StoryLine {
  speaker?: string;
  text: string;
}

/** シーンに添える補助的な図版。将来種類が増える想定で判別可能なunionにしている */
export type SceneVisual = {
  type: "mark-comparison";
  before: { label: string; imageUrl?: string };
  after: { label: string; imageUrl?: string };
};

export interface StoryScene {
  id: number;
  location: string;
  lines: StoryLine[];
  choiceLabel?: string;
  /** セリフとは別に添える補助図版（任意） */
  visual?: SceneVisual;
}

export interface Story {
  id: string;
  title: string;
  triggerAreaId: AreaId;
  scenes: StoryScene[];
  endingText: string;
  teaser: string;
}
