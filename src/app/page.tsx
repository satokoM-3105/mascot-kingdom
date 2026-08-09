import Link from "next/link";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-kingdom-cream px-6 text-center">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(circle at 20% 20%, var(--kingdom-green) 0%, transparent 45%), radial-gradient(circle at 80% 15%, var(--kingdom-blue) 0%, transparent 40%), radial-gradient(circle at 50% 90%, var(--kingdom-beige) 0%, transparent 50%)",
        }}
      />

      <div className="relative z-10 flex max-w-md flex-col items-center gap-6">
        <p className="text-sm tracking-[0.3em] text-kingdom-green-deep">
          MASCOT KINGDOM
        </p>

        <h1 className="text-4xl font-bold text-kingdom-navy sm:text-5xl">
          マスコット王国
        </h1>

        <p className="text-base leading-loose text-kingdom-ink/90 sm:text-lg">
          もし、ぬいぐるみたちが本当に話して、笑って、暮らしていたら。
          <br />
          そんな想像から生まれたのが、マスコット王国です。
          <br />
          ここでは、かわいい住人たちの小さな物語が始まります。
        </p>

        <Link
          href="/kingdom"
          className="mt-4 rounded-full bg-kingdom-green-deep px-8 py-3 text-white shadow-md transition hover:brightness-105 active:scale-95"
        >
          王国へ入る
        </Link>
      </div>
    </main>
  );
}
