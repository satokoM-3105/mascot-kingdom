import Link from "next/link";
import { episode1Comic } from "@/data/episode1Comic";
import { StoryBookIcon } from "./ResidentsSection";

/** エリアを選ばなくても、王国に今どんなお話があるか一目で分かるように
 * 地図の直下に常時表示する一覧。今は第1話のみ。今後お話が増えたら配列に足す。 */
const PUBLISHED_STORIES = [
  {
    title: episode1Comic.title,
    summary: episode1Comic.summary,
    href: "/kingdom/episode-1",
  },
];

export function PublishedStoriesSection() {
  return (
    <section className="mx-auto mt-5 w-full max-w-2xl px-6 sm:mt-6 sm:max-w-3xl">
      <h2 className="text-center text-sm font-bold text-kingdom-navy">
        現在公開中のお話
      </h2>
      <div className="mt-4 flex flex-col items-center gap-3">
        {PUBLISHED_STORIES.map((story) => (
          <StoryTeaserCard key={story.href} {...story} />
        ))}
      </div>
    </section>
  );
}

function StoryTeaserCard({
  title,
  summary,
  href,
}: {
  title: string;
  summary: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group block w-full max-w-sm rounded-3xl border border-kingdom-ancient/25 bg-gradient-to-br from-white/70 via-kingdom-cream to-kingdom-beige/25 px-5 py-5 shadow-sm transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-md active:scale-[0.98]"
    >
      <div className="flex items-start gap-3">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-kingdom-beige/50">
          <StoryBookIcon className="h-5 w-5" />
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-bold text-kingdom-navy">{title}</p>
          <p className="mt-1 text-xs leading-relaxed text-kingdom-navy/65">
            {summary}
          </p>
        </div>
      </div>
      <span className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-kingdom-green-deep">
        第1話を読む
        <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
          →
        </span>
      </span>
    </Link>
  );
}
