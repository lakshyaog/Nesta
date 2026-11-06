export function PageHero({
  crumb,
  title,
  text,
}: {
  crumb: string;
  title: string;
  text: string;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-deep via-ink to-ink text-white">
      <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-brand-blue/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 right-40 h-64 w-64 rounded-full bg-neon/10 blur-3xl" />
      <div className="relative mx-auto max-w-6xl px-6 py-20">
        <p className="font-mono text-sm text-white/60">{crumb}</p>
        <p className="mt-6 font-mono text-xs font-medium uppercase tracking-[0.25em] text-neon">
          Experience Home
        </p>
        <h1 className="mt-3 text-5xl font-bold tracking-tight sm:text-6xl">
          {title}
        </h1>
        <p className="mt-4 max-w-xl text-lg text-white/75">{text}</p>
      </div>
    </section>
  );
}
