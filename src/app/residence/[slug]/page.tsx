import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { RESIDENCES } from "@/data/residences";
import ParallaxGallery from "@/components/ui/3d-parallax-unfurling-gallery";
import { VideoPreview } from "@/components/video-preview";
import { Amenities } from "@/components/amenities";
import { BookVisitButton } from "@/components/message-modal";
import { CallbackForm } from "@/components/callback-form";

export function generateStaticParams() {
  return RESIDENCES.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/residence/[slug]">) {
  const { slug } = await params;
  const r = RESIDENCES.find((x) => x.slug === slug);
  return { title: r ? `${r.name}` : "Residence not found" };
}

export default function ResidencePage({
  params,
}: PageProps<"/residence/[slug]">) {
  return (
    <Suspense
      fallback={
        <div
          className="min-h-[100vh] flex-1 animate-pulse bg-gradient-to-br from-blue-deep/40 via-ink to-background"
          aria-busy="true"
        />
      }
    >
      <ResidenceContent params={params} />
    </Suspense>
  );
}

async function ResidenceContent({
  params,
}: {
  params: PageProps<"/residence/[slug]">["params"];
}) {
  const { slug } = await params;
  const r = RESIDENCES.find((x) => x.slug === slug);
  if (!r) notFound();

  const others = RESIDENCES.filter((x) => x.slug !== r.slug);

  return (
    <div className="relative flex flex-1 flex-col">
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-deep via-ink to-background text-white">
        <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-brand-blue/30 blur-3xl" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-6 py-20 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="font-mono text-sm text-white/60">
              <Link href="/" className="hover:text-white">
                Home
              </Link>{" "}
              ·{" "}
              <Link href="/" className="hover:text-white">
                Residences
              </Link>{" "}
              · {r.name}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {r.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-neon/10 px-3 py-1 font-mono text-[11px] font-medium uppercase tracking-[0.15em] text-neon ring-1 ring-neon/40"
                >
                  {t}
                </span>
              ))}
            </div>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              {r.name}
            </h1>
            <p className="mt-3 text-lg text-white/75">{r.location}</p>
            <div className="mt-8 flex flex-wrap gap-3 text-sm font-semibold">
              <BookVisitButton className="rounded-full bg-neon px-5 py-2.5 text-ink transition-colors hover:bg-white">
                Schedule a visit →
              </BookVisitButton>
              <Link
                href="/contact"
                className="rounded-full border border-neon px-5 py-2.5 text-neon transition-colors hover:bg-neon hover:text-ink"
              >
                Contact us
              </Link>
            </div>
          </div>

          <aside className="rounded-2xl border border-brand-blue/25 bg-gradient-to-br from-blue-deep to-panel p-6 shadow-lg">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-neon">
              At a glance
            </p>
            <dl className="mt-4 divide-y divide-brand-blue/20 text-sm">
              {[
                ["Residence", "Nestaliving"],
                ["Suitable for", r.tags.join(" · ")],
                ["Location", r.location],
                ["Tagline", "Experience Home"],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between gap-6 py-3">
                  <dt className="font-mono text-xs uppercase tracking-[0.15em] text-white/50">
                    {k}
                  </dt>
                  <dd className="text-right font-medium text-white">{v}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pt-14">
        <div className="relative isolate min-h-[26rem] overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-blue-deep via-panel to-ink shadow-xl">
          {r.image && (
            <Image
              src={r.image}
              alt=""
              aria-hidden="true"
              fill
              sizes="(min-width: 1152px) 1100px, 100vw"
              className="-z-20 object-cover object-[50%_55%]"
            />
          )}
          {/* soft liquid blobs on the open side */}
          <div className="pointer-events-none absolute -right-16 -top-16 -z-10 h-72 w-72 rounded-[60%_40%_55%_45%] bg-neon/40 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 right-1/4 -z-10 h-72 w-72 rounded-[45%_55%_40%_60%] bg-brand-blue/40 blur-3xl" />

          {/* liquid white shape with a flowing edge */}
          <svg
            aria-hidden="true"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="pointer-events-none absolute inset-y-0 left-0 hidden h-full w-[68%] drop-shadow-[10px_0_24px_rgba(0,0,0,0.25)] lg:block"
          >
            <path
              d="M0 0 H72 C84 14 60 30 70 48 C80 66 62 84 74 100 H0 Z"
              fill="white"
            />
          </svg>
          <div className="absolute inset-0 bg-white/90 lg:hidden" />

          <div className="relative p-8 md:p-12 lg:w-[55%]">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-blue-deep">
              About
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              About this residence
            </h2>
            <p className="mt-4 text-lg leading-8 text-ink/80">
              {r.description}
            </p>
          </div>
        </div>
      </section>

      <Amenities />

      {r.gallery && (
        <>
          <div className="mx-auto w-full max-w-6xl px-6 pt-14">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-neon">
              Gallery
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Every angle, every detail.
            </h2>
            <p className="mt-3 max-w-xl text-lg text-white/65">
              Scroll to explore photos of the residence.
            </p>
          </div>
          <ParallaxGallery images={r.gallery} altPrefix={r.name} />
        </>
      )}

      {r.video && (
        <VideoPreview src={r.video} poster={r.image} name={r.name} />
      )}

      <div className="mx-auto w-full max-w-6xl flex-1 px-6 py-14">
        <section className="pb-14">
          <h2 className="text-3xl font-bold tracking-tight text-white">
            Location
          </h2>
          <p className="mt-2 text-white/60">{r.location}</p>
          <div className="mt-6 overflow-hidden rounded-2xl ring-1 ring-brand-blue/25">
            <iframe
              title={`Map of ${r.name}`}
              src={`https://www.google.com/maps?q=${encodeURIComponent(r.mapQuery)}&output=embed`}
              className="h-80 w-full border-0 md:h-96"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(r.mapQuery)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-sm font-semibold text-neon hover:underline"
          >
            Open in Google Maps →
          </a>
        </section>

        <section
          id="callback"
          className="grid scroll-mt-24 gap-10 lg:grid-cols-2"
        >
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-white">
              Come see it for yourself
            </h2>
            <p className="mt-3 max-w-md text-white/70">
              Book a tour of {r.name} or ask for a callback. Leave your details
              and we will get in touch.
            </p>
          </div>
          <CallbackForm residence={r.name} />
        </section>

        <section className="pt-14">
          <h2 className="text-3xl font-bold tracking-tight text-white">
            Other residences
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {others.map((o) => (
              <Link
                key={o.slug}
                href={`/residence/${o.slug}`}
                className="rounded-2xl border border-brand-blue/25 bg-panel p-6 transition-colors hover:border-neon/60"
              >
                <p className="font-mono text-xs font-medium uppercase tracking-[0.15em] text-neon">
                  {o.tags.join(" · ")}
                </p>
                <p className="mt-2 text-lg font-semibold text-white">
                  {o.name}
                </p>
                <p className="mt-1 text-sm text-white/65">{o.location}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
