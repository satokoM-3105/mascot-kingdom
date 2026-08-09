/** 第1話「古代の丘のしるし」の縦スクロールWebコミック版の台本。
 * レイアウト・演出は src/app/kingdom/episode-1/page.tsx 側で組み立てる。
 * ここには読ませたい文章だけを置き、後から文面だけ調整しやすくしている。 */

export interface ComicLine {
  /** characters.ts の id。省略時はナレーション扱い */
  speaker?: "fukumaron" | "maron" | "nunuko";
  text: string;
}

/** 第1話用に用意した、表情・ポーズ差分イラスト（2026-08-09受領分）。
 * 通常画像（maron.png / fukumaron.png）はcharacters.tsの基本画像をそのまま使う。
 * calling/calmは現在どの場面にも割り当てていないが、今後使う可能性があるため残す。 */
export const episode1Images = {
  maronCalling: { url: "/images/maron_calling.png", width: 1086, height: 1448 },
  maronThinking: { url: "/images/maron_thinking.png", width: 1122, height: 1402 },
  maronSurprised: { url: "/images/maron_surprised.png", width: 1086, height: 1448 },
  fukumaronCalm: { url: "/images/fukumaron_calm.png", width: 1086, height: 1448 },
  fukumaronThinking: { url: "/images/fukumaron_thinking.png", width: 1086, height: 1448 },
  fukumaronSurprised: { url: "/images/fukumaron_surprised.png", width: 1086, height: 1448 },
};

export const episode1Comic = {
  title: "第1話「古代の丘のしるし」",
  /** 王国マップ側のお話一覧カードに使う、短い紹介文 */
  summary: "マロンとふくまろんが、古代の丘で不思議なしるしを見つけます。",

  scene1: {
    location: "古代の丘",
    lines: [
      { speaker: "maron", text: "「ふくまろん、ちょっと来て！」" },
      { speaker: "fukumaron", text: "「朝から声が大きいよ」" },
    ] satisfies ComicLine[],
  },

  scene2: {
    lines: [
      { speaker: "maron", text: "「ねえ……これ、昨日と違わない？」" },
      { speaker: "fukumaron", text: "「……ほんとだ」" },
    ] satisfies ComicLine[],
    before: { label: "昨日の模様" },
    after: { label: "今日の模様" },
  },

  scene3: {
    lines: [
      { speaker: "fukumaron", text: "「葉っぱが増えてる」" },
      { speaker: "maron", text: "「星もあるよ」" },
      { speaker: "maron", text: "「この星……わたしのと少し似てない？」" },
      { speaker: "fukumaron", text: "「似てるね」" },
    ] satisfies ComicLine[],
  },

  scene4: {
    lines: [
      { speaker: "maron", text: "「この石、何か言いたそうじゃない？」" },
      { speaker: "fukumaron", text: "「マロン、石と会話できるの？」" },
      { speaker: "maron", text: "「できるかもしれないよ」" },
    ] satisfies ComicLine[],
  },

  scene5: {
    lines: [
      { speaker: "fukumaron", text: "「……返事した。」" },
      { speaker: "maron", text: "「でしょ？」" },
    ] satisfies ComicLine[],
  },

  scene6: {
    lines: [
      { speaker: "fukumaron", text: "「これ……ぬぬ子に見せた方がいいかも」" },
      { speaker: "maron", text: "「うん。行こう」" },
    ] satisfies ComicLine[],
    caption: [
      "昨日までなかった星と葉。",
      "そして、マロンにだけ返事をしたように光った石。",
      "古代の丘で、何かが始まろうとしていた。",
    ],
    ctaLabel: "ぬぬ子に聞きに行く",
  },

  teaser: "つづきは、まだ誰も知らない。",
};
