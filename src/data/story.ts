import { Story } from "@/types/kingdom";

export const episode1: Story = {
  id: "episode-1",
  title: "第1話「古代の丘のしるし」",
  triggerAreaId: "kodai-no-oka",
  teaser: "つづきは、まだ誰も知らない。",
  endingText: "丘の向こうに、新しい道が現れた。",
  scenes: [
    {
      id: 1,
      location: "古代の丘",
      lines: [
        { speaker: "ふくまろん", text: "「ねえ……これ、昨日と違わない？」" },
        { speaker: "ふくまろん", text: "「なんで？」" },
        { text: "石に刻まれた模様が変わっている。" },
      ],
      choiceLabel: "ぬぬ子に聞きに行く",
    },
    {
      id: 2,
      location: "はじまりの丘",
      lines: [
        {
          speaker: "ふくまろん",
          text: "「ぬぬ子、この模様って前から変わるの？」",
        },
        { speaker: "ぬぬ子", text: "「昔もねぇ……一度だけ変わったことがあったよ」" },
        {
          speaker: "ふくまろん",
          text: "「いつ？ なんで？ その時なにがあったの？」",
        },
        { speaker: "ぬぬ子", text: "「ずいぶん昔だからねぇ……」" },
      ],
    },
    {
      id: 3,
      location: "はじまりの丘",
      lines: [
        { text: "そこへマロンが現れる。" },
        { speaker: "マロン", text: "「今日ね、丘の向こうに道ができてたよ」" },
        { speaker: "ふくまろん", text: "「えっ！？ 道？ 昨日なかったよね？」" },
        { speaker: "マロン", text: "「うん。でも今日はあるよ」" },
      ],
    },
    {
      id: 4,
      location: "古代の丘",
      lines: [{ text: "丘の向こうに、新しい道が現れた。" }],
    },
  ],
};
